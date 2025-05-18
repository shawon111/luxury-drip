import BestSellers from "@/components/home/BestSellers";

export default function Home() {
  return (
    <div>
      <main>
        <section className="bg-[url('/images/home-hero-bg.webp')] bg-cover bg-center h-[817px] hidden lg:block">
        </section>
        <section className="bg-[url('/images/home-hero-bg-mobile.webp')] bg-cover bg-center h-[489px] md:h-[817px] block lg:hidden">
        </section>
        <BestSellers />
      </main>
    </div>
  );
}
