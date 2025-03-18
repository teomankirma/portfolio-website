import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components";
import { LaptopMinimal } from "lucide-react";
import Image from "next/image";

export function WhatIDo() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <Heading text="What I Do" />
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LaptopMinimal /> Web Design & Develop
          </CardTitle>
        </CardHeader>
        <CardContent>
          I can design and develop the websites that you want.
          <Image
            src="/assets/web-design-and-develop.png"
            width={500}
            height={500}
            alt="Web Design & Develop"
            className="my-4"
          />
        </CardContent>
      </Card>
    </div>
  );
}
