"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { discountPercentage } from "@/lib/discountPercentage";
import { parseEuroPrice } from "@/lib/parseEuroPrice";
import AddToCartBtn from "./AddToCartBtn";
import CartWrapper from "../layout/CartWrapper";

const ProductCard = ({ product, category }) => {
  const { title, originalPrice, discountedPrice, featuredImages, productId } =
    product;
    console.log(product)
  // Calculate discount percentage
  const discount = discountPercentage(
    parseEuroPrice(originalPrice),
    parseEuroPrice(discountedPrice)
  );

  // check product
  const isBag = title.toLowerCase().includes('bag');
  const isShoe = ['shoe', 'sneaker', 'skate', 'jordan', 'j4', 'trainer',
    'cinturino', 'yzy', 'yeezy', 'campus', 'boost'].some(keyword =>
      title.toLowerCase().includes(keyword)
    );
  return (
    <Card className="w-full h-[fit-content] relative shadow-none border-0 group overflow-hidden gap-0">
      {/* Discount badge */}
      <div className="absolute top-2 left-2 bg-[#1f1f1f] text-white text-[11px] font-semibold py-[5px] px-[11px] z-10 text-center leading-[1em]">
        - {discount}%
      </div>

      {/* Product Image */}
      <div className="relative z-0">
        <Link href={`/products/${productId}`}>
          <Image
            src={featuredImages[0]}
            alt={productId}
            width={600}
            height={600}
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
              <Link href={`/products/${productId}`}>{title}</Link>
            </h3>

            {/* Subtitle */}
            <p className="text-[14px] uppercase text-[#767676] leading-[21px] mt-1">
              {category}
            </p>
          </div>

          {/* Prices */}
          <div className="flex items-center gap-[5px] flex-col">
            <p className="text-[16px] font-[500] leading-[24px] line-through text-[#a6a6a6]">
              {originalPrice}
            </p>
            <p className="text-[16px] text-[#ff2c2c] leading-[24px] font-[500]">
              {discountedPrice}
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
            {
              isBag ? (
                <SelectContent>
                  <SelectItem value="unique">Unique</SelectItem>
                </SelectContent>
              ) : isShoe ? (
                <SelectContent>
                  <SelectItem value="36">36</SelectItem>
                  <SelectItem value="36.5">36.5</SelectItem>
                  <SelectItem value="37">37</SelectItem>
                  <SelectItem value="37.5">37.5</SelectItem>
                  <SelectItem value="38">38</SelectItem>
                  <SelectItem value="38.5">38.5</SelectItem>
                  <SelectItem value="39">39</SelectItem>
                  <SelectItem value="39.5">39.5</SelectItem>
                  <SelectItem value="40">40</SelectItem>
                  <SelectItem value="40.5">40.5</SelectItem>
                  <SelectItem value="41">41</SelectItem>
                  <SelectItem value="41.5">41.5</SelectItem>
                  <SelectItem value="42">42</SelectItem>
                  <SelectItem value="42.5">42.5</SelectItem>
                  <SelectItem value="43">43</SelectItem>
                  <SelectItem value="43.5">43.5</SelectItem>
                  <SelectItem value="44">44</SelectItem>
                  <SelectItem value="44.5">44.5</SelectItem>
                  <SelectItem value="45">45</SelectItem>
                  <SelectItem value="45.5">45.5</SelectItem>
                  <SelectItem value="46">46</SelectItem>
                </SelectContent>
              ) : <SelectContent>
                <SelectItem value="l">L</SelectItem>
                <SelectItem value="m">M</SelectItem>
                <SelectItem value="s">S</SelectItem>
                <SelectItem value="xl">XL</SelectItem>
                <SelectItem value="xs">XS</SelectItem>
              </SelectContent>
            }
          </Select>
        </div>

        {/* Add to Cart Button & Eye Icon */}
        <CartWrapper>
          <AddToCartBtn product={product} />
        </CartWrapper>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
