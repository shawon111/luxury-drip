import Image from "next/image";

const GuaranteeBanner = () => {
    return (
        <section>
            <Image
                width={1280}
                height={400}
                alt="Summer sale"
                src="/images/guaranty-banner.webp"
                className="w-full h-auto object-cover"
            />
        </section>
    );
};

export default GuaranteeBanner;