import React from "react";
import { Heading, Spacer } from "@/components";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Progress,
} from "@/components/ui";
import Link from "next/link";
import { Download } from "lucide-react";

export function Resume() {
  return (
    <div className="min-h-screen" id="resume">
      <Heading text="Resume" />
      <div className="flex flex-col max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">My Education</h1>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit bg-green-500">2020-2025</Badge>
                    <Spacer y={0.5} />
                    <span>Istanbul Nisantasi University</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  Software Engineering - GPA: 3.36 / 4.0
                </CardDescription>
              </CardHeader>
              <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                error eligendi totam atque? Odit id quod molestiae
                reprehenderit. Facere nostrum neque at quibusdam quae dolorem
                architecto eligendi nam obcaecati officiis!
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">My Experience</h1>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-col gap-2">
                    <Badge className="w-fit bg-green-500">
                      May 2023 - Current
                    </Badge>
                    <Spacer y={0.5} />
                    <span>BytesandPixels</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <Link
                    href="https://bytesandpixels.co/"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    bytesandpixels.co
                  </Link>
                </CardDescription>
              </CardHeader>
              <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                error eligendi totam atque? Odit id quod molestiae
                reprehenderit. Facere nostrum neque at quibusdam quae dolorem
                architecto eligendi nam obcaecati officiis!
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="space-y-4 col-span-1 md:col-span-2">
          <h1 className="text-2xl font-semibold">My Skills</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p>Web Design</p>
            <Progress value={95} />
            <p>TypeScript</p>
            <Progress value={90} />
            <p>React</p>
            <Progress value={90} />
          </div>
          <div className="space-y-4">
            <p>Next.js</p>
            <Progress value={80} />
            <p>Zustand</p>
            <Progress value={95} />
            <p>TanStack Query</p>
            <Progress value={70} />
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="ghost" className="bg-green-500 w-auto">
            <Download className="mr-2" /> Download resume
          </Button>
        </div>
      </div>
    </div>
  );
}
