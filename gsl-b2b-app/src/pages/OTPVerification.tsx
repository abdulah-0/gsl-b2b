import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const OTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email?: string })?.email || "your email";
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
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-[400px] bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-10 border border-gray-100">
        <div className="text-center mb-8">
          <div className="h-12 w-12 bg-[#ea580c] rounded-xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify OTP</h1>
          <p className="text-gray-500 text-sm">
            Enter the 6-digit code sent to <br />
            <span className="font-semibold text-gray-900">{email}</span>
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 text-center">
              Enter Code
            </label>
            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-center text-2xl tracking-[0.5em] font-bold text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all"
              placeholder="000000"
            />
          </div>

          <button
            onClick={handleVerify}
            disabled={loading || otp.length !== 6}
            className="w-full bg-[#1c1c1c] text-white font-bold py-3 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              "Verify OTP"
            )}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3">Didn't receive the code?</p>
            <button
              onClick={handleResend}
              disabled={resendLoading}
              className="text-sm font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors disabled:opacity-50"
            >
              {resendLoading ? "Resending..." : "Resend OTP"}
            </button>
          </div>

          <button
            onClick={() => navigate("/login")}
            className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors mt-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

