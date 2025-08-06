"use client";

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { Brain, Menu, LogOut, User, LayoutDashboard, Shield } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

export function NavigationBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { session, user } = useAuth();
  const [isAdmin, setIsAdmin] = React.useState(false);
  const navigate = useNavigate();

  const checkUserRole = async (user: User | null) => {
    if (!user) {
      setIsAdmin(false);
      return;
    }
    const { data } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    setIsAdmin(data?.role === 'admin');
  };

  React.useEffect(() => {
    checkUserRole(user);
  }, [user]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Logout failed: " + error.message);
    } else {
      setIsAdmin(false);
      navigate('/auth');
      toast.success("You have been signed out.");
    }
  };

  const getInitials = (email: string | undefined) => {
    if (!email) return "U";
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block text-2xl">AiThinkr</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>              
              <NavigationMenuItem>
                <Link to="/products" className={navigationMenuTriggerStyle()}>
                  Products
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/research" className={navigationMenuTriggerStyle()}>
                  Research
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/blog" className={navigationMenuTriggerStyle()}>
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/careers" className={navigationMenuTriggerStyle()}>
                  Careers
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/courses" className={navigationMenuTriggerStyle()}>
                  Courses
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/training" className={navigationMenuTriggerStyle()}>
                  Training
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open Menu</span>
            </Button>
          </SheetTrigger>
          <Link to="/" className="flex items-center space-x-2 md:hidden">
            <Brain className="h-6 w-6 text-primary" />
            <span className="font-bold text-2xl">AiThinkr</span>
          </Link>
          <SheetContent side="left" className="pr-0">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <Brain className="h-6 w-6 text-primary" />
                <span>AiThinkr</span>
              </Link>
              <Link to="/training" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Training</Link>
              <Link to="/products" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Products</Link>
              <Link to="/research" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Research</Link>
              <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Blog</Link>
              <Link to="/careers" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Careers</Link>
              <Link to="/courses" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Courses</Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={session.user?.user_metadata?.avatar_url} alt="User Avatar" />
                    <AvatarFallback>{getInitials(session.user.email)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">My Account</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {isAdmin && (
                  <DropdownMenuItem onClick={() => navigate('/admin')}>
                    <Shield className="mr-2 h-4 w-4" />
                    <span>Admin Dashboard</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
