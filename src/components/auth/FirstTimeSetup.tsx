import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const FirstTimeSetup = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [studentStream, setStudentStream] = useState("");
  const [studentSubject, setStudentSubject] = useState("");
  const [professionalExp, setProfessionalExp] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step === 1 && !role) {
      toast.error("Please select a role.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      const { error } = await supabase
        .from("profiles")
        .update({
          role,
          student_stream: studentStream,
          student_subject: studentSubject,
          professional_exp: professionalExp,
          company_name: companyName,
          wizard_completed: true,
        })
        .eq("id", user.id);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Profile updated successfully!");
        window.location.reload();
      }
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center">Welcome to AiThinkr!</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div>
              <Label className="text-lg">What is your role?</Label>
              <RadioGroup onValueChange={setRole} value={role} className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="student" />
                  <Label htmlFor="student">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="professional" id="professional" />
                  <Label htmlFor="professional">Software Professional</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="teacher" id="teacher" />
                  <Label htmlFor="teacher">Teacher</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="writer" id="writer" />
                  <Label htmlFor="writer">Writer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="entrepreneur" id="entrepreneur" />
                  <Label htmlFor="entrepreneur">Entrepreneur</Label>
                </div>
              </RadioGroup>
              <Button onClick={handleNext} className="mt-6 w-full">Next</Button>
            </div>
          )}
          {step === 2 && role === "student" && (
            <div>
              <Label className="text-lg">What is your stream?</Label>
              <Input
                value={studentStream}
                onChange={(e) => setStudentStream(e.target.value)}
                className="mt-2"
              />
              <Label className="text-lg mt-4">What is your subject?</Label>
              <Input
                value={studentSubject}
                onChange={(e) => setStudentSubject(e.target.value)}
                className="mt-2"
              />
              <div className="flex justify-between mt-6">
                <Button onClick={handlePrev} variant="outline">Previous</Button>
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
          )}
          {step === 2 && role === "professional" && (
            <div>
              <Label className="text-lg">What is your professional experience?</Label>
              <Input
                value={professionalExp}
                onChange={(e) => setProfessionalExp(e.target.value)}
                className="mt-2"
              />
              <Label className="text-lg mt-4">What is your company name?</Label>
              <Input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="mt-2"
              />
              <div className="flex justify-between mt-6">
                <Button onClick={handlePrev} variant="outline">Previous</Button>
                <Button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
          )}
          {step === 2 && (role === "teacher" || role === "writer" || role === "entrepreneur") && (
            <div className="text-center">
                <p>Thank you for signing up!</p>
                <Button onClick={handleSubmit} disabled={loading} className="mt-6">
                  {loading ? "Submitting..." : "Go to Dashboard"}
                </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
