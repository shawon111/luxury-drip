"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import { useTranslation } from "@/contexts/TranslationContext";

const PRODUCTS_PER_PAGE = 16;

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(1); // page count
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const displayedProducts = products.slice(0, visibleCount * PRODUCTS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 1);
  };

  // translation
      const translation = useTranslation();

  return (
    <div>
      <div className="pt-[60px] pb-[80px]">
        <div className="px-[10px] lg:px-[50px] xl:px-[100] max-w-[1900px] mx-auto">
          <div>
            <h1 className="text-center text-[32px] font-[500]">{translation.section_title.shop}</h1>
            <div className="text-center">
              <p>
                <Link className="text-[14px] text-[#909090]" href="/">Home</Link> &gt;{" "}
                <span className="text-[14px] text-[#909090]">Shop</span>
              </p>
            </div>
          </div>

          <div className="mt-[55px]">
            {loading ? (
              <p className="text-center">Loading products...</p>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                  {displayedProducts.map((product) => (
                    <ProductCard
                      category=" "
                      key={product.productId}
                      product={product}
                    />
                  ))}
                </div>

                {displayedProducts.length < products.length && (
                  <div className="text-center mt-8">
                    <p className="mb-2 text-[#767676] text-[15px]">Showing {displayedProducts.length} of {products.length} products</p>
                    <button
                      onClick={handleLoadMore}
                      className="px-6 py-3 bg-white text-black cursor-pointer rounded-none border border-[#111111]"
                    >
                      {translation.btn_load_more}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
