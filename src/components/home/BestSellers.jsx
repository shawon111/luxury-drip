import Link from "next/link";
import ProductCarousel from "../product/ProductCarousel";

const BestSellers = () => {
    const products = [
        {
            "productId": "skate-red-999",
            "title": "Skate Red",
            "originalPrice": "349,99 €",
            "discountedPrice": "164,99 €",
            "isOnSale": true,
            "url": "https://luxury-drip.com/product/skate-red/",
            "description": "",
            "featuredImages": [
                "https://luxury-drip.com/wp-content/uploads/2025/04/6-2-3.png",
            ],
            "category": "All Products",
            "scrapedAt": "2025-05-21T08:59:27.642Z"
        },
        {
            "productId": "skate-sneaker-9199",
            "title": "Skate Sneaker",
            "originalPrice": "349,99 €",
            "discountedPrice": "164,99 €",
            "isOnSale": true,
            "url": "https://luxury-drip.com/product/skate-sneaker-3/",
            "description": "",
            "featuredImages": [
                "https://luxury-drip.com/wp-content/uploads/2024/11/IMG_1641.webp",
            ],
            "category": "All Products",
            "scrapedAt": "2025-05-21T08:59:27.642Z"
        },
        {
            "productId": "t-shirt-denim-tears-9",
            "title": "T-SHIRT DENIM TEARS",
            "originalPrice": "89,99 €",
            "discountedPrice": "49,99 €",
            "isOnSale": true,
            "url": "https://luxury-drip.com/product/t-shirt-denim-tears/",
            "description": "",
            "featuredImages": [
                "https://luxury-drip.com/wp-content/uploads/2025/04/2f20c0a8-077b-4f7d-aa50-f819780eb58b_1024x.jpg",
            ],
            "category": "All Products",
            "scrapedAt": "2025-05-21T08:59:27.642Z"
        },
        {
            "productId": "t-shirt-crtz-999",
            "title": "T-SHIRT CRTZ",
            "originalPrice": "89,99 €",
            "discountedPrice": "44,99 €",
            "isOnSale": true,
            "url": "https://luxury-drip.com/product/t-shirt-crtz-10/",
            "description": "",
            "featuredImages": [
                "https://luxury-drip.com/wp-content/uploads/2023/05/Sem-Titulo-12_b1886f7b-0e89-4903-8b92-1029bee7e2da_1024x.jpg",
            ],
            "category": "All Products",
            "scrapedAt": "2025-05-21T08:59:27.642Z"
        },
        {
            "productId": "t-shirt-999",
            "title": "T-SHIRT",
            "originalPrice": "119,99 €",
            "discountedPrice": "59,99 €",
            "isOnSale": true,
            "url": "https://luxury-drip.com/product/t-shirt-56/",
            "description": "",
            "featuredImages": [
                "https://luxury-drip.com/wp-content/uploads/2025/03/6-b45428fa_1024x.jpg",
            ],
            "category": "All Products",
            "scrapedAt": "2025-05-21T08:59:27.642Z"
        },
        {
            "productId": "gilet-8999",
            "title": "GILET",
            "originalPrice": "219,99 €",
            "discountedPrice": "134,99 €",
            "isOnSale": true,
            "url": "https://luxury-drip.com/product/gilet-8/",
            "description": "",
            "featuredImages": [
                "https://luxury-drip.com/wp-content/uploads/2025/03/Untitled-design-49-3_1024x.png",
            ],
            "category": "All Products",
            "scrapedAt": "2025-05-21T08:59:27.642Z"
        },
    ]

    return (
        <section className="bg-white pt-[50px] pb-[95px]">
            <h2 className="text-[29px] font-[500] text-[#111111] uppercase text-center">Best Sellers</h2>
            <div className="mt-10 mb-5">
                <ProductCarousel category="Best Sellers" products={products} />
            </div>
            <div className="text-center mt-[70px]">
                <Link href="/shop" className="px-[20px] py-[10px] leading-4 text-base font-[500] text-white bg-[#111111] uppercase">Load More</Link>
            </div>
        </section>
    );
};

export default BestSellers;