import { ArrowRight, BookOpen, Calendar, MessageSquare, Phone, Mail, HelpCircle, ChevronRight, ChevronLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

const suggestions = [
  {
    id: 1,
    title: "International Year One in Business (1-Semester Pathway) Leading to Bachelor of Science in Accounting",
    intake: "Jan 22, May 22",
    fee: "$200",
    duration: "24 months",
    scores: { ielts: 5.5, toefl: 70, gpa: "60%" },
  },
  {
    id: 2,
    title: "International Year One in Business (1-Semester Pathway) Leading to Bachelor of Science in Accounting",
    intake: "Jan 22, May 22",
    fee: "$200",
    duration: "24 months",
    scores: { ielts: 5.5, toefl: 70, gpa: "60%" },
  },
  {
    id: 3,
    title: "International Year One in Business (1-Semester Pathway) Leading to Bachelor of Science in Accounting",
    intake: "Jan 22, May 22",
    fee: "$200",
    duration: "24 months",
    scores: { ielts: 5.5, toefl: 70, gpa: "60%" },
  },
];

const events = [
  {
    id: 1,
    title: "Live Webinar",
    type: "Study in USA",
    date: "Dec 14, 2021 - 3:30 pm IST",
    icon: "bg-black",
  },
  {
    id: 2,
    title: "Seminar",
    type: "Study in USA",
    date: "Dec 14, 2021 - 3:30 pm IST",
    icon: "bg-blue-500",
  },
  {
    id: 3,
    title: "Live Webinar",
    type: "Study in USA",
    date: "Dec 14, 2021 - 3:30 pm IST",
    icon: "bg-purple-500",
  },
];

export const DashboardHome = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full font-sans">
      {/* Main Content Area */}
      <div className="flex-1 space-y-8 overflow-y-auto pb-6 no-scrollbar">
        {/* Next Steps Card */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Next steps</h2>
          <p className="text-sm text-gray-500 mb-8 font-medium">Congratulations! Almost there! Please follow the steps below to get started.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="h-12 w-12 rounded-full bg-[#fee2e2] flex items-center justify-center text-[#ef4444] shrink-0 group-hover:scale-105 transition-transform">
                <div className="h-6 w-6 rounded-full border-[2.5px] border-current opacity-80" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1 group-hover:text-[#ef4444] transition-colors">
                  Complete profile <ArrowRight className="h-3.5 w-3.5" />
                </h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Complete profile to explore programs</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="h-12 w-12 rounded-full bg-[#fee2e2] flex items-center justify-center text-[#ef4444] shrink-0 group-hover:scale-105 transition-transform">
                <BookOpen className="h-6 w-6 opacity-80" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1 group-hover:text-[#ef4444] transition-colors">
                  Explore Programs <ArrowRight className="h-3.5 w-3.5" />
                </h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">View, shortlist or apply to programs</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="h-12 w-12 rounded-full bg-[#fee2e2] flex items-center justify-center text-[#ef4444] shrink-0 group-hover:scale-105 transition-transform">
                <Calendar className="h-6 w-6 opacity-80" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1 group-hover:text-[#ef4444] transition-colors">
                  Upcoming Events <ArrowRight className="h-3.5 w-3.5" />
                </h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Keep yourself updated on latest events</p>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions Section */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Suggestions</h2>
              <p className="text-sm text-gray-500 mt-1 font-medium">Arts & Humanities</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/dashboard/programs" className="text-sm text-[#ef4444] hover:text-red-600 font-semibold mr-2 flex items-center gap-1">
                View more <ArrowRight className="h-4 w-4" />
              </Link>
              <button onClick={scrollPrev} className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={scrollNext} className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden -mx-4 px-4 py-2" ref={emblaRef}>
            <div className="flex gap-6">
              {suggestions.map((item) => (
                <div key={item.id} className="flex-[0_0_340px] bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-[15px] font-bold text-gray-900 line-clamp-3 leading-snug pr-4">
                      {item.title}
                    </h3>
                    <button className="text-gray-300 hover:text-[#ef4444] transition-colors">
                      <div className="h-5 w-4 border-[1.5px] border-current rounded-[2px]" />
                    </button>
                  </div>

                  <div className="text-xs text-gray-500 mb-5 pb-4 border-b border-gray-50">
                    <span className="font-medium text-gray-500">Intake :</span> <span className="text-[#10b981] font-semibold ml-1">{item.intake}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-xs mb-5">
                    <div>
                      <p className="text-gray-400 mb-1">Application Fee</p>
                      <p className="font-bold text-gray-900 text-sm">{item.fee}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Duration</p>
                      <p className="font-bold text-gray-900 text-sm">{item.duration}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3 mb-5">
                    <p className="text-[10px] text-gray-400 mb-2 flex items-center gap-1.5 font-medium uppercase tracking-wide">
                      <FileText className="h-3 w-3" /> Test Score
                    </p>
                    <div className="flex justify-between text-xs px-1">
                      <div className="text-center">
                        <p className="font-bold text-gray-900 text-sm">{item.scores.ielts}</p>
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">IELTS</p>
                      </div>
                      <div className="w-px bg-gray-200 h-8 mx-2" />
                      <div className="text-center">
                        <p className="font-bold text-gray-900 text-sm">{item.scores.toefl}</p>
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">TOEFL</p>
                      </div>
                      <div className="w-px bg-gray-200 h-8 mx-2" />
                      <div className="text-center">
                        <p className="font-bold text-gray-900 text-sm">{item.scores.gpa}</p>
                        <p className="text-[10px] text-gray-400 font-medium mt-0.5">Min GPA</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[#1c1c1c] text-white text-xs font-bold py-3 rounded-xl hover:bg-black transition-all shadow-md hover:shadow-lg">
                    Apply now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Universities (Placeholder for now) */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Featured Universities</h2>
            <Link to="/dashboard/programs" className="text-sm text-[#ef4444] hover:text-red-600 font-semibold flex items-center gap-1">
              View more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Placeholder content for universities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-40 flex items-center justify-center text-gray-400">
              University Card Placeholder
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-40 flex items-center justify-center text-gray-400">
              University Card Placeholder
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-[340px] space-y-6 shrink-0">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
              {/* Placeholder Image */}
              <img src="https://i.pravatar.cc/150?u=shilpa" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Shilpa Mehra</h3>
              <Link to="/dashboard/profile" className="text-xs text-[#ef4444] hover:text-red-600 flex items-center gap-1 font-medium mt-0.5">
                Update profile <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
          <div className="relative h-12 w-12 flex items-center justify-center">
            <svg className="h-full w-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
              <path className="text-[#10b981]" strokeDasharray="74, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
            <span className="absolute text-[10px] font-bold text-[#10b981]">74%</span>
          </div>
        </div>

        {/* Advisor Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
          <h3 className="text-sm font-bold text-gray-900 mb-2">Advisor</h3>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">Get in touch to shortlist or apply to universities or programs based on your preferences.</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                <img src="https://i.pravatar.cc/150?u=hema" alt="Advisor" className="h-full w-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Hema Singh</h4>
                <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5 font-medium">
                  <Phone className="h-3 w-3" /> 9475623489
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="h-9 w-9 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors">
                <MessageSquare className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-400 hover:text-gray-600 flex items-center justify-center transition-colors">
                <Calendar className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-gray-900">Upcoming events</h3>
            <Link to="/dashboard/events" className="text-xs text-[#ef4444] hover:text-red-600 flex items-center gap-1 font-medium">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-5">
            {events.map((event) => (
              <div key={event.id} className="flex items-start gap-4 group cursor-pointer">
                <div className={`h-10 w-10 rounded-full ${event.icon} shrink-0 flex items-center justify-center text-white text-[10px] font-bold shadow-sm`}>
                  {event.title[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-gray-900 truncate pr-2 group-hover:text-[#ef4444] transition-colors">{event.title}</h4>
                    <button className="text-gray-300 hover:text-gray-600">
                      <div className="h-5 w-5 bg-black text-white rounded-full flex items-center justify-center">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{event.type}</p>
                  <p className="text-[10px] text-gray-400 mt-1.5">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executives */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-gray-900">CX Executive</h3>
              <span className="text-[9px] bg-gray-100 text-gray-500 px-2 py-1 rounded-md font-bold tracking-wide">NOT ASSIGNED YET</span>
            </div>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">A CX exec supports all your queries and resolves any issue you are facing.</p>
            <Link to="/help" className="text-xs text-[#ef4444] hover:text-red-600 flex items-center gap-1 font-medium">
              Help <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-gray-900">Doc. Executive</h3>
              <span className="text-[9px] bg-gray-100 text-gray-500 px-2 py-1 rounded-md font-bold tracking-wide">NOT ASSIGNED YET</span>
            </div>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed">A Doc exec takes care of your documentation and admission process once you apply to a program/ university.</p>
            <Link to="/help" className="text-xs text-[#ef4444] hover:text-red-600 flex items-center gap-1 font-medium">
              Help <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Footer Info */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3 text-xs text-gray-500 font-medium hover:text-gray-900 transition-colors cursor-pointer">
            <Mail className="h-3.5 w-3.5" /> info@canam.io
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500 font-medium hover:text-gray-900 transition-colors cursor-pointer">
            <Phone className="h-3.5 w-3.5" /> 1800 890 1775
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500 font-medium hover:text-gray-900 transition-colors cursor-pointer">
            <HelpCircle className="h-3.5 w-3.5" /> FAQs
          </div>
        </div>
      </div>
    </div>
  );
};
