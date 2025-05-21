import ProductBreadCrumb from "@/components/single-product/ProductBreadCrumb";
import ProductMain from "@/components/single-product/ProductMain";
import RelatedProducts from "@/components/single-product/RelatedProducts";
import { fetchProductData } from "@/lib/fetchProductData";

const SingleProductPage = async({ params }) => {
    const { slug } = await params;
    // Fetch product data based on the slug
    const product = await fetchProductData(slug);
    if (product=== null) {
        return <div>Product not found</div>;
    }
    const { title} = product;
    return (
        <div>
            <ProductBreadCrumb title={title} />
            <ProductMain product={product} />
            {/* <RelatedProducts /> */}
        </div>
    );
};

export default SingleProductPage;