import { useState, useEffect } from "react";


function CategoryFilter({ categoryFilter, setCategoryFilter }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchCategories = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("https://dummyjson.com/products/category-list")

            const data = await response.json();
            setCategories(data);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchCategories();
    }, [])
    return (
        <div className="category-filter">
            <select className="category-select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option className="category-select">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}

            </select>

        </div>
    );
}
export default CategoryFilter;