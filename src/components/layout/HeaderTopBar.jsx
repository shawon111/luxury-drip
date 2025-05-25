import { loadCommonTranslations } from "@/lib/loadCommonTranslations";

const HeaderTopBar = async() => {
    const { translations } = await loadCommonTranslations();
    return (
        <div className="bg-[#f5f5f5]">
            <div className="px-[10px] lg:px-0">
                <p className="text-[11px] font-[500] text-[#111111] uppercase text-center leading-[16.5px] tracking-[0.22px]">{translations.header_top}📲</p>
            </div>
        </div>
    );
};

export default HeaderTopBar;