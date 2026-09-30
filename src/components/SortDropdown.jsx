function SortDropdown({ sortOption, setSortOption }) {
    return (
        <div className="sort-dropdown">
            <select className="sort-select" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating-low">Rating: Low to High</option>
                <option value="name-az">Name: A to Z</option>
            </select>
        </div>
    );
}
export default SortDropdown;