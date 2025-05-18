import ProductCard from "../product/ProductCard";

const BestSellers = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-[20px] mt-10 mb-5">
                <div className="w-full">
                    <ProductCard />
                </div>
                <div className="w-full">
                    <ProductCard />
                </div>
                <div className="w-full">
                    <ProductCard />
                </div>
                <div className="w-full">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default BestSellers;