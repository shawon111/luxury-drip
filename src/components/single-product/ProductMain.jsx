'use client';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { FaWhatsapp } from 'react-icons/fa6';
import Image from 'next/image';

const ProductMain = ({ product, translations }) => {
    const { title, originalPrice, discountedPrice, featuredImages } = product;
    const isBag = title.toLowerCase().includes('bag');
    const isShoe = ['shoe', 'sneaker', 'skate', 'jordan', 'j4', 'trainer',
  'cinturino', 'yzy', 'yeezy', 'campus', 'boost'].some(keyword =>
        title.toLowerCase().includes(keyword)
    );
    return (
        <section className='pb-[80px]'>
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
                                {
                                    isBag ? (
                                        <SelectContent>
                                            <SelectItem value="unique">Unique</SelectItem>
                                        </SelectContent>
                                    ) : isShoe ? (
                                        <SelectContent>
                                            <SelectItem value="36">36</SelectItem>
                                            <SelectItem value="36.5">36.5</SelectItem>
                                            <SelectItem value="37">37</SelectItem>
                                            <SelectItem value="37.5">37.5</SelectItem>
                                            <SelectItem value="38">38</SelectItem>
                                            <SelectItem value="38.5">38.5</SelectItem>
                                            <SelectItem value="39">39</SelectItem>
                                            <SelectItem value="39.5">39.5</SelectItem>
                                            <SelectItem value="40">40</SelectItem>
                                            <SelectItem value="40.5">40.5</SelectItem>
                                            <SelectItem value="41">41</SelectItem>
                                            <SelectItem value="41.5">41.5</SelectItem>
                                            <SelectItem value="42">42</SelectItem>
                                            <SelectItem value="42.5">42.5</SelectItem>
                                            <SelectItem value="43">43</SelectItem>
                                            <SelectItem value="43.5">43.5</SelectItem>
                                            <SelectItem value="44">44</SelectItem>
                                            <SelectItem value="44.5">44.5</SelectItem>
                                            <SelectItem value="45">45</SelectItem>
                                            <SelectItem value="45.5">45.5</SelectItem>
                                            <SelectItem value="46">46</SelectItem>
                                        </SelectContent>
                                    ) : <SelectContent>
                                        <SelectItem value="l">L</SelectItem>
                                        <SelectItem value="m">M</SelectItem>
                                        <SelectItem value="s">S</SelectItem>
                                        <SelectItem value="xl">XL</SelectItem>
                                        <SelectItem value="xs">XS</SelectItem>
                                    </SelectContent>
                                }
                            </Select>
                            <Button className="text-sm font-[400] text-white uppercase mt-6 rounded-none min-h-[50px]"><a target='_blank' href="https://wa.me/393508301446">{translations.whats_app_btn}</a></Button>
                            <a target='_blank' href="https://wa.me/393508301446" className="flex items-center gap-2 mt-4">
                                <FaWhatsapp size={22} className="text-black" />
                                +393508301446
                            </a>
                            <div>
                                <p className='text-base text-green-700 leading-[1.5] mt-[20px]'>Use this coupon to get extra 40% discount - "SCONTO ESTATE"</p>
                            </div>
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