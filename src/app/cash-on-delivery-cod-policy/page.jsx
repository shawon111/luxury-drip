import BreadCrumb from '@/components/layout/BreadCrumb';
import React from 'react';

const CashOnDeliveryPolicy = () => {
    return (
        <div>
            <BreadCrumb pageName="Cash On Delivery (COD) Policy" />
            <section className="px-[10px]">
                <h1 className='text-[32px] font-[500] leading-[1.33em] text-[#111111] uppercase py-[50px] text-center'>Cash On Delivery (COD) Policy</h1>
            </section>
            <section className='py-[80px]'>
                <div className="text-[#525252] text-[16px] leading-[1.5em] text-center py-8 max-w-full lg:max-w-[1170px] mx-auto px-[10px]">
                    <p className="mb-6">
                        Cash on Delivery is available only for selected models.
                    </p>

                    <p className="mb-6">
                        If your cart contains both items eligible for Cash on Delivery and items that are not, the Cash on Delivery option will not be available. In this case, you will only be able to complete the purchase by paying with a card.
                    </p>

                    <p className="mb-6">
                        To use the Cash on Delivery option, your cart must contain only eligible items and the <strong>QUANTITY NEED TO BE 1</strong>.
                    </p>

                    <p className="mb-6">
                        Before confirming a Cash on Delivery order, please make sure you truly want to complete the purchase. Shipping an item that is not picked up results in a financial loss for us due to shipping and return costs.
                    </p>

                    <p className="mb-6">
                        All Cash on Delivery orders will require a phone confirmation. If we are unable to contact you, or if there is no answer, the order will be automatically canceled.
                    </p>

                    <p className="mb-6">
                        Currently, Cash on Delivery is available only in Italy. We are working to make this service available in other countries soon.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CashOnDeliveryPolicy;