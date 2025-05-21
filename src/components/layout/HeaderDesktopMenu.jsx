import Link from "next/link";

const HeaderDesktopMenu = () => {
    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'Best Seller', link: '/best-seller' },
        { name: 'Accessories', link: '#', submenu: [
            { name: 'Hats', link: '/accessories/hats' },
            { name: 'Bags', link: '/accessories/bags' },
            { name: 'Sunglasses', link: '/accessories/sunglasses' },
        ] },
        { name: 'Hoodies', link: '#', submenu: [
            { name: 'LV', link: '/hoodies/lv' },
            { name: 'DIOR', link: '/hoodies/dior' },
        ] },
        { name: 'Contact', link: '/contact' },
    ];
    return (
        <div className="bg-[#1f1f1f] min-h-[62px] hidden xl:flex items-center justify-center">
            <div>
                <nav>
                    <ul className="flex justify-center items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group py-[8px]">
                                <Link href={item.link} className={`${item.link === "#" ? "text-[13px]" : "text-[15px]"} font-[500] text-[#cdcdcd] uppercase leading-[16.5px] tracking-[0.22px] hover:text-[#000000] p-[3px]`}>
                                    {item.name}
                                </Link>
                                {item.submenu && (
                                    <ul className="absolute top-[16px] left-0 hidden group-hover:block bg-white shadow-lg mt-2 py-4">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={subItem.link} className="block px-8 py-2 text-[15px] leading-[1.5] uppercase text-[#0b0b0b]">
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HeaderDesktopMenu;