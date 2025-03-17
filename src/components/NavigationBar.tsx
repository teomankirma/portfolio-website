"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function NavigationBar() {
  const { theme, setTheme } = useTheme();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>Teoman Kirma</NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            variant="ghost"
            className="flex items-center"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="ghost" className="flex items-center">
            🇹🇷
          </Button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="ghost" className="flex items-center">
            🇺🇸
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
