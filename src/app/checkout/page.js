import CheckoutPageClient from '@/components/checkout/CheckOutPageClient';
import CartWrapper from '@/components/layout/CartWrapper';
import React from 'react';

const CheckOutPage = () => {
    return (
        <div>
            <CartWrapper>
                <CheckoutPageClient />
            </CartWrapper>
        </div>
    );
};

export default CheckOutPage;