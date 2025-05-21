import { fetchCategoryProducts } from "@/lib/fetchCategoryProducts";
import ProductCarousel from "../product/ProductCarousel";
import Link from "next/link";

const Bags = async() => {
    const products = await fetchCategoryProducts("bag", 1, true);
    return (
        <section className="bg-white pt-[50px] pb-[95px]">
            <h2 className="text-[29px] font-[500] text-[#111111] uppercase text-center">Bags</h2>
            <div className="mt-10 mb-5">
                <ProductCarousel category="Bags" products={products} />
            </div>
            <div className="text-center mt-[70px]">
                <Link className="px-[20px] py-[10px] leading-4 text-base font-[500] text-white bg-[#111111] uppercase" href="/products/category/bags">Load More</Link>
            </div>
        </section>
    );
};

export default Bags;