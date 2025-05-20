"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Card className="w-full h-[fit-content] relative shadow-none border-0 group overflow-hidden gap-0">
      {/* Discount badge */}
      <div className="absolute top-2 left-2 bg-[#1f1f1f] text-white text-[11px] font-semibold py-[5px] px-[11px] z-10 text-center leading-[1em]">
        - 50%
      </div>

      {/* Product Image */}
      <div className="relative z-0">
        <Link href="/products/234">
          <Image
            src="/products/example-product-image.jpg"
            alt="Product Image"
            width={512}
            height={493}
            className="w-full h-auto object-cover"
          />
        </Link>
      </div>

      {/* Card Content that slides up on hover */}
      <CardContent className="bg-white z-10 transition-transform duration-300 translate-y-[150px] group-hover:translate-y-0 py-[20px]  mt-[-150px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[5px]">
            {/* Title */}
            <h3 className="text-[16px] font-[500] uppercase tracking-wide text-[#111111]">
              <Link href="/products/234">T-SHIRT CRTZ</Link>
            </h3>

            {/* Subtitle */}
            <p className="text-[14px] uppercase text-[#767676] leading-[21px] mt-1">
              <Link href="/products/234">Best Seller</Link>
            </p>
          </div>

          {/* Prices */}
          <div className="flex items-center gap-[5px] flex-col">
            <p className="text-[16px] font-[500] leading-[24px] line-through text-[#a6a6a6]">
              89,99 €
            </p>
            <p className="text-[16px] text-[#ff2c2c] leading-[24px] font-[500]">
              44,99 €
            </p>
          </div>
        </div>

        {/* Variant Selector */}
        <div className="mt-[20px]">
          <Select>
            <SelectTrigger className="w-full px-[15px] py-[8px] rounded-none shadow-none border border-[#cccccc] hover:border-[#111111]">
              <SelectValue
                className="text-[16px] font-[400] leading-[24px] text-[#111111]"
                placeholder="Choose an option"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="s">Small</SelectItem>
              <SelectItem value="m">Medium</SelectItem>
              <SelectItem value="l">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add to Cart Button & Eye Icon */}
        <div className="flex items-center justify-between mt-[20px]">
          <Button className="uppercase bg-transparent border-0 text-[#111111] shadow-none hover:bg-transparent hover:text-[#111111] hover:shadow-none hover:border-0 p-0 text-[16px] font-[500] leading-[1em]">
            
            <Link href="/products/234">Add to Cart</Link>
          </Button>
          <Eye className="w-4 h-4" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
