import FaqList from '@/components/faqs/FaqList';
import BreadCrumb from '@/components/layout/BreadCrumb';
import React from 'react';

const Faqs = () => {
    return (
        <div className='pb-[50px]'>
            <BreadCrumb pageName="FAQs" />
            <section>
                <h1 className='text-[32px] font-[500] leading-[1.33em] text-[#111111] uppercase py-[50px] text-center'>FAQs</h1>
            </section>
            <FaqList />
        </div>
    );
};

export default Faqs;