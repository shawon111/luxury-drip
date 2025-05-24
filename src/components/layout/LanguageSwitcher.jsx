'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export function LanguageSwitcher() {
    function changeLocale(lang) {
        document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000`; // 1 year
        window.location.reload();
    }

    const [locale, setLocale] = useState('it');

    useEffect(() => {
        const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
        if (match) {
            setLocale(match[1]);
        }
    }, []);

    return (
        <div style={{
            boxShadow: 'rgba(0, 0, 0, 0.15) 0 5px 15px'
        }} className="px-[15px] py-[10px] bg-white fixed bottom-[20px] left-[20px] z-50">
            {
                locale === 'en' ?
                    <button className="text-[20px] text-[#111111] uppercase" onClick={() => changeLocale('it')}>
                        <Image
                            src="/images/it.png"
                            alt="Italian Flag"
                            width={24}
                            height={24}
                            className="inline-block mr-2"
                        />
                    </button> :
                    <button className="text-[20px] text-[#111111] uppercase" onClick={() => changeLocale('en')}>
                        <Image
                            src="/images/eng.png"
                            alt="English Flag"
                            width={24}
                            height={24}
                            className="inline-block mr-2"
                        />
                    </button>
            }
        </div>
    );
}
