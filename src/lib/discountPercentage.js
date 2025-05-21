export const discountPercentage = (originalPrice, discountedPrice) => {

    const discount = originalPrice - discountedPrice;
    const discountPercentage = Math.ceil((discount / originalPrice) * 100);

    return discountPercentage;
}