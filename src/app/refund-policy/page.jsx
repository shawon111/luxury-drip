import BreadCrumb from '@/components/layout/BreadCrumb';
import React from 'react';

const RefundPolicy = () => {
    return (
        <div>
            <BreadCrumb pageName="Refund Policy" />
            <section className="px-[10px]">
                <h1 className='text-[32px] font-[500] leading-[1.33em] text-[#111111] uppercase py-[50px] text-center'>Refund Policy</h1>
            </section>
            <section className='py-[80px]'>
                <div className="text-[#525252] text-[16px] leading-[1.5em] text-center py-8 max-w-full lg:max-w-[1170px] mx-auto px-[10px]">
                    <p className="mb-6">
                        <strong>RETURNS</strong>
                    </p>

                    <div className="mb-6 flex justify-center">
                        <div className="w-16 border-t border-[#525252]"></div>
                    </div>

                    <p className="mb-6">
                        Our policy provides for a 15 day return period. If 15 days have gone by since the date of purchase, unfortunately we can't offer you any refunds or exchanges.
                    </p>

                    <p className="mb-6">
                        In order for it to be eligible for return, the item must be intact and in the same condition in which you received it. It must also be in its original packaging.
                    </p>

                    <p className="mb-4">
                        Items for which returns are excluded:
                    </p>
                    <ul className="mb-6 list-disc list-inside mx-auto max-w-sm">
                        <li className="mb-2">Gift Vouchers</li>
                        <li>Discounted items</li>
                    </ul>

                    <p className="mb-6">
                        For return purposes, we require a receipt or proof of purchase.<br />
                        Please do not send your purchase back to the manufacturer.
                    </p>

                    <p className="mb-4">
                        In some cases, only partial refunds are granted (if applicable):
                    </p>
                    <ul className="mb-6 list-disc list-inside mx-auto max-w-md">
                        <li className="mb-2">Any item that is not in its original state, is damaged or with missing parts for reasons unrelated to our error.</li>
                        <li>Any item returned more than 15 days after delivery</li>
                    </ul>

                    <p className="mb-6">
                        <strong>Refunds (if applicable)</strong><br />
                        Once the return has been received and inspected, we will send you an email to let you know that the item has been received. We will also notify you of the approval or rejection of your refund request.<br />
                        If your request is approved, the refund will be processed and a credit will automatically be applied to your original card or payment method within a certain number of days.
                    </p>

                    <p className="mb-6">
                        <strong>Late or outstanding refunds (if applicable)</strong><br />
                        If you haven't received a refund yet, first double check your bank account.<br />
                        Then contact the credit card company; it may take some time for the refund to be formally registered.<br />
                        Then contact your bank. There is often some processing time for registering for a refund.<br />
                        If you have already followed these steps and you have not yet received your refund, write to us at the following address: luxurydrip7@gmail.com.
                    </p>

                    <p className="mb-6">
                        <strong>Sale items (if applicable)</strong><br />
                        Only full priced items can be refunded. Unfortunately, no refunds are possible for items on sale.
                    </p>

                    <p className="mb-6">
                        <strong>Exchanges (if applicable)</strong><br />
                        We only replace items if they are defective or damaged. If you need an exchange with the same item, send us an email to luxurydrip7@gmail.com and send the item to the following address: MI Italy.
                    </p>

                    <p className="mb-6">
                        <strong>Gifts</strong><br />
                        If at the time of purchase the item was marked as a gift and shipped directly to you, you will receive a voucher corresponding to the value of the return. Upon receipt of the returned item, the gift voucher will be sent to you by post.
                    </p>

                    <p className="mb-6">
                        If the item was not marked as a gift at the time of purchase, or if the gift giver had the order shipped to be delivered to you in person, we will send a refund to the gift giver and they will be aware of the your return.
                    </p>

                    <p className="mb-6">
                        <strong>Shipment</strong>
                    </p>

                    <p className="mb-6">
                        To make a return, send us a message by the section ABOUT US.
                    </p>

                    <p className="mb-6">
                        The shipping costs for the return of the item will be at your expense. Shipping costs are non-refundable. If you receive a refund, the return shipping costs will not be included in the refund.
                    </p>

                    <p className="mb-6">
                        Depending on the country you live in, the time it takes for the replacement product to be delivered may vary.
                    </p>

                    <p className="mb-6">
                        If you need to ship an item worth more than € 75, consider using a trackable shipping service or insuring the shipment. We do not guarantee that we will receive the returned item.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default RefundPolicy;