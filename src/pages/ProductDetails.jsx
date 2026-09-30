import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function ProductDetails() {
    const [productDetails, setProductDetails] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const fetchProductDetails = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(`https://dummyjson.com/products/${id}`);

            if(!response.ok) {
                throw new Error("Product not found");
            }

            const data = await response.json();

            setProductDetails(data);

        } catch (error) {
            setError("Unable to load product details.Please check your internet connection.");

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [id])
    return (
        <>
            {loading ? (
                <Loader />
            ) : productDetails ? (

                <div className="product-details">
                    <h1 className="product-details-heading">Product Details</h1>
                    <div className="product-details-image">
                        <img src={productDetails.thumbnail}
                            alt={productDetails.title} />
                    </div>
                    <div className="product-details-info">
                        <h1 className="product-details-title">{productDetails.title}</h1>
                        <div className="product-details-rating">Rating:{productDetails.rating}⭐</div>
                        <div className="product-details-price">Price: ${productDetails.price}</div>
                        <div className="product-details-discount">Discount:{productDetails.discountPercentage}%</div>
                        <div className="product-details-category">Category:{productDetails.category}</div>
                        <p className="product-details-description">{productDetails.description}</p>
                        <div className="product-details-stock">Stock:{productDetails.stock}</div>
                        <div className="product-details-brand">Brand:{productDetails.brand}</div>
                    </div>
                </div>
            ) : (
                <p className="product-not-found">
                    Product Details not found
                </p>
            )}
        </>
    );
}
export default ProductDetails;