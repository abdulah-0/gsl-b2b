import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { OTPVerification } from "./pages/OTPVerification";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Dashboard } from "./pages/Dashboard";
import { DashboardHome } from "./pages/DashboardHome";
import { ProfilePage } from "./pages/ProfilePage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { OffersPage } from "./pages/OffersPage";
import { ShortlistsPage } from "./pages/ShortlistsPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { ProtectedRoute } from "./pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="education" element={<PlaceholderPage title="Educational Background" icon="🎓" />} />
          <Route path="test-scores" element={<PlaceholderPage title="Test Scores" icon="📝" />} />
          <Route path="preferences" element={<PlaceholderPage title="Preferences" icon="⚙️" />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="applications" element={<ApplicationsPage />} />
          <Route path="shortlists" element={<ShortlistsPage />} />
          <Route path="offers" element={<OffersPage />} />
          <Route path="events" element={<PlaceholderPage title="Events" icon="📅" />} />
          <Route path="help" element={<PlaceholderPage title="Help & Support" icon="❓" />} />
        </Route>

        {/* Redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>

      <Toaster position="top-right" theme="dark" />
    </Router>
  );
}

export default App;
