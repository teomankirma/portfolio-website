"use client";

import React from "react";
import { Spacer } from "@/components";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components/ui";
import { Typewriter } from "react-simple-typewriter";
import { CONSTANTS } from "@/constants/constants";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";

export function HomePage() {
  const { language } = usePortfolioStore();

  return (
    <div className="flex min-h-screen justify-center" id="home">
      <div className="flex flex-col items-center w-full">
        <Avatar className="h-60 w-60 mt-20">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/83593653?v=4"
            alt={CONSTANTS[language].fullName}
          />
          <AvatarFallback>{CONSTANTS[language].fullName}</AvatarFallback>
        </Avatar>
        <Spacer y={4} />
        <h1 className="text-4xl font-bold">{CONSTANTS[language].welcome}</h1>
        <Spacer y={2} />
        <div className="text-center min-w-[200px] text-3xl font-bold">
          <Typewriter
            words={CONSTANTS[language].typewriter}
            loop={0}
            cursor={true}
            cursorColor="#17c964"
          />
        </div>
        <Spacer y={2} />
        <h1 className="text-2xl font-bold">{CONSTANTS[language].location}</h1>
        <Spacer y={3} />
        <Button size={"lg"} className="bg-green-500 p-6 rounded-3xl">
          <span className="text-lg font-bold">
            {CONSTANTS[language].hireMe}
          </span>
        </Button>
      </div>
    </div>
  );
}
