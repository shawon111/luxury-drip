'use client';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProductCard from "./ProductCard";
import { useRef } from "react";

const ProductCarousel = ({ products, category }) => {
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );
    return (
        <div>
            <Carousel plugins={[plugin.current]}>
                <CarouselContent className="-ml-3">
                    {
                        products && products.map((product, index) => (
                            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/4 pl-3">
                                <ProductCard category={category} product={product} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default ProductCarousel;