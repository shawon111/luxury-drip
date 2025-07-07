import HeaderDesktopMenu from './HeaderDesktopMenu';
import Image from 'next/image';
import MobileMenuWrapper from './MobileMenuWrapper';
import HeaderMarquee from './HeaderMarquee';
import CartIcon from './CartIcon';
import CartWrapper from './CartWrapper';

const Header = () => {
    return (
        <header>
            <HeaderMarquee />
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
                        <CartWrapper>
                            <CartIcon />
                        </CartWrapper>
                    </div>
                </div>
            </div>
            <HeaderDesktopMenu />
        </header>
    );
};

export default Header;