"use client";

import React from "react";
import { Spacer } from "@/components";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components/ui";
import { Typewriter } from "react-simple-typewriter";
import { CONSTANTS } from "@/constants/constants";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";
import { scrollToSection } from "@/utils";

export function HomePage() {
  const { language } = usePortfolioStore();

  return (
    <div className="flex min-h-screen justify-center" id="home">
      <div className="flex w-full flex-col items-center">
        <Avatar className="mt-20 h-60 w-60">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/83593653?v=4"
            alt={CONSTANTS[language].fullName}
          />
          <AvatarFallback>{CONSTANTS[language].fullName}</AvatarFallback>
        </Avatar>
        <Spacer y={4} />
        <h1 className="text-4xl font-bold">{CONSTANTS[language].welcome}</h1>
        <Spacer y={2} />
        <div className="min-w-[200px] text-center text-3xl font-bold">
          <Typewriter
            words={CONSTANTS[language].typewriter}
            loop={0}
            cursor={true}
            cursorColor="#17c964"
          />
        </div>
        <Spacer y={2} />
        <h1 className="text-2xl font-bold">{CONSTANTS[language].basedIn}</h1>
        <Spacer y={3} />
        <Button
          size={"lg"}
          variant="outline"
          className="rounded-3xl bg-green-500 p-6 text-white hover:border-green-500 hover:bg-transparent dark:bg-green-500 dark:hover:border-green-500 dark:hover:bg-transparent"
          onClick={e => {
            // @ts-expect-error ignore event type mismatch
            scrollToSection(e, "#get-in-touch");
          }}
        >
          <span className="text-lg font-semibold">
            {CONSTANTS[language].hireMe}
          </span>
        </Button>
      </div>
    </div>
  );
}
