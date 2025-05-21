import ProductCarousel from "../product/ProductCarousel";

const Bags = () => {
    return (
        <section className="bg-white pt-[50px] pb-[95px]">
            <h2 className="text-[29px] font-[500] text-[#111111] uppercase text-center">Bags</h2>
            <div className="mt-10 mb-5">
                <ProductCarousel />
            </div>
            <div className="text-center mt-[70px]">
                <a className="px-[20px] py-[10px] leading-4 text-base font-[500] text-white bg-[#111111] uppercase" href="#">Load More</a>
            </div>
        </section>
    );
};

export default Bags;