"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";
import { LanguageEnum } from "@/types";

export function ChangeLanguage() {
  const { language, updateState } = usePortfolioStore();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="pt-0.25 text-xl">
            {language === LanguageEnum.TURKISH ? "🇹🇷" : "🇺🇸"}
            <span className="sr-only">Change language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() =>
              updateState({
                language: LanguageEnum.ENGLISH,
              })
            }
            className="cursor-pointer"
          >
            🇺🇸
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              updateState({
                language: LanguageEnum.TURKISH,
              })
            }
            className="cursor-pointer"
          >
            🇹🇷
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
