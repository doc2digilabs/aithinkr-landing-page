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
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { Save, ShieldCheck, AlertCircle, XCircle } from "lucide-react";

const ProfileForm = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "", // Added email to form data
    phone_no: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [completeness, setCompleteness] = useState(0);

  const calculateCompleteness = (data: { name: string | null, phone_no: string | null }) => {
    let calculatedCompleteness = 50; // Base for having an account
    if (data.name) calculatedCompleteness += 25;
    if (data.phone_no) calculatedCompleteness += 25;
    setCompleteness(calculatedCompleteness);
  };

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };
    getSession();
  }, []);

  useEffect(() => {
    if (session?.user) {
      // Initialize formData with email and name from session metadata
      setFormData((prev) => ({
        ...prev,
        email: session.user.email || "",
        name: (session.user.user_metadata?.name as string) || prev.name,
      }));

      const fetchProfile = async () => {
        setLoading(true);
        const { data, error } = await supabase
          .from("profiles")
          .select("name, phone_no")
          .eq("id", session.user.id)
          .limit(1)
          .single();

        if (error && error.code !== 'PGRST116') { // Ignore 'exact one row not found'
          toast.error("Error Fetching Profile", {
            description: error.message,
            icon: <AlertCircle className="h-5 w-5" />,
          });
        } else if (data) {
          const profileData = { name: data.name || "", phone_no: data.phone_no || "" };
          setFormData((prev) => ({ ...prev, ...profileData })); // Merge with existing formData
          calculateCompleteness(profileData);
        } else {
          // Handle case where there's no registration record yet
          calculateCompleteness({ name: null, phone_no: null });
        }
        setLoading(false);
      };
      fetchProfile();
    }
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) return;

    setLoading(true);
    const { name, phone_no } = formData;

    const { error: authError } = await supabase.auth.updateUser({
      data: { name, phone_no },
    });

    const { error: dbError } = await supabase
      .from("profiles")
      .update({ name, phone_no: phone_no || null })
      .eq("email", session.user.email);

    if (authError || dbError) {
      toast.error("Error Updating Profile", {
        description: authError?.message || dbError?.message,
        icon: <AlertCircle className="h-5 w-5" />,
      });
    } else {
      toast.success("Profile Updated", {
        description: "Your information has been successfully updated.",
        icon: <Save className="h-5 w-5" />,
      });
      calculateCompleteness(formData); // Recalculate on successful update
    }
    setLoading(false);
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match", {
        description: "Please re-enter your password and try again.",
        icon: <XCircle className="h-5 w-5" />,
      });
      return;
    }
    if (!password) {
        toast.error("Password Cannot Be Empty", {
            description: "Please enter a new password.",
            icon: <XCircle className="h-5 w-5" />,
        });
        return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      toast.error("Error Updating Password", {
        description: error.message,
        icon: <AlertCircle className="h-5 w-5" />,
      });
    } else {
      toast.success("Password Updated", {
        description: "Your password has been changed successfully.",
        icon: <ShieldCheck className="h-5 w-5" />,
      });
      setPassword("");
      setConfirmPassword("");
    }
    setLoading(false);
  };

  if (loading && completeness === 0) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center mb-1">
              <Label>Profile Completeness</Label>
              <span className="text-sm font-medium text-muted-foreground">{completeness}%</span>
            </div>
            <Progress value={completeness} className="w-full" />
          </div>
          <Separator className="mb-6" />
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                readOnly
                disabled
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone_no">Phone Number</Label>
              <Input
                id="phone_no"
                type="tel"
                value={formData.phone_no}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            Choose a new password. Make it a strong one.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdatePassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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

