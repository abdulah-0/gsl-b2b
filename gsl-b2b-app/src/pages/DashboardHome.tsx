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
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      {/* Main Content Area */}
      <div className="flex-1 space-y-6 overflow-y-auto pb-6">
        {/* Next Steps Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Next steps</h2>
          <p className="text-sm text-gray-500 mb-6">Congratulations! Almost there! Please follow the steps below to get started.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                <div className="h-5 w-5 rounded-full border-2 border-current" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1">
                  Complete profile <ArrowRight className="h-3 w-3" />
                </h3>
                <p className="text-xs text-gray-500 mt-1">Complete profile to explore programs</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1">
                  Explore Programs <ArrowRight className="h-3 w-3" />
                </h3>
                <p className="text-xs text-gray-500 mt-1">View, shortlist or apply to programs</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 flex items-center gap-1">
                  Upcoming Events <ArrowRight className="h-3 w-3" />
                </h3>
                <p className="text-xs text-gray-500 mt-1">Keep yourself updated on latest events</p>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Suggestions</h2>
              <p className="text-sm text-gray-500 mt-1">Arts & Humanities</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={scrollPrev} className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={scrollNext} className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                <ChevronRight className="h-5 w-5" />
              </button>
              <Link to="/dashboard/programs" className="text-sm text-red-500 hover:text-red-600 font-medium ml-2 flex items-center gap-1">
                View more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {suggestions.map((item) => (
                <div key={item.id} className="flex-[0_0_320px] bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-3 leading-tight">
                      {item.title}
                    </h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <div className="h-4 w-3 border border-current rounded-sm" />
                    </button>
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    <span className="font-medium text-gray-700">Intake :</span> <span className="text-green-600">{item.intake}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs mb-4">
                    <div>
                      <p className="text-gray-500">Application Fee</p>
                      <p className="font-semibold text-gray-900">{item.fee}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p className="font-semibold text-gray-900">{item.duration}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-2 mb-4">
                    <p className="text-[10px] text-gray-500 mb-1 flex items-center gap-1">
                      <FileText className="h-3 w-3" /> Test Score
                    </p>
                    <div className="flex justify-between text-xs">
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{item.scores.ielts}</p>
                        <p className="text-[10px] text-gray-500">IELTS</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{item.scores.toefl}</p>
                        <p className="text-[10px] text-gray-500">TOEFL</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900">{item.scores.gpa}</p>
                        <p className="text-[10px] text-gray-500">Min GPA</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-gray-900 text-white text-xs font-medium py-2 rounded-lg hover:bg-black transition-colors">
                    Apply now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Universities (Placeholder for now) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Featured Universities</h2>
            <Link to="/dashboard/programs" className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1">
              View more <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-80 space-y-6 shrink-0">
        {/* Profile Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
              {/* Placeholder Image */}
              <div className="h-full w-full bg-gray-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Shilpa Mehra</h3>
              <Link to="/dashboard/profile" className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1">
                Update profile <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
          <div className="h-10 w-10 rounded-full border-4 border-green-500 flex items-center justify-center text-xs font-bold text-green-600">
            74%
          </div>
        </div>

        {/* Advisor Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">Advisor</h3>
          <p className="text-xs text-gray-500 mb-4">Get in touch to shortlist or apply to universities or programs based on your preferences.</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                {/* Placeholder Image */}
                <div className="h-full w-full bg-gray-300" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Hema Singh</h4>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Phone className="h-3 w-3" /> 9475623489
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-500">
                <MessageSquare className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-500">
                <Calendar className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-800">Upcoming events</h3>
            <Link to="/dashboard/events" className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-start gap-3">
                <div className={`h-8 w-8 rounded-full ${event.icon} shrink-0 flex items-center justify-center text-white text-[10px] font-bold`}>
                  {event.title[0]}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-gray-900">{event.title}</h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ArrowRight className="h-4 w-4 bg-black text-white rounded-full p-0.5" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">{event.type}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executives */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-800">CX Executive</h3>
              <span className="text-[10px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded">NOT ASSIGNED YET</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">A CX exec supports all your queries and resolves any issue you are facing.</p>
            <Link to="/help" className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1">
              Help <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-800">Doc. Executive</h3>
              <span className="text-[10px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded">NOT ASSIGNED YET</span>
            </div>
            <p className="text-xs text-gray-500 mb-2">A Doc exec takes care of your documentation and admission process once you apply to a program/ university.</p>
            <Link to="/help" className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1">
              Help <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Footer Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Mail className="h-3 w-3" /> info@canam.io
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Phone className="h-3 w-3" /> 1800 890 1775
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <HelpCircle className="h-3 w-3" /> FAQs
          </div>
        </div>
      </div>
    </div>
  );
};
