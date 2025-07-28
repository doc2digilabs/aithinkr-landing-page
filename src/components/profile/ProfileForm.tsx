import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { useAuth } from "@/hooks/useAuth";
import { Save, ShieldCheck, AlertCircle, XCircle } from "lucide-react";

const ProfileForm = () => {
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState<'student' | 'professional' | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone_no: "",
    student_stream: "",
    student_subject: "",
    professional_exp: "",
    company_name: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        toast.error("Error fetching profile", { description: error.message });
      } else if (profile) {
        setFormData({
          email: user.email || "",
          name: profile.name || "",
          phone_no: profile.phone_no || "",
          student_stream: profile.student_stream || "",
          student_subject: profile.student_subject || "",
          professional_exp: profile.professional_exp || "",
          company_name: profile.company_name || "",
        });

        if (profile.student_stream || profile.student_subject) {
          setUserType("student");
        } else if (profile.professional_exp || profile.company_name) {
          setUserType("professional");
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, [user, authLoading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);

    const { name, phone_no, student_stream, student_subject, professional_exp, company_name } = formData;
    
    const profileData = {
      name,
      phone_no,
      student_stream: userType === 'student' ? student_stream : null,
      student_subject: userType === 'student' ? student_subject : null,
      professional_exp: userType === 'professional' ? professional_exp : null,
      company_name: userType === 'professional' ? company_name : null,
    };

    const { error } = await supabase
      .from("profiles")
      .update(profileData)
      .eq("id", user.id);

    if (error) {
      toast.error("Error Updating Profile", { description: error.message });
    } else {
      await supabase.auth.updateUser({ data: { name } });
      toast.success("Profile Updated Successfully");
    }
    setLoading(false);
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!password) {
      toast.error("Password cannot be empty");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      toast.error("Error updating password", { description: error.message });
    } else {
      toast.success("Password updated successfully");
      setPassword("");
      setConfirmPassword("");
    }
    setLoading(false);
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdateProfile} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={formData.email} readOnly disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" value={formData.name} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone_no">Phone Number</Label>
                <Input id="phone_no" type="tel" value={formData.phone_no} onChange={handleChange} />
              </div>
            </div>
            
            <Separator />

            {userType === 'student' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="student_stream">Stream/Field of Study</Label>
                  <Input id="student_stream" value={formData.student_stream} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student_subject">Key Subjects</Label>
                  <Input id="student_subject" value={formData.student_subject} onChange={handleChange} />
                </div>
              </div>
            )}

            {userType === 'professional' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="professional_exp">Years of Experience</Label>
                  <Input id="professional_exp" type="number" value={formData.professional_exp} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company_name">Company Name</Label>
                  <Input id="company_name" value={formData.company_name} onChange={handleChange} />
                </div>
              </div>
            )}

            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Choose a new password.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <Button type="submit" variant="outline" disabled={loading}>
              {loading ? "Updating..." : "Update Password"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileForm;

