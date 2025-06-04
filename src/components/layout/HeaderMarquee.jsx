'use client';

import {
    Marquee,
    MarqueeItem,
    MarqueeContent,
} from '@/components/ui/shadcn-io/marquee';

const HeaderMarquee = () => (
    <div className="h-[fit-content] w-full flex items-center justify-center bg-[#dd3333] py-[3px]">
        <Marquee>
            <MarqueeContent>
                <MarqueeItem>
                    <span class="track text-[12px] uppercase leading-[1.3em] text-white">
                        Profili Instagram temporaneamente non disponibili. Per informazioni, contattateci a info.luxurydrip.it@gmail.com o tramite WhatsApp cliccando sull'icona in basso a destra! <span class="seperator">· XNUMX€</span>
                        Profili Instagram temporaneamente non disponibili. Per informazioni, contattateci a info.luxurydrip.it@gmail.com o tramite WhatsApp cliccando sull'icona in basso a destra! <span class="seperator">· XNUMX€</span>
                        Profili Instagram temporaneamente non disponibili. Per informazioni, contattateci a info.luxurydrip.it@gmail.com o tramite WhatsApp cliccando sull'icona in basso a destra! <span class="seperator">· XNUMX€</span>
                    </span>
                </MarqueeItem>
            </MarqueeContent>
        </Marquee>
    </div>
);

export default HeaderMarquee;