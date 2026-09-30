import Productcard from "../components/ProductCard";
import Product from "./Product";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

function Home({ products, loading, favorites, toggleFavorite }) {

    const navigate = useNavigate();

    const featuredProucts = products.slice(0, 4)
    return (
        <>
            <div className="hero-banner">
                <div className="hero-banner-track">
                    <img src="/banners/banner1.png" onClick={() => navigate("/products")}
                        alt="Summer Sale" />
                    <img src="/banners/banner2.png" onClick={() => navigate("/products")}
                        alt="Explore Products" />
                    <img src="/banners/banner3.png" onClick={() => navigate("/products")}
                        alt="New Collection" />

                </div>
            </div>

            <h2>Featured Products</h2>

            <div className="featured products">
                {loading ? (
                    <Loader />
                ) : featuredProucts.length === 0 ? (
                    <p className="no-products-message">
                        No products found
                    </p>
                ) : (
                    featuredProucts.map((product) => (
                        <Productcard
                            key={product.id}
                            product={product}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                        />
                    ))
                )}
            </div>
        </>
    );

}
export default Home;