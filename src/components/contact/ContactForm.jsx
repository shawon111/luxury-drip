"use client"

import { useTranslation } from "@/contexts/TranslationContext";
import { useRef, useState } from "react";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        formRef.current.reset();
    }

    // translation
    const translation = useTranslation();
    return (
        <div className="w-full">
            <form className="flex flex-col max-w-[full] lg:max-w-[1170px] mx-auto gap-3 px-[10px] lg:px-0" ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <input className="col-span-1 px-[15px] py-[15px] bg-[#fffFFF29] text-white leading-[1em] focus:outline-hidden rounded-sm" type="text" placeholder={translation.form.name} />
                    <input className="col-span-1 px-[15px] py-[15px] bg-[#fffFFF29] text-white leading-[1em] focus:outline-hidden rounded-sm" type="email" placeholder={translation.form.email} />
                </div>
                <input className=" px-[15px] py-[15px] bg-[#fffFFF29] text-white leading-[1em] focus:outline-hidden rounded-sm" type="text" placeholder={translation.form.phone} />
                <textarea rows="6" className=" px-[15px] py-[15px] bg-[#fffFFF29] text-white leading-[1em] focus:outline-hidden rounded-sm" placeholder={translation.form.message}></textarea>
                <div className="text-center">
                    <button className="py-[9px] px-[50px] bg-white text-black rounded-sm w-[fit-content] font-[500]" type="submit">{translation.form.send}</button>
                </div>
            </form>
            <div>
                {submitted && (
                    <div className="success-message">
                        {translation.form.success}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;