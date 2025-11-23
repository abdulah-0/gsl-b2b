import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "../lib/supabase";
import { User, ArrowRight } from "lucide-react";

const onboardingSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    role: z.enum(["student", "agent", "institution"]),
});

type OnboardingFormData = z.infer<typeof onboardingSchema>;

export const OnboardingPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OnboardingFormData>({
        resolver: zodResolver(onboardingSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            role: "student",
        },
    });

    const onSubmit: SubmitHandler<OnboardingFormData> = async (data) => {
        if (!user) return;
        setLoading(true);

        try {
            const { error } = await supabase
                .from("profiles")
                .upsert({
                    id: user.id,
                    email: user.email,
                    first_name: data.firstName,
                    last_name: data.lastName,
                    role: data.role,
                    onboarding_completed: true,
                    updated_at: new Date().toISOString(),
                });

            if (error) {
                console.error("Supabase error details:", error);
                throw error;
            }

            toast.success("Profile updated!");
            // Force a reload or re-check of auth state if needed, 
            // but usually navigation is enough if the protected route checks the DB or if we update local state.
            // For now, we'll navigate to dashboard.
            navigate("/dashboard");
            window.location.reload(); // Reload to ensure auth hook picks up the new profile state if it fetches it
        } catch (error) {
            console.error("Full error object:", error);
            toast.error("Failed to update profile. Please check console for details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row border border-gray-100">

                {/* Left Side - Visual */}
                <div className="bg-[#1c1c1c] p-10 flex flex-col justify-between md:w-2/5 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <User className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Welcome!</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Let's set up your profile to get you started with GSL B2B.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12">
                        <div className="flex items-center gap-3 text-sm font-medium text-gray-300">
                            <span className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center font-bold">1</span>
                            <span>Personal Details</span>
                        </div>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute -top-12 -right-12 h-48 w-48 bg-[#ea580c] rounded-full blur-3xl opacity-20" />
                    <div className="absolute -bottom-12 -left-12 h-48 w-48 bg-blue-500 rounded-full blur-3xl opacity-20" />
                </div>

                {/* Right Side - Form */}
                <div className="p-10 md:w-3/5">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Tell us about yourself</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    First Name
                                </label>
                                <input
                                    {...register("firstName")}
                                    type="text"
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all text-sm font-medium"
                                    placeholder="John"
                                />
                                {errors.firstName && (
                                    <p className="text-[#ef4444] text-xs mt-1.5 font-medium">{errors.firstName.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Last Name
                                </label>
                                <input
                                    {...register("lastName")}
                                    type="text"
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all text-sm font-medium"
                                    placeholder="Doe"
                                />
                                {errors.lastName && (
                                    <p className="text-[#ef4444] text-xs mt-1.5 font-medium">{errors.lastName.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                I am a...
                            </label>
                            <select
                                {...register("role")}
                                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-all text-sm font-medium appearance-none"
                            >
                                <option value="student">Student</option>
                                <option value="agent">Agent</option>
                                <option value="institution">Institution Representative</option>
                            </select>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1c1c1c] text-white font-bold py-3 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Saving...</span>
                                    </>
                                ) : (
                                    <>
                                        Continue to Dashboard
                                        <ArrowRight className="h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
