import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FaqList = () => {
    return (
        <section className='py-[80px]'>
            <div className="max-w-full lg:max-w-[800px] mx-auto px-[10px]">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem className="border-t border-[#e5e5e5]" value="item-1">
                        <AccordionTrigger className="text-[#111111] text-[18px] leading-[1.33em] font-[500] uppercase cursor-pointer hover:no-underline">SHIPPING TIMES & COSTS?</AccordionTrigger>
                        <AccordionContent className="text-base leading-[1.5em] text-[#525252] cursor-pointer">
                            We offer express shipping for 9.99€.
                            <br />
                            The orders arrive within 7-20 business days(there may be some delays caused by the customs).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[#111111] text-[18px] leading-[1.33em] font-[500] uppercase cursor-pointer hover:no-underline">WHERE IS MY ORDER?</AccordionTrigger>
                        <AccordionContent className="text-base leading-[1.5em] text-[#525252] cursor-pointer">
                            After 2-4 days you will receive an email with the TRACKING NUMBER.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[#111111] text-[18px] leading-[1.33em] font-[500] uppercase cursor-pointer hover:no-underline">WHAT SHOULD I DO IF MY ORDER HAS NOT BEEN DELIVERED YET?</AccordionTrigger>
                        <AccordionContent className="text-base leading-[1.5em] text-[#525252] cursor-pointer">
                            In the case of a missed delivery please contact DHL and contact us through the section “CONTACT US”
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[#111111] text-[18px] leading-[1.33em] font-[500] uppercase cursor-pointer hover:no-underline">WHAT CAN I DO IF MY PACKET IS DEMAGED?</AccordionTrigger>
                        <AccordionContent className="text-base leading-[1.5em] text-[#525252] cursor-pointer">
                            Contact us through the section “CONTACT US”.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[#111111] text-[18px] leading-[1.33em] font-[500] uppercase cursor-pointer hover:no-underline">RETURNS POLICY FOR ONLINE PURCHASES:</AccordionTrigger>
                        <AccordionContent className="text-base leading-[1.5em] text-[#525252] cursor-pointer">
                            If your item is eligible for return, you have 15 days from the date you received your order.
                            <br />
                            Contact Us through the section “CONTACT US” to return your order.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="border-b! border-[#e5e5e5]" value="item-1">
                        <AccordionTrigger className="text-[#111111] text-[18px] leading-[1.33em] font-[500] uppercase cursor-pointer hover:no-underline">PAYMENTS METHODS?</AccordionTrigger>
                        <AccordionContent className="text-base leading-[1.5em] text-[#525252] cursor-pointer">
                            Credit Card : Visa, MasterCard, American Express.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default FaqList;