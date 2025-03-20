import React from "react";
import { Heading } from "@/components/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// Mock testimonial data array
const testimonials = [
  {
    id: 1,
    name: "Teoman Kirma",
    location: "from turkiye",
    avatarUrl: "https://avatars.githubusercontent.com/u/83593653?v=4",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti sit nam autem amet. Ex quos eligendi voluptatum, delectus aperiam illum possimus hic laborum ratione, explicabo reprehenderit? Cupiditate, fuga id?",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "from USA",
    avatarUrl: "/avatars/sarah.jpg",
    testimonial:
      "Working with this team was an absolute pleasure. They delivered beyond my expectations and were responsive throughout the project.",
    rating: 4,
  },
  {
    id: 3,
    name: "Raj Patel",
    location: "from India",
    avatarUrl: "/avatars/raj.jpg",
    testimonial:
      "The attention to detail is incredible. My project was completed on time and exceeded all my requirements. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Maria Garcia",
    location: "from Spain",
    avatarUrl: "/avatars/maria.jpg",
    testimonial:
      "Great communication and expertise. They were able to understand my vision perfectly and execute it flawlessly.",
    rating: 4,
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    location: "from Japan",
    avatarUrl: "/avatars/yuki.jpg",
    testimonial:
      "Professional service with excellent results. The team was a joy to work with and delivered outstanding quality.",
    rating: 5,
  },
];

export function ClientSpeak() {
  return (
    <div className="min-h-screen" id="client-speak">
      <Heading text="Client Speak" />
      <div className="flex justify-center items-center">
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-1">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>
                          <p>{testimonial.name}</p>
                        </CardTitle>
                        <CardDescription>
                          <p>{testimonial.location}</p>
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {testimonial.testimonial}
                    </CardContent>
                    <CardFooter className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={
                            index < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
