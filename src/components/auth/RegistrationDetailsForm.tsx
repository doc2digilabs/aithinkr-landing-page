import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { User, AlertCircle } from "lucide-react";

export const RegistrationDetailsForm = () => {
  const [userType, setUserType] = useState<"student" | "professional" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    student_stream: "",
    student_subject: "",
    professional_exp: "",
    company_name: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast.error("You must be logged in to complete your profile.", { icon: <AlertCircle /> });
      setLoading(false);
      return;
    }

    // Sanitize phone number to only include digits
    const sanitizedPhone = formData.phone_no.replace(/\D/g, '');

    const profileData = {
      name: formData.name,
      phone_no: sanitizedPhone || null, // Send null if empty
      student_stream: userType === 'student' ? formData.student_stream : null,
      student_subject: userType === 'student' ? formData.student_subject : null,
      professional_exp: userType === 'professional' ? formData.professional_exp : null,
      company_name: userType === 'professional' ? formData.company_name : null,
      wizard_completed: true,
    };

    console.log("Attempting to save profile data:", profileData);

    const { error } = await supabase.from("profiles").update(profileData).eq("id", user.id);

    if (error) {
      console.error("Error updating profile:", error);
      toast.error("Error Saving Details", { description: error.message, icon: <AlertCircle /> });
    } else {
      await supabase.auth.updateUser({ data: { name: formData.name } });
      toast.success("Profile Complete!", { description: "Redirecting to your dashboard...", icon: <User /> });
      navigate("/dashboard");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Complete Your Profile</CardTitle>
          <CardDescription className="text-center text-lg">
            Let's start with who you are.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3 text-center">
              <Label className="text-xl">Are you a student or a professional?</Label>
              <RadioGroup onValueChange={(value) => setUserType(value as "student" | "professional")} className="flex justify-center space-x-6 pt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="r1" />
                  <Label htmlFor="r1" className="text-lg">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="r2" />
                  <Label htmlFor="r2" className="text-lg">Professional</Label>
                </div>
              </RadioGroup>
            </div>

            {userType && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone_no">Phone Number</Label>
                    <Input id="phone_no" type="tel" placeholder="+1 234 567 890" value={formData.phone_no} onChange={handleChange} />
                  </div>
                </div>

                {userType === 'student' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="student_stream">Stream/Field of Study</Label>
                      <Input id="student_stream" placeholder="e.g., Computer Science" value={formData.student_stream} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student_subject">Key Subjects</Label>
                      <Input id="student_subject" placeholder="e.g., AI, Web Dev" value={formData.student_subject} onChange={handleChange} />
                    </div>
                  </div>
                )}

                {userType === 'professional' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="professional_exp">Years of Experience</Label>
                      <Input id="professional_exp" type="number" placeholder="e.g., 5" value={formData.professional_exp} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company_name">Company Name</Label>
                      <Input id="company_name" placeholder="e.g., Google" value={formData.company_name} onChange={handleChange} />
                    </div>
                  </div>
                )}
                
                <CardFooter className="px-0 pt-4">
                  <Button type="submit" disabled={loading} className="w-full text-lg">
                    {loading ? "Saving..." : "Save and Continue"}
                  </Button>
                </CardFooter>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

