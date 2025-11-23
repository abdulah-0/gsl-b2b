import { useState } from "react";
import { Star, MapPin, Clock, DollarSign, ArrowRight } from "lucide-react";

interface ShortlistedProgram {
    id: string;
    title: string;
    institution: string;
    country: string;
    duration: string;
    tuition: string;
    intake: string;
}

export const ShortlistsPage = () => {
    // Mock data - replace with API call
    const [shortlists] = useState<ShortlistedProgram[]>([
        {
            id: "1",
            title: "Master of Data Science",
            institution: "University of Melbourne",
            country: "Australia",
            duration: "2 Years",
            tuition: "AUD 45,000/year",
            intake: "Feb 2025",
        },
        {
            id: "2",
            title: "MSc Artificial Intelligence",
            institution: "Imperial College London",
            country: "UK",
            duration: "1 Year",
            tuition: "£35,000",
            intake: "Sep 2024",
        },
        {
            id: "3",
            title: "Master of Business Analytics",
            institution: "MIT Sloan",
            country: "USA",
            duration: "12 Months",
            tuition: "$85,000",
            intake: "Aug 2024",
        },
    ]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">My Shortlists</h1>
                <p className="text-gray-500 mt-1">Programs you have saved for later</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shortlists.map((program) => (
                    <div
                        key={program.id}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all group relative"
                    >
                        <button className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-500 transition-colors">
                            <Star className="h-6 w-6 fill-current" />
                        </button>

                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3">
                                {program.intake}
                            </span>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 h-14">
                                {program.title}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">{program.institution}</p>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <MapPin className="h-4 w-4 text-gray-400" />
                                {program.country}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Clock className="h-4 w-4 text-gray-400" />
                                {program.duration}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <DollarSign className="h-4 w-4 text-gray-400" />
                                {program.tuition}
                            </div>
                        </div>

                        <button className="w-full bg-[#1c1c1c] text-white font-bold py-3 rounded-xl hover:bg-black transition-all shadow-md flex items-center justify-center gap-2 group-hover:gap-3">
                            Apply Now
                            <ArrowRight className="h-4 w-4 transition-all" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
