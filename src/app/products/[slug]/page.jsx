import ProductBreadCrumb from "@/components/single-product/ProductBreadCrumb";
import ProductMain from "@/components/single-product/ProductMain";
import RelatedProducts from "@/components/single-product/RelatedProducts";

const SingleProductPage = () => {
    return (
        <div>
            <ProductBreadCrumb />
            <ProductMain />
            <RelatedProducts />
        </div>
    );
};

export default SingleProductPage;