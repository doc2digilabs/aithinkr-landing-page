import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateAccountForm } from "./CreateAccountForm";
import { SignInForm } from "./SignInForm";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

export const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGithubSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isSignIn ? "Sign in to your account" : "Create an account"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2 mb-4">
            <Button onClick={handleGoogleSignIn} variant="outline">
              Sign in with Google
            </Button>
            <Button onClick={handleGithubSignIn} variant="outline">
              Sign in with GitHub
            </Button>
          </div>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          {isSignIn ? <SignInForm /> : <CreateAccountForm />}
          <div className="mt-4 text-center text-sm">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
            <Button
              variant="link"
              onClick={() => setIsSignIn(!isSignIn)}
              className="p-0 h-auto"
            >
              {isSignIn ? "Sign up" : "Sign in"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
