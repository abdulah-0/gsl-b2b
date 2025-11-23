import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { User, Mail, Phone, MapPin, Edit2, Save } from "lucide-react";
import { toast } from "sonner";

export const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock user data - replace with actual user data from store/API
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: user?.email || "",
    phone: "+1 234 567 890",
    address: "123 University Ave, Toronto, ON",
    dob: "1999-05-15",
    bio: "Aspiring Computer Science student with a passion for AI and Machine Learning.",
  });

  const handleSave = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-500 mt-1">Manage your personal information</p>
        </div>
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          disabled={loading}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-colors ${isEditing
              ? "bg-[#1c1c1c] text-white hover:bg-black"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
        >
          {loading ? (
            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isEditing ? (
            <>
              <Save className="h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-center">
            <div className="relative inline-block mb-4">
              <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-sm overflow-hidden">
                <User className="h-12 w-12 text-gray-400" />
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-[#ea580c] text-white p-1.5 rounded-full hover:bg-[#c2410c] transition-colors shadow-sm">
                  <Edit2 className="h-3 w-3" />
                </button>
              )}
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <p className="text-gray-500 text-sm mb-4">Student</p>

            <div className="flex justify-center gap-2">
              <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Details Form */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={profileData.firstName}
                  onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={profileData.lastName}
                  onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Bio
                </label>
                <textarea
                  disabled={!isEditing}
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] disabled:opacity-60 disabled:cursor-not-allowed transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    disabled={true}
                    value={profileData.email}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 font-medium cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="tel"
                    disabled={!isEditing}
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={profileData.address}
                    onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
