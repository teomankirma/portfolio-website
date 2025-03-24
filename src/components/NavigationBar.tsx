"use client";

import React, { useState } from "react";
import { ChangeTheme, ChangeLanguage } from "@/components";
import {
  Button,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { scrollToSection } from "@/utils";
import { CONSTANTS } from "@/constants/constants";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";

export function NavigationBar() {
  const { language } = usePortfolioStore();
  const [open, setOpen] = useState(false);

  // Function to close the sheet
  const closeSheet = () => {
    setOpen(false);
  };

  const sections = [
    { href: "#home", label: CONSTANTS[language].home },
    { href: "#know-me-more", label: CONSTANTS[language].knowMeMore },
    { href: "#what-i-do", label: CONSTANTS[language].whatIDo },
    { href: "#resume", label: CONSTANTS[language].resume },
    { href: "#client-speak", label: CONSTANTS[language].clientSpeak },
    { href: "#get-in-touch", label: CONSTANTS[language].getInTouch },
  ];

  return (
    <header className="bg-background sticky top-0 z-50 flex h-20 w-full shrink-0 items-center border-b px-4 md:px-6">
      <div className="text-md font-semibold">Teoman Kirma</div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pl-6">
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>
          <div className="grid gap-6 py-14">
            {sections.map(item => (
              <Link
                key={item.label}
                className="w-full justify-start text-lg font-bold"
                href={item.href}
                onClick={e => {
                  scrollToSection(e, item.href);
                  closeSheet();
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="absolute bottom-6 left-2">
            <ChangeTheme />
          </div>
          <div className="absolute right-2 bottom-6">
            <ChangeLanguage />
          </div>
        </SheetContent>
      </Sheet>
      <div className="ml-auto hidden gap-4 lg:flex">
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
