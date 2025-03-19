import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChangeTheme } from "./ChangeTheme";
import { ChangeLanguage } from "./ChangeLanguage";

export function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-background border-b">
      <div className="text-md font-semibold">Teoman Kirma</div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pl-4">
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>
          <div className="grid gap-2 py-10">
            <Button variant="ghost" className="w-full justify-start" size="lg">
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="lg">
              About Me
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="lg">
              What I Do
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="lg">
              Resume
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="lg">
              Portfolio
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="lg">
              Contact Me
            </Button>
          </div>
          <div className="absolute bottom-6 right-2"></div>
        </SheetContent>
      </Sheet>
      <div className="ml-auto hidden lg:flex gap-4">
        <ChangeTheme />
        <ChangeLanguage />
      </div>
    </header>
  );
}

function MenuIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
