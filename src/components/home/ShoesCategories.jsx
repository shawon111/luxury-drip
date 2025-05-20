import Image from "next/image";

const ShoesCategories = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-1">
                    <Image 
                        width={400}
                        height={400}
                        alt="Shoes Category"
                        src="/images/AIR-FORCE-1.jpg"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="col-span-1">
                    <Image 
                        width={400}
                        height={400}
                        alt="Shoes Category"
                        src="/images/AIR-JORDAN-4.jpg"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="col-span-1">
                    <Image 
                        width={400}
                        height={400}
                        alt="Shoes Category"
                        src="/images/LOUIS-VUITTON.jpg"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="col-span-1">
                    <Image 
                        width={400}
                        height={400}
                        alt="Shoes Category"
                        src="/images/AIR-MAX-PLUS.jpg"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="col-span-1">
                    <Image 
                        width={400}
                        height={400}
                        alt="Shoes Category"
                        src="/images/CAMPUS.jpg"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="col-span-1">
                    <Image 
                        width={400}
                        height={400}
                        alt="Shoes Category"
                        src="/images/YEEZY-BOOST-350.jpg"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default ShoesCategories;