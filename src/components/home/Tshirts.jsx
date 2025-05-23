import { fetchCategoryProducts } from "@/lib/fetchCategoryProducts";
import ProductCarousel from "../product/ProductCarousel";
import Link from "next/link";

const Tshirts = async() => {
    const products = await fetchCategoryProducts("t-shirt", true);
    return (
        <section className="bg-white pt-[50px] pb-[95px]">
            <h2 className="text-[29px] font-[500] text-[#111111] uppercase text-center">T-shirts</h2>
            <div className="mt-10 mb-5">
                <ProductCarousel category="T Shirts" products={products} />
            </div>
            <div className="text-center mt-[70px]">
                <Link className="px-[20px] py-[10px] leading-4 text-base font-[500] text-white bg-[#111111] uppercase" href="/products/category/t-shirts">Load More</Link>
            </div>
        </section>
    );
};

export default Tshirts;