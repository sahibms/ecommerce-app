function SearchBar({ searchInput, setSearchInput, fetchSearchProducts, loading, isSearching }) {
    return (
        <div className="search-bar">
            <input
                className="search-input"
                type="text"
                value={searchInput}
                placeholder="Search Products..."
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { fetchSearchProducts(); } }}
            />

            <button className="search-btn" onClick={fetchSearchProducts} disabled={isSearching}>{isSearching ? "Searching..." : "Search"}</button>

        </div>
    );
}
export default SearchBar;