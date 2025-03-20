"use client";

import React from "react";
import { Heading } from "./Heading";
import Image from "next/image";
import { Mail } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/formSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function GetInTouch() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen" id="get-in-touch">
      <Heading text="Get In Touch" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-10">
          <h2 className="text-2xl font-bold tracking-tight">CONTACT</h2>
          <div>
            <Image
              width={300}
              height={150}
              src="/assets/hi.gif"
              alt="Hello, you."
              className="rounded-lg w-auto h-auto"
              unoptimized
            />
          </div>
          <Link
            href="mailto:teomankirma@gmail.com"
            className="flex items-center gap-2 text-green-500"
          >
            <Mail className="h-5 w-5" /> teomankirma@gmail.com
          </Link>
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight">FOLLOW ME</h3>
            <div className="flex items-center gap-4">
              <Link href="https://x.com/teomankirma" target="_blank">
                <i className="fa-brands fa-x-twitter fa-lg" />
              </Link>
              <Link href="https://github.com/teomankirma" target="_blank">
                <i className="fa-brands fa-github fa-lg" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/teomankirma/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin fa-lg text-[#0a66c2]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">SEND ME A NOTE</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-500">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Joe Goldberg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-500">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="joegoldberg@you.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-500">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me more about your needs..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
