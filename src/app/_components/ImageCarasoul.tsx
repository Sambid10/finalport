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
    <Carousel className="w-[85%] rounded-none bg-none">
      <CarouselContent className="rounded-none">
        {images.map((image, i) => (
          <CarouselItem key={i}>
            <div className="flex justify-center items-center">
              <div className="relative w-full max-h-[25rem]">
                <img
                  className="object-contain brightness-90 w-full h-auto"
                  src={`${image.src}`}
                  loading="lazy"
                  alt={`Slide ${i}`}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="rounded-none bg-gray-800 border-stone-800 border" />
      <CarouselNext className="rounded-none bg-gray-800 border-stone-800 border" />
    </Carousel>

  )
}
