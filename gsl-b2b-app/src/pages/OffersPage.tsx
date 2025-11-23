import { useState } from "react";
import { Gift, MapPin, Calendar, CheckCircle } from "lucide-react";

interface Offer {
    id: string;
    program: string;
    institution: string;
    country: string;
    scholarship: string;
    deadline: string;
    status: "pending" | "accepted" | "declined";
}

export const OffersPage = () => {
    // Mock data - replace with API call
    const [offers] = useState<Offer[]>([
        {
            id: "1",
            program: "Master of Computer Science",
            institution: "University of Toronto",
            country: "Canada",
            scholarship: "$5,000 Entrance Scholarship",
            deadline: "2024-05-01",
            status: "pending",
        },
        {
            id: "2",
            program: "MBA",
            institution: "University of British Columbia",
            country: "Canada",
            scholarship: "None",
            deadline: "2024-04-15",
            status: "accepted",
        },
    ]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">My Offers</h1>
                <p className="text-gray-500 mt-1">Manage your admission offers and scholarships</p>
            </div>

            <div className="grid gap-6">
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-all relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#ea580c]" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex gap-4">
                                <div className="h-14 w-14 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100 shrink-0">
                                    <Gift className="h-7 w-7 text-[#ea580c]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {offer.program}
                                    </h3>
                                    <p className="text-gray-700 font-medium mb-2">{offer.institution}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1.5">
                                            <MapPin className="h-4 w-4" />
                                            {offer.country}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-[#ea580c] font-medium bg-orange-50 px-2 py-0.5 rounded-md">
                                            <CheckCircle className="h-3.5 w-3.5" />
                                            {offer.scholarship}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-3 min-w-[200px]">
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wide mb-1">Response Deadline</p>
                                    <div className="flex items-center gap-2 text-gray-900 font-semibold">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                        {new Date(offer.deadline).toLocaleDateString(undefined, { dateStyle: 'long' })}
                                    </div>
                                </div>

                                <div className="flex gap-2 mt-2">
                                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 font-bold rounded-xl text-sm hover:bg-gray-50 transition-colors">
                                        Decline
                                    </button>
                                    <button className="px-4 py-2 bg-[#1c1c1c] text-white font-bold rounded-xl text-sm hover:bg-black transition-colors shadow-sm">
                                        Accept Offer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
