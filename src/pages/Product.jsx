import { useEffect } from "react";
import SearchBar from "../components/Search";
import ProductList from "../components/ProductList";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import Loader from "../components/Loader";

function Product({ products, searchInput, setSearchInput, fetchSearchProducts, loading, isSearching, searchResults, isSearchButtonClicked, setIsSearchButtonClicked, sortOption,
    setSortOption, categoryFilter, setCategoryFilter, toggleFavorite, addToCart, error, favorites }) {

    useEffect(() => {
        setIsSearchButtonClicked(false);
        setSearchInput("");
    }, [])
    return (
        <>
            <SearchBar
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                fetchSearchProducts={fetchSearchProducts}
                loading={loading} 
                isSearching={isSearching}
                />

            <CategoryFilter
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
            />

            <SortDropdown
                sortOption={sortOption}
                setSortOption={setSortOption}
            />

            {error ? (
                <p className="error-message">{error}</p>
            ) : loading ? (
                <Loader />
            ) : (
                <ProductList
                    products={products}
                    searchResults={searchResults}
                    isSearchButtonClicked={isSearchButtonClicked}
                    setSearchInput={setSearchInput}
                    sortOption={sortOption}
                    categoryFilter={categoryFilter}
                    toggleFavorite={toggleFavorite}
                    addToCart={addToCart}
                    favorites={favorites}
                />
            )}



        </>
    );
}
export default Product;