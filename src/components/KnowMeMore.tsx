"use client";

import React from "react";
import { Heading, Spacer } from "@/components";
import { Button, Separator } from "@/components/ui";
import { Download } from "lucide-react";
import { CONSTANTS } from "@/constants/constants";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";
import { calculateAge } from "@/utils";

export function KnowMeMore() {
  const { language } = usePortfolioStore();
  const age = calculateAge();

  return (
    <div className="min-h-screen" id="know-me-more">
      <Heading text={CONSTANTS[language].knowMeMore} />
      <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-16">
        <div className="lg:col-span-7">
          <div className="text-2xl font-bold">
            {CONSTANTS[language].knowMeMoreA}
          </div>
          <Spacer y={1} />
          <div>{CONSTANTS[language].knowMeMoreB}</div>
          <Spacer y={1} />
          <div>{CONSTANTS[language].knowMeMoreC}</div>
        </div>
        <div className="mt-8 lg:col-span-5 lg:mt-0">
          <p>
            {CONSTANTS[language].nameLabel} {CONSTANTS[language].fullName}
          </p>
          <Separator className="my-2" />
          <p>Email: teomankirma@gmail.com</p>
          <Separator className="my-2" />
          <p>
            {CONSTANTS[language].ageLabel} {age}
          </p>
          <Separator className="my-2" />
          <p>{CONSTANTS[language].fromLabel} Los Angeles, CA</p>
          <Spacer y={1} />
          <Button variant="ghost" className="bg-green-500">
            <Download /> {CONSTANTS[language].downloadResumeLabel}
          </Button>
        </div>
      </div>
      <Spacer y={8} />
      <div className="flex items-center justify-center gap-20">
        <div className="text-center">
          <p className="text-4xl font-bold">3+</p>
          <Spacer y={0.75} />
          <p className="text-sm">Years Experience</p>
        </div>

        <div className="h-16 border-l-1 border-gray-400"></div>
        <div className="text-center">
          <p className="text-4xl font-bold">30+</p>
          <Spacer y={0.75} />
          <p className="text-sm">Projects Done</p>
        </div>
      </div>
    </div>
  );
}
