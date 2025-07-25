import { NavigationBar } from "@/components/layout/NavigationBar";
import RegistrationForm from "@/components/register/RegistrationForm";
import Footer from "@/components/layout/Footer";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <main className="container py-12">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
