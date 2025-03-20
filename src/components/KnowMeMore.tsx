import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Heading, Spacer } from "@/components";
import { Download } from "lucide-react";

export function KnowMeMore() {
  return (
    <div className="min-h-screen" id="know-me-more">
      <Heading text="Know Me More" />
      <div className="grid grid-cols-12 gap-20 px-16">
        <div className="col-span-7">
          <div className="text-2xl font-bold">
            I&apos;m <span className="text-green-500">Teoman Kirma</span>, a
            Frontend Developer.
          </div>
          <Spacer y={1} />
          <div>
            Hello, my name is Teoman. I&apos;m 22 years old and I&apos;m
            studying Software Engineering at Nisantasi University. I live in
            Istanbul. I love playing basketball, playing the guitar, and playing
            video games. I aim to be a Frontend Developer or a Full-Stack
            Developer.
          </div>
          <Spacer y={1} />
          <div>
            I have experience with front-end languages and frameworks such as
            HTML, CSS, and JavaScript. Additionally, I have experience in Java,
            C#, and Dart, which I acquired through my education at school.
          </div>
        </div>
        <div className="col-span-5">
          <p>Name: Teoman Kirma</p>
          <Separator className="my-2" />
          <p>Email: teomankirma@gmail.com</p>
          <Separator className="my-2" />
          <p>Age: 22</p>
          <Separator className="my-2" />
          <p>From: Istanbul, Turkiye</p>
          <Spacer y={1} />
          <Button variant="ghost" className="bg-green-500">
            <Download /> Download resume
          </Button>
        </div>
      </div>
      <Spacer y={8} />
      <div className="flex justify-center gap-20 items-center">
        <div className="text-center">
          <p className="text-4xl font-bold">3+</p>
          <Spacer y={0.75} />
          <p className="text-sm">Years Experience</p>
        </div>

        <div className="border-l-1 border-gray-400 h-16"></div>
        <div className="text-center">
          <p className="text-4xl font-bold">30+</p>
          <Spacer y={0.75} />
          <p className="text-sm">Projects Done</p>
        </div>
      </div>
    </div>
  );
}
