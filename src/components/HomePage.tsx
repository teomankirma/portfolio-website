"use client";

import React from "react";
import { Spacer } from "@/components";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components/ui";
import { Typewriter } from "react-simple-typewriter";

export function HomePage() {
  return (
    <div className="flex min-h-screen justify-center" id="home">
      <div className="flex flex-col items-center w-full">
        <Avatar className="h-60 w-60 mt-20">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/83593653?v=4"
            alt="Teoman Kirma"
          />
          <AvatarFallback>Teoman Kirma</AvatarFallback>
        </Avatar>
        <Spacer y={4} />
        <h1 className="text-3xl font-bold">Welcome</h1>
        <Spacer y={2} />
        <div className="text-center min-w-[200px] text-3xl font-bold">
          <Typewriter
            words={["Hello", "this", "is", "a"]}
            loop={0}
            cursor={true}
            cursorColor="#17c964"
          />
        </div>
        <Spacer y={2} />
        <h1 className="text-2xl font-bold">based in Los Angeles, US.</h1>
        <Spacer y={2} />
        <Button size={"lg"}>Hire me!</Button>
      </div>
    </div>
  );
}
