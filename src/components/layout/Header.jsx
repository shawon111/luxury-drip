import HeaderTopBar from './HeaderTopBar';
import HeaderDesktopMenu from './HeaderDesktopMenu';
import Image from 'next/image';
import MobileMenuWrapper from './MobileMenuWrapper';

const Header = () => {
    return (
        <header>
            <HeaderTopBar />
            <div className='bg-white py-[14px] px-[15px] xl:px-0'>
                <div className="container flex justify-between items-center mx-auto">
                    <div>
                        <MobileMenuWrapper />
                    </div>
                    <div>
                        <Image
                            src={'/images/luxury-drip-logo.png'}
                            width={60}
                            height={60}
                            alt="Logo"
                        />
                    </div>
                    <div>
                        <Image
                            src={'/images/cart-icon.svg'}
                            width={18}
                            height={18}
                            alt="Cart Icon"
                        />
                    </div>
                </div>
            </div>
            <HeaderDesktopMenu />
        </header>
    );
};

export default Header;