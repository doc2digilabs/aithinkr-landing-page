import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export const CreateAccountForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
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
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: data.user.id, email: data.user.email, wizard_completed: false }]);

      if (profileError) {
        toast.error("Failed to create profile", {
          description: profileError.message,
          icon: <AlertCircle className="h-5 w-5" />,
        });
      } else {
        toast.success("Account Created!", {
          description: "Please check your email to verify your account before logging in.",
          icon: <Mail className="h-5 w-5" />,
        });
        setEmail("");
        setPassword("");
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center pt-0 pb-12 px-4">
      <Card className="w-full max-w-2xl border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Create Your AiThinkr Account
          </CardTitle>
          <CardDescription className="text-lg">
            Just an email and password to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
