'use client';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { FaWhatsapp } from 'react-icons/fa6';
import Image from 'next/image';

const ProductMain = ({ product}) => {
    const { title, originalPrice, discountedPrice, featuredImages } = product;
    return (
        <section className=''>
            <div className="max-w-full lg:max-w-[1170px] mx-auto px-[10px] lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='col-span-1 pl-0 mdpl-[40px] lg:pl-[85px]'>
                        <InnerImageZoom src={featuredImages[0]} zoomSrc={featuredImages[0]} zoomScale={1.5} zoomType="hover" />
                    </div>
                    <div className='col-span-1 pl-0 md:pl-[50px] lg:pl-[100px]'>
                        <h1 className='text-[28px] font-[500] leading-[1.33em] text-[#111111] uppercase mb-[13px]'>
                            {title}
                        </h1>
                        <h3 className='text-[24px] font-[500] leading-[1.5em] mb-[20px]'>
                            <span className='line-through text-[#a0a0a0] text-[18px]'>{originalPrice}</span><span className='text-black ms-5'>{discountedPrice}</span>
                        </h3>
                        <div>
                            <p className='text-base text-[#111111] leading-[1.5] mb-[20px]'>Size</p>
                            <Select>
                                <SelectTrigger className="w-full px-[15px] py-[8px] rounded-none shadow-none border border-[#cccccc] hover:border-[#111111] min-h-[45px]">
                                    <SelectValue
                                        className="text-[16px] font-[400] leading-[24px] text-[#111111]"
                                        placeholder="Choose an option"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="l">L</SelectItem>
                                    <SelectItem value="m">M</SelectItem>
                                    <SelectItem value="s">S</SelectItem>
                                    <SelectItem value="xl">XL</SelectItem>
                                    <SelectItem value="xs">XS</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button className="text-sm font-[400] text-white uppercase mt-6 rounded-none min-h-[50px]"><a target='_blank' href="https://wa.me/01890551410">Whatsapp us to order</a></Button>
                            <a target='_blank' href="https://wa.me/01890551410" className="flex items-center gap-2 mt-4">
                                <FaWhatsapp size={22} className="text-black" />
                                +1097889375
                            </a>
                        </div>
                        <div className='mt-[30px]'>
                            <a className='w-[fit-content] inline-block' target='_blank' href="https://it.trustpilot.com/review/www.luxury-drip.com">
                                <Image
                                    src={'/images/trustpilot.jpg'}
                                    width={180}
                                    height={55}
                                    alt="Trust Pilot rating"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductMain;