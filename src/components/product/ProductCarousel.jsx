'use client';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProductCard from "./ProductCard";
import { useRef } from "react";

const ProductCarousel = () => {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );
    return (
        <div>
            <Carousel plugins={[plugin.current]}>
                <CarouselContent className="-ml-3">
                    <CarouselItem className="basis-1/4 pl-3">
                        <ProductCard />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 pl-3">
                        <ProductCard />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 pl-3">
                        <ProductCard />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 pl-3">
                        <ProductCard />
                    </CarouselItem>
                    <CarouselItem className="basis-1/4 pl-3">
                        <ProductCard />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default ProductCarousel;