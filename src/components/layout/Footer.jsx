import { loadCommonTranslations } from "@/lib/loadCommonTranslations";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = async() => {
    // Load translations
    const { translations } = await loadCommonTranslations();
    return (
        <footer className="bg-[#000000]">
            <div>
                <div className="px-[10px] xl:px-[0px]">
                    <div className="py-[80px]">
                        <div className="container mx-auto">
                            <h2 className="text-[24px] font-[500] text-[#fff] uppercase text-center">{translations.section_title.newsletter}</h2>
                            <div className="text-center">
                                <input type="text" placeholder="Enter Email *" className="w-full max-w-[400px] mx-auto mt-[20px] px-[30px] py-[15px] rounded-none border border-[#fff] bg-[#303030] text-[#fff]" />
                                <button className="px-[20px] py-[4px] leading-[50px] text-base font-[500] text-white bg-[#525252] uppercase mt-2 md:mt-[20px] md:ml-[6px] w-full md:w-[fit-content]" href="#">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[50px] pb-[20px]">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                                <div className="col-span-1">
                                    <div className="mb-[70px]">
                                        <Image
                                            src={'/images/LUXURY-DRIP-FOOTER_LOGO.png'}
                                            width={185}
                                            height={46}
                                            alt="Luxury drip Logo"
                                        />
                                    </div>
                                    <div>
                                        <a>
                                            <FaWhatsapp size={25} className="text-white hover:text-[#A54CFF] transition-all duration-300" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <h3 className="text-[13px] font-[500] text-[#fff] uppercase mb-[27px]">Support</h3>
                                    <ul className="text-[13px] font-[400] text-[#fff]">
                                        <li className="mb-[10px] text-base text-[#ffffffc9]">Contact Us</li>
                                        <li className="mb-[10px] text-base text-[#ffffffc9]"><a href="mailto:info@luxury-drip.com">info.luxurydrip.it@gmail.com</a></li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h3 className="text-[13px] font-[500] text-[#fff] uppercase mb-[27px]">Shop</h3>
                                    <ul className="text-[13px] font-[400] text-[#fff]">
                                        <li className="mb-[10px] text-base text-[#ffffffc9]"><Link href="/faqs">{translations.menu.faq}</Link></li>
                                        <li className="mb-[10px] text-base text-[#ffffffc9]"><Link href="/terms-conditions">{translations.menu.terms}</Link></li>
                                        <li className="mb-[10px] text-base text-[#ffffffc9]"><Link href="/privacy-policy">{translations.menu.privacy}</Link></li>
                                        <li className="mb-[10px] text-base text-[#ffffffc9]"><Link href="/shipping-policy">{translations.menu.shipping}</Link></li>
                                        <li className="mb-[10px] text-base text-[#ffffffc9]"><Link href="/refund-policy">{translations.menu.refunds}</Link></li>
                                        <li className="mb-[10px] text-base text-[#ffffffc9]"><Link href="/cash-on-delivery-cod-policy">{translations.menu.cash}</Link></li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <p className="text-[13px] font-[500] text-[#fff] uppercase mb-[27px]">
                                        Get extra 40% off on shoes with the coupon code <span className="text-[#A54CFF] font-bold">SCONTO ESTATE</span>. Use it at checkout to enjoy the discount!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-[20px] border-t border-[#2b2b2b]">
                        <div className="container mx-auto">


                            <div className="flex justify-between items-center flex-col md:flex-row">
                                <div>
                                    <p className="text-[14px] text-[#cdcdcd]">© 2025 LUXURY DRIP - All Right reserved!</p>
                                </div>
                                <div>
                                    <Image
                                        src={'/images/payment_logos.png'}
                                        width={190}
                                        height={22}
                                        alt="Payment Methods"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;