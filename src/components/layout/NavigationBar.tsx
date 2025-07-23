"use client";

import * as React from "react";
import { Link } from "react-router-dom";
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
import { Brain, Menu, ArrowRight, Bot, Code, Users, GraduationCap } from "lucide-react";

const companyStructure: { title: string; href: string; description: string, icon: React.ElementType }[] = [
  {
    title: "Research",
    href: "/research",
    description: "Pioneering the future of AI with cutting-edge research and development.",
    icon: Bot
  },
  {
    title: "Product Development",
    href: "/products",
    description: "Building innovative and user-friendly AI-powered applications.",
    icon: Code
  },
  {
    title: "Training",
    href: "/training",
    description: "Empowering individuals and teams with comprehensive AI training programs.",
    icon: GraduationCap
  },
  {
    title: "Customer Relations",
    href: "/support",
    description: "Providing dedicated support and fostering successful partnerships.",
    icon: Users
  },
];

export function NavigationBar() {
  const [isOpen, setIsOpen] = React.useState(false);

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
                <Link to="/#about" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/research" className={navigationMenuTriggerStyle()}>
                  Research
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/product" className={navigationMenuTriggerStyle()}>
                  Products
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Training
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {companyStructure.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/careers" className={navigationMenuTriggerStyle()}>
                  Careers
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile Menu */}
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
              <Link to="/#about" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">About</Link>
              <div className="space-y-2">
                <h4 className="font-semibold">Departments</h4>
                {companyStructure.map((component) => (
                  <Link
                    key={component.title}
                    to={component.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <component.icon className="h-4 w-4" />
                    {component.title}
                  </Link>
                ))}
              </div>
              <Link to="/#showcase" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Projects</Link>
              <Link to="/products" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Products</Link>
              <Link to="/careers" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors">Careers</Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button size="sm" className="ml-4">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={props.href || "/"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-x-2">
            <Icon className="h-5 w-5 text-primary" />
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
