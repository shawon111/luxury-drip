import BreadCrumb from '@/components/layout/BreadCrumb';
import React from 'react';

const ShippingPolicy = () => {
    return (
        <div>
            <BreadCrumb pageName="Shipping Policy" />
            <section className="px-[10px]">
                <h1 className='text-[32px] font-[500] leading-[1.33em] text-[#111111] uppercase py-[50px] text-center'>Shipping Policy</h1>
            </section>
            <section className='py-[80px]'>
                <div className="text-[#525252] text-[16px] leading-[1.5em] text-center py-8 max-w-full lg:max-w-[1170px] mx-auto px-[10px]">
                    <p className="mb-6">
                        We ship worldwide via DHL courrier.
                    </p>

                    <p className="mb-6">
                        We offer complimentary express shipping.
                    </p>

                    <p className="mb-6">
                        You will receive an email with your tracking number once your package has been shipped. For security reasons, your purchases will require a signature upon delivery. Please check the number of boxes delivered and make sure the package is not damaged in any way. Any damage to the packaging and/or the product or any discrepancy between the number of boxes delivered should be immediatedly notified by indicating in writing on the courier's delivery documents. Our courier delivers from Monday to Friday during business hours and will make two delivery attempts. After the second failed attempt, your order will be returned to the sender. Please note that once you have placed an order, it is no longer possible to modify your shipping address.
                    </p>

                    <p className="mb-6">
                        All orders are processed automatically and we are unable to expedite or delay shipping times.
                    </p>

                    <p className="mb-6">
                        SHIPPING TIMES : 5-20 business days ( there may be some delays caused by the customs ).
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ShippingPolicy;