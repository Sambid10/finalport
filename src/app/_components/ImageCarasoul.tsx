import * as React from "react"

import { Card,CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ImagesData } from "./pages/XClonePage"

export function ImageCarasoul({images}:{
  images:ImagesData[]
}) {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
    <CarouselContent>
      {images.map((image, i) => (
        <CarouselItem key={i}>
          <div className="relative aspect-[4/3] md:aspect-[2/1] w-full">
            <img
              className="absolute inset-0 h-full w-full object-cover md:object-contain brightness-90"
              src={image.src}
              loading="lazy"
              alt={`Slide ${i}`}
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="rounded-none bg-gray-800 border-stone-800 border" />
    <CarouselNext className="rounded-none bg-gray-800 border-stone-800 border" />
  </Carousel>
  
  )
}
