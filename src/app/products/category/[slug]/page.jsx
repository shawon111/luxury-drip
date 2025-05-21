import ProductCard from "@/components/product/ProductCard";
import { fetchCategoryProducts } from "@/lib/fetchCategoryProducts";
import Link from "next/link";

const categories = [
        {name: 'T-shirts', slug: 't-shirts', query: 't-shirt'},
        {name: 'Air Jordan 4', slug: 'j4', query: 'j4 jordan'},
        {name: 'Louis Vuitton', slug: 'lv', query: 'trainer skate cinturino'},
        {name: 'Yeezy Boost 350', slug: 'yeezy', query: 'yzy'},
        {name: 'Campus', slug: 'campus', query: 'campus'},
        {name: 'DSQ2 JEANS', slug: 'jeans', query: 'jeans'},
        {name: 'Bag', slug: 'bags', query: 'bag'},
    ]

const CategoryPage = async({params}) => {
    const {slug} = await params;
    const selectedCategory = categories.find(category => category.slug === slug);
    const {name, query} = selectedCategory || {};
    if (!name) {
        return <div>Category not found</div>;
    }
    // fetch products based on the query
    const products = await fetchCategoryProducts(query, 1, false);
    if (!products || products.length === 0) {
        return <div>No products found</div>;
    }
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
                        {
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;