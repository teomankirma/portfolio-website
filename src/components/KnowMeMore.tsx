"use client";

import React from "react";
import { Heading, Spacer } from "@/components";
import { Button, Separator } from "@/components/ui";
import { Download } from "lucide-react";
import { CONSTANTS } from "@/constants/constants";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";
import Link from "next/link";

export function KnowMeMore() {
  const { language } = usePortfolioStore();

  return (
    <div className="min-h-screen" id="know-me-more">
      <Heading text={CONSTANTS[language].knowMeMore} />
      <div className="grid grid-cols-1 gap-8 px-4 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-16">
        <div className="lg:col-span-7">
          <div className="text-2xl font-bold">
            {CONSTANTS[language].knowMeMoreA}
          </div>
          <Spacer y={1} />
          <div className="text-lg">{CONSTANTS[language].knowMeMoreB}</div>
          <Spacer y={1} />
          <div className="text-lg">{CONSTANTS[language].knowMeMoreC}</div>
        </div>
        <div className="mt-8 text-lg lg:col-span-5 lg:mt-0">
          <p>
            <span className="font-bold">{CONSTANTS[language].nameLabel}</span>{" "}
            {CONSTANTS[language].fullName}
          </p>
          <Separator className="my-2" />
          <p>
            <span className="font-bold">{CONSTANTS.common.emailLabel}</span>{" "}
            <Link
              href={`mailto:${CONSTANTS.common.emailAddress}`}
              className="font-bold text-green-500"
            >
              {CONSTANTS.common.emailAddress}
            </Link>
          </p>
          <Separator className="my-2" />
          <p>
            <span className="font-bold">{CONSTANTS[language].ageLabel}</span>{" "}
            {CONSTANTS.common.age}
          </p>
          <Separator className="my-2" />
          <p>
            <span className="font-bold">{CONSTANTS[language].fromLabel}</span>{" "}
            {CONSTANTS.common.location}
          </p>
          <Spacer y={1} />
          <div className="flex justify-center">
            <Button
              variant="ghost"
              className="rounded-3xl bg-green-500 p-6 text-white"
            >
              <span className="inline-flex items-center gap-2 text-lg font-semibold">
                <Download className="h-5 w-5" />
                {CONSTANTS[language].downloadResumeLabel}
              </span>
            </Button>
          </div>
        </div>
      </div>
      <Spacer y={8} />
      <div className="flex items-center justify-center gap-20">
        <div className="text-center">
          <p className="text-4xl font-bold">
            {CONSTANTS[language].experienceA}
          </p>
          <Spacer y={0.75} />
          <p className="text-md">{CONSTANTS[language].experienceB}</p>
        </div>

        <div className="h-16 border-l-1 border-gray-400"></div>
        <div className="text-center">
          <p className="text-4xl font-bold">{CONSTANTS[language].projectsA}</p>
          <Spacer y={0.75} />
          <p className="text-md">{CONSTANTS[language].projectsB}</p>
        </div>
      </div>
    </div>
  );
}
