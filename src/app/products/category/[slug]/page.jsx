"use client";
import ProductCard from "@/components/product/ProductCard";
import { useTranslation } from "@/contexts/TranslationContext";
import { fetchCategoryProducts } from "@/lib/fetchCategoryProducts";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const categories = [
    { name: 'T-shirts', slug: 't-shirts', query: 't-shirt' },
    { name: 'Air Jordan 4', slug: 'j4', query: 'j4 jordan' },
    { name: 'Louis Vuitton', slug: 'lv', query: 'trainer skate cinturino' },
    { name: 'Yeezy Boost 350', slug: 'yeezy', query: 'yzy' },
    { name: 'Campus', slug: 'campus', query: 'campus' },
    { name: 'DSQ2 JEANS', slug: 'jeans', query: 'jeans' },
    { name: 'Bag', slug: 'bags', query: 'bag' },
]

const PRODUCTS_PER_PAGE = 16;

const CategoryPage = () => {
    // get the slug from the params
    const params = useParams()
    const { slug } = params;
    const selectedCategory = categories.find(category => category.slug === slug);
    const { name, query } = selectedCategory || {};
    if (!name) {
        return <div className="pt-[60px] pb-[80px] px-[40px]">Category not found</div>;
    }
    // products state
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch products based on the query
    useEffect(() => {
        const fetchProducts = async () => {
            if(query==="campus"){
                const response = await fetchCategoryProducts(query, false, true);
                setProducts(response);
            }else {
                const response = await fetchCategoryProducts(query, false);
                setProducts(response);
            }
        };

        fetchProducts();
        setLoading(false);
    }, []);

    // pagination
    const [visibleCount, setVisibleCount] = useState(1); // page count
    const displayedProducts = products.slice(0, visibleCount * PRODUCTS_PER_PAGE);
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 1);
    };

    // translation
    const translation = useTranslation();

    return (
        <div className="pt-[60px] pb-[80px]">
            <div className="px-[10px] lg:px-[50px] xl:px-[100] max-w-[1900px] mx-auto">
                <div>
                    <h1 className="text-center text-[32px] font-[500]">{name}</h1>
                    <div className="text-center">
                        <p>
                            <Link className='text-[14px] text-[#909090]' href="/">Home</Link> &gt; <span className='text-[14px] text-[#909090]'>{name}</span>
                        </p>
                    </div>
                </div>
                <div className="mt-[55px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                        {loading ? (
                            <p className="text-center">Loading products...</p>
                        ) : (
                            <>

                                {displayedProducts.map((product) => (
                                    <ProductCard
                                        category={name}
                                        key={product.productId}
                                        product={product}
                                    />
                                ))}
                            </>
                        )}
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
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;