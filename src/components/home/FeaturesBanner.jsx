import Image from "next/image";

const FeaturesBanner = () => {
    return (
        <section className="pt-[60px]">
            <div>
                <div>
                    <h2 className="text-[29px] font-[500] text-[#111111] uppercase text-center">BEST CUSTOMER SERVICE
                    </h2>
                </div>
                <div>
                    <Image
                        width={1280}
                        height={600}
                        alt="Features Banner"
                        src="/images/features-banner.webp"
                        className="w-[80%] h-auto object-cover mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default FeaturesBanner;