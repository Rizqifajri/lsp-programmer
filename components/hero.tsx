"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import img1 from '../assets/promo/1.png';
import img2 from '../assets/promo/2.png';
import img3 from '../assets/promo/3.png';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import logo from "../assets/dbb1.png";

const dataImg = [img2, img1, img3];

export function Hero() {
  const plugin = React.useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  return (
    <>
      <Image src={logo} alt="logo" className="w-32 mx-auto"/>
      <Carousel
        plugins={[plugin.current]}
        className="mx-auto w-full max-w-xl p-0 m-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {dataImg.map((img, index) => (
            <CarouselItem key={index}>
              <Card className="w-full h-full border-none p-0">
                <CardContent className="flex items-center justify-center">
                  <Image
                    className="object-cover w-full h-full rounded-md"
                    src={img}
                    alt={`carousel hero ${index + 1}`}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-9 lg:left-10 bg-yellow-300 " />
        <CarouselNext className="absolute right-9 lg:right-10 bg-yellow-300" />
      </Carousel>
    </>
  );
}
