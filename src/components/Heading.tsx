import React from "react";
import { Separator } from "@/components/ui/separator";
import { Spacer } from "@/components";

export function Heading({ text }: { text: string }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center pt-10">{text}</h1>
      <Separator className="my-4 mx-auto max-w-20 border-b-3 border-green-500" />
      <Spacer y={4} />
    </>
  );
}
