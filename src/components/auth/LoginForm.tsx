
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
import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Login Failed", {
        description: error.message,
        icon: <AlertCircle className="h-5 w-5" />,
      });
    } else {
      toast.success("Logged In Successfully!");
      navigate("/dashboard");
    }

    setLoading(false);
  };

  const handleSocialLogin = async (provider: "google" | "github") => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) {
      toast.error("Login Failed", {
        description: error.message,
        icon: <AlertCircle className="h-5 w-5" />,
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to continue to AiThinkr
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin("google")}
              disabled={loading}
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 381.4 512 244 512 109.8 512 0 402.2 0 256S109.8 0 244 0c73.2 0 136 28.7 182.4 75.2l-62.4 60.8C337.2 114.6 295.6 96 244 96c-88.6 0-160 71.8-160 160s71.4 160 160 160c92.2 0 140.6-66.4 146-105.6H244v-74.4h238.8c1.2 12.8 2.2 26.2 2.2 39.8z"
                ></path>
              </svg>
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin("github")}
              disabled={loading}
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-6-2.3zm47.2 4.5c-1.3 1.3-3.3 2-5.2 2h-6.5c-2.9 0-5.2 1.3-6.5 3.6-1.3 2.3-1.3 5.2 0 7.8 1.3 2.6 3.6 3.9 6.5 3.9h6.5c2.9 0 5.2-1.3 6.5-3.6 1.3-2.3 1.3-5.2 0-7.8s-3.6-3.9-6.5-3.9zM256 0C114.6 0 0 114.6 0 256c0 113.3 73.3 209.3 175.1 242.9 12.8 2.3 17.5-5.6 17.5-12.3 0-6.2-.3-22.5-.3-44.2-71.1 15.4-86.2-34.3-86.2-34.3-11.6-29.6-28.4-37.5-28.4-37.5-23.2-15.8 1.7-15.5 1.7-15.5 25.7 1.8 39.3 26.4 39.3 26.4 22.8 39.1 59.7 27.8 74.2 21.2 2.3-16.5 8.9-27.8 16.2-34.2-56.6-6.5-116.2-28.1-116.2-126.1 0-27.8 10-50.5 26.4-68.2-2.6-6.5-11.4-32.3 2.6-67.1 0 0 21.4-6.8 70.1 26.2 20.3-5.6 42-8.5 63.6-8.5s43.3 2.8 63.6 8.5c48.7-33.1 70.1-26.2 70.1-26.2 14 34.8 5.2 60.6 2.6 67.1 16.4 17.7 26.4 40.4 26.4 68.2 0 98.2-59.6 119.6-116.2 126.1 9.2 7.9 17.5 23.5 17.5 47.4 0 34.2-.3 61.8-.3 70.1 0 6.8 4.7 14.9 17.8 12.3C418.7 465.3 492 369.3 492 256 492 114.6 377.4 0 256 0z"
                ></path>
              </svg>
              Continue with Github
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.TBC)
                required
                disabled={loading}
              />
            </div>
            <CardFooter className="px-0 pt-4">
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
