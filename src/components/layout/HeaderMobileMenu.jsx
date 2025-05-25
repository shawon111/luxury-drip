"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useTranslation } from "@/contexts/TranslationContext";
import { ChevronDown, Menu } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function HeaderMobileMenu() {
    const [openMenus, setOpenMenus] = useState({});
    const toggleSubmenu = (name) => {
        setOpenMenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    // Load translations
    const translations = useTranslation();
    const menuItems = [
        { name: translations.menu.home, link: '/' },
        { name: translations.menu.best_seller, link: '/products' },
        {
            name: translations.menu.women, link: '#', submenu: [
                { name: translations.menu.bags, link: '/products/category/bags' },
            ]
        },
        {
            name: translations.menu.accessories, link: '#', submenu: [
                { name: translations.menu.bags, link: '/products/category/bags' }
            ]
        },
        {
            name: translations.menu.sneakers, link: '#', submenu: [
                { name: 'Louis Vuitton', link: '/products/category/lv' },
                { name: 'Air Jordan 4', link: '/products/category/j4' },
                { name: 'Campus', link: '/products/category/campus' },
                { name: 'J4', link: '/products/category/yeezy' },
            ]
        },
        {
            name: translations.menu.summer_drip, link: '#', submenu: [
                { name: translations.menu.t_shirts, link: '/products/category/t-shirts' },]
        },
        {
            name: translations.menu.clothes, link: '#', submenu: [
                { name: translations.menu.jeans, link: '/products/category/jeans' },]
        },
        {
            name: translations.menu.trapstar, link: '#', submenu: [
                { name: translations.menu.t_shirts, link: '/products/category/t-shirts' },
                { name: translations.menu.bags, link: '/products/category/bags' }
            ]
        },
        {
            name: translations.menu.corteiz, link: '#', submenu: [
                { name: translations.menu.t_shirts, link: '/products/category/t-shirts' },]
        },
        {
            name: translations.menu.contact, link: '/contact',
        }
    ];
    return (
        <Sheet>
            <SheetTrigger className="xl:hidden" asChild>
                <Menu />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader className="flex flex-col items-center">
                    <Image
                        src={'/images/luxury-drip-logo.png'}
                        width={60}
                        height={60}
                        alt="Logo"
                    />
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                </SheetHeader>
                <nav className="mt-6 space-y-2">
                    {menuItems.map((item) => (
                        <div key={item.name}>
                            {item.submenu ? (
                                <>
                                    <button
                                        onClick={() => toggleSubmenu(item.name)}
                                        className="w-full flex items-center justify-between text-left px-4 py-2 font-medium text-gray-800 hover:bg-gray-100"
                                    >
                                        {item.name}
                                        <ChevronDown
                                            className={`h-4 w-4 transform transition-transform ${openMenus[item.name] ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {openMenus[item.name] && (
                                        <div className="ml-4 mt-1 space-y-1">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.link}
                                                    className="block px-4 py-1 text-sm text-gray-700 hover:text-black"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.link}
                                    className="block px-4 py-2 font-medium text-gray-800 hover:bg-gray-100"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                <SheetFooter>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
