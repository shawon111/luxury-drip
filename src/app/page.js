import BestSellers from "@/components/home/BestSellers";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <section className="bg-[url('/images/home-hero-bg.webp')] bg-cover bg-center h-[817px] hidden lg:block">
        </section>
        <section className="bg-[url('/images/home-hero-bg-mobile.webp')] bg-cover bg-center h-[489px] md:h-[817px] block lg:hidden">
        </section>
        <BestSellers />
        <section>
          <a href="#" className="flex justify-center items-center">
            <Image
              width={1280}
              height={400}
              alt="Summer sale"
              src="/images/summer-cta-banner.jpeg"
              className="w-full h-auto object-cover"
            />
          </a>
        </section>
      </main>
    </div>
  );
}
