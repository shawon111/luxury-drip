import Image from "next/image";
import Link from "next/link";

const ShoesCategories = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-1">
                    <Link href="/products/category/j4">
                        <Image
                            width={400}
                            height={400}
                            alt="Shoes Category"
                            src="/images/AIR-JORDAN-4.jpg"
                            className="w-full h-auto object-cover"
                        />
                    </Link>
                </div>
                <div className="col-span-1">
                    <Link href="/products/category/lv">
                        <Image
                            width={400}
                            height={400}
                            alt="Shoes Category"
                            src="/images/LOUIS-VUITTON.jpg"
                            className="w-full h-auto object-cover"
                        />
                    </Link>
                </div>
                <div className="col-span-1">
                    <Link href="/products/category/campus">
                        <Image
                            width={400}
                            height={400}
                            alt="Shoes Category"
                            src="/images/CAMPUS.jpg"
                            className="w-full h-auto object-cover"
                        />
                    </Link>
                </div>
                <div className="col-span-1">
                    <Link href="/products/category/yeezy">
                        <Image
                            width={400}
                            height={400}
                            alt="Shoes Category"
                            src="/images/YEEZY-BOOST-350.jpg"
                            className="w-full h-auto object-cover"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ShoesCategories;