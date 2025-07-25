import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Mail, UserCheck, AlertCircle } from "lucide-react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: "",
    course_name: "",
    is_student: false,
    is_python: false,
    is_machine_learning: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      course_name: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, password, phone_no, course_name, is_student, is_python, is_machine_learning } = formData;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          phone_no,
          course_name,
          is_student,
          is_python,
          is_machine_learning,
        },
      },
    });

    if (error) {
        if (error.message.includes("User already registered")) {
            toast.info("You've Already Registered", {
                description: "This email address is already in use. Please sign in instead.",
                icon: <UserCheck className="h-5 w-5" />,
            });
        } else {
            toast.error("Registration Failed", {
                description: error.message,
                icon: <AlertCircle className="h-5 w-5" />,
            });
        }
    } else if (data.user) {
      toast.success("Registration Successful!", {
        description: "Please check your email to verify your account and complete the process.",
        icon: <Mail className="h-5 w-5" />,
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        phone_no: "",
        course_name: "",
        is_student: false,
        is_python: false,
        is_machine_learning: false,
      });
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center pt-0 pb-12 px-4">
      <Card className="w-full max-w-2xl border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Join AiThinkr
          </CardTitle>
          <CardDescription className="text-lg">
            Start your journey in AI and Data Science with us.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone_no">Phone Number</Label>
                <Input
                  id="phone_no"
                  type="tel"
                  placeholder="+1 234 567 890"
                  value={formData.phone_no}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="course_name">Course of Interest</Label>
                <Select onValueChange={handleSelectChange} value={formData.course_name}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full Stack Development">
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="AI/ML Engineering">
                      AI/ML Engineering
                    </SelectItem>
                     <SelectItem value="Cloud Computing">
                      Cloud Computing
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                  <Checkbox id="is_student" checked={formData.is_student} onCheckedChange={(checked) => setFormData(prev => ({...prev, is_student: !!checked}))} />
                  <Label htmlFor="is_student" className="text-base">
                    Are you currently a student?
                  </Label>
                </div>
                 <div className="flex items-center space-x-3">
                  <Checkbox id="is_python" checked={formData.is_python} onCheckedChange={(checked) => setFormData(prev => ({...prev, is_python: !!checked}))} />
                  <Label htmlFor="is_python" className="text-base">
                    Do you have experience with Python?
                  </Label>
                </div>
                 <div className="flex items-center space-x-3">
                  <Checkbox id="is_machine_learning" checked={formData.is_machine_learning} onCheckedChange={(checked) => setFormData(prev => ({...prev, is_machine_learning: !!checked}))} />
                  <Label htmlFor="is_machine_learning" className="text-base">
                    Are you interested in Machine Learning?
                  </Label>
                </div>
            </div>
             <CardFooter className="px-0 pt-8">
              <Button type="submit" disabled={loading} className="w-full text-lg">
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationForm;
