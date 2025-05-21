import { BaseUrl } from "./BaseUrl";

export const fetchProductData = async (productId) => {
    try {
        const response = await fetch(
        `${BaseUrl}/products.json`
        );

        const products = await response.json();

        if (products.length === 0) {
            return null;
        }

        const product = products.find((item) => item.productId === productId);
    
        const productData = product ? product : null;
        return productData;
    } catch (error) {
        console.error("Error fetching product data:", error);
        return null;
    }
}