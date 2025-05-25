import ContactForm from "@/components/contact/ContactForm";
import { loadCommonTranslations } from "@/lib/loadCommonTranslations";

const Contact = async () => {
    const { translations } = await loadCommonTranslations();
    return (
        <div>
            <section className="bg-[url('/images/home-hero-bg.webp')] bg-cover bg-center lg:py-[150px] md:py-[100px] py-[80px]">
                <div className="container mx-auto">
                    <h2 className="text-[40px] font-[600] text-[#ffffff] uppercase text-center">{translations.section_title.contact}</h2>
                    <p className="text-[18px] text-[#ffffff] text-center mt-[20px] mb-[60px]">{translations.contact_us_subtitle}</p>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Contact;