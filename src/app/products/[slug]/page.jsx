import ProductBreadCrumb from "@/components/single-product/ProductBreadCrumb";
import ProductMain from "@/components/single-product/ProductMain";
import RelatedProducts from "@/components/single-product/RelatedProducts";
import { fetchProductData } from "@/lib/fetchProductData";
import { loadCommonTranslations } from "@/lib/loadCommonTranslations";

const SingleProductPage = async({ params }) => {
    const { translations } = await loadCommonTranslations();
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
            <ProductMain translations={translations} product={product} />
            {/* <RelatedProducts /> */}
        </div>
    );
};

export default SingleProductPage;