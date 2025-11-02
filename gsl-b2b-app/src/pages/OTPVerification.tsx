import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

export const OTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email?: string })?.email || "";
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }

    setLoading(true);
    try {
      // Mock OTP verification - replace with actual Supabase function call
      if (otp === "000000") {
        toast.success("OTP verified successfully!");
        navigate("/dashboard");
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    try {
      // Mock resend OTP
      toast.success("OTP resent to your email");
    } catch (error) {
      toast.error("Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
          <h1 className="text-3xl font-bold text-center mb-2 text-cyan">
            Verify OTP
          </h1>
          <p className="text-center text-slate-400 mb-8">
            Enter the 6-digit code sent to {email}
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                OTP Code
              </label>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-center text-2xl tracking-widest placeholder-slate-400 focus:outline-none focus:border-cyan"
                placeholder="000000"
              />
            </div>

            <button
              onClick={handleVerify}
              disabled={loading || otp.length !== 6}
              className="w-full bg-cyan text-slate-900 font-semibold py-2 rounded-lg hover:bg-cyan/90 transition disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              onClick={handleResend}
              disabled={resendLoading}
              className="w-full bg-slate-700 text-cyan py-2 rounded-lg hover:bg-slate-600 transition disabled:opacity-50"
            >
              {resendLoading ? "Resending..." : "Resend OTP"}
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full bg-slate-700 text-slate-300 py-2 rounded-lg hover:bg-slate-600 transition"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

