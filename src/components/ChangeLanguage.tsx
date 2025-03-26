"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui";
import { usePortfolioStore } from "@/hooks/usePortfolioStore";
import { LanguageEnum } from "@/types";

export function ChangeLanguage() {
  const { language, updateState } = usePortfolioStore();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // Only detect browser language if language hasn't been set yet
    if (!language) {
      const browserLang = navigator.language || navigator.languages?.[0] || "";

      if (browserLang.startsWith("tr")) {
        updateState({ language: LanguageEnum.TURKISH });
      } else {
        updateState({ language: LanguageEnum.ENGLISH });
      }
    }
  }, [updateState, language]);

  // During SSR and first render, use a default to prevent hydration mismatch
  if (!hasMounted) {
    return (
      <Button variant="ghost" size="icon" className="pt-0.25 text-xl">
        <span>🌐</span>
        <span className="sr-only">Change language</span>
      </Button>
    );
  }

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
            className="flex cursor-pointer items-center gap-1"
          >
            🇺🇸<span className="pb-0.75">English</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              updateState({
                language: LanguageEnum.TURKISH,
              })
            }
            className="flex cursor-pointer items-center gap-1"
          >
            🇹🇷 <span className="pb-0.75">Türkçe</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
