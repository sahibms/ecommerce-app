import Productcard from "./ProductCard";

function ProductList({ products, searchResults, isSearchButtonClicked, searchInput, sortOption, categoryFilter, toggleFavorite, addToCart, favorites }) {

    const productsToShow = isSearchButtonClicked ? searchResults : products;

    const filteredProducts = categoryFilter === "all" ? productsToShow : productsToShow.filter((product) => (product.category === categoryFilter));

    let sortedProducts = [...filteredProducts]

    if (sortOption === "price-low") {
        sortedProducts.sort((a, b) => a.price - b.price)
    } else if (sortOption === "price-high") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating-low") {
        sortedProducts.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === "name-az") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    }
    return (
        <div className="product-list">
            {sortedProducts.length === 0 ? (
                <p className="no-products-message">
                    No products found.
                </p>
            ) : (
                sortedProducts.map((product) => (
                    <Productcard
                        key={product.id}
                        product={product}
                        toggleFavorite={toggleFavorite}
                        addToCart={addToCart}
                        favorites={favorites}
                    />
                ))
            )}
        </div>
    );
}
export default ProductList;