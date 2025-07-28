import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Training from "./pages/training";
import Careers from "./pages/careers";
import Products from "./pages/products";
import Research from "./pages/research";
import Blog from "./pages/blog";
import About from "./pages/about";
import AuthPage from "./pages/auth";
import ProfilePage from "./pages/profile";
import ForgotPasswordPage from "./pages/forgot-password";
import ResetPasswordPage from "./pages/reset-password";
import PrivacyPolicyPage from "./pages/privacy-policy";
import TermsOfServicePage from "./pages/terms-of-service";
import DashboardPage from "./pages/dashboard";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import CompleteProfilePage from "./pages/complete-profile";
import AdminPage from "./pages/admin";
import { AdminProtectedRoute } from "./components/auth/AdminProtectedRoute";
import CoursesPage from "./pages/courses";
import CourseDetailPage from "./pages/course-detail";
import { AuthProvider } from "./hooks/useAuth";
import CoursePlayer from "./pages/course-player/CoursePlayer";
import AgenticDocumentExtractionPage from "./pages/agentic-document-extraction";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/training" element={<Training />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/products/agentic-document-extraction"
        element={<AgenticDocumentExtractionPage />}
      />
      <Route path="/research" element={<Research />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:courseId" element={<CourseDetailPage />} />

      {/* Admin Protected Routes */}
      <Route element={<AdminProtectedRoute />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path="/courses/:courseId/learn" element={<CoursePlayer />} />
      </Route>     

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-center" richColors />
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
