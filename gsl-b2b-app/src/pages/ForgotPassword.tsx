```javascript
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authService } from "../services/authService";
import { toast } from "sonner";
import { ArrowLeft, KeyRound, Mail } from "lucide-react";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setLoading(true);
    try {
      await authService.resetPassword(data.email);
      setEmailSent(true);
      toast.success("Password reset email sent!");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send reset email."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-[400px] bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-10 border border-gray-100">
        <div className="text-center mb-8">
          <div className="h-12 w-12 bg-[#ea580c] rounded-xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
            <KeyRound className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
          <p className="text-gray-500 text-sm">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        {!emailSent ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  {...register("email")}
                  type="email"
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all text-sm font-medium"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-[#ef4444] text-xs mt-1.5 font-medium ml-1">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan text-slate-900 font-semibold py-2 rounded-lg hover:bg-cyan/90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/login" className="text-cyan hover:text-cyan/80 text-sm">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

