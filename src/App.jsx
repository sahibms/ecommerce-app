import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./pages/Login"
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Notfound from "./pages/NotFound";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSearching,setItSearching] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const [cart, setCart] = useState(() => {
    const savedCartItems = localStorage.getItem("cart");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://dummyjson.com/products")

      const data = await response.json();


      setProducts(data.products);

    } catch (error) {
      setError("Unable to load products.Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  const fetchSearchProducts = async () => {
    if (searchInput.trim() === "") {
      setError("Please enter a product name to search");
      return;
    }

    setIsSearchButtonClicked(true);

    try {
      setLoading(true);
      setError("");

      const response = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`)

      const data = await response.json();

      setSearchResults(data.products);
    } catch (error) {
      setError("Unable to search products.Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  const toggleFavorite = (product) => {

    const existingFavorite = favorites.find((favoriteproduct) => (
      favoriteproduct.id === product.id
    ))
    if (existingFavorite) {
      setFavorites(
        favorites.filter((favoritesproduct) => (
          favoritesproduct.id !== product.id
        ))
      );
    } else {
      setFavorites([...favorites, product])

    }
  }

  const addToCart = (product) => {
    const existingCart = cart.find((cartProduct) => (
      cartProduct.id === product.id
    ))
    if (existingCart) {
      setCart(
        cart.map((cartProduct) => (
          cartProduct.id === product.id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 } : cartProduct
        ))
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const increaseQuantity = (clickedproductid) => {
    setCart(
      cart.map((cartProduct) => (
        cartProduct.id === clickedproductid
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 } : cartProduct
      )
      )
    );

  }

  const decreaseQuantity = (clickedproductid) => {
    const clickedProduct = cart.find((cartProduct) => (
      cartProduct.id === clickedproductid
    ));
    if (clickedProduct.quantity === 1) {
      setCart(
        cart.filter((cartProduct) => (
          cartProduct.id !== clickedproductid
        ))
      )

    } else {
      setCart(
        cart.map((cartProduct) => (
          cartProduct.id === clickedproductid
            ? { ...cartProduct, quantity: cartProduct.quantity - 1 } : cartProduct

        ))
      )
    }

  }

  const removeCart = (clickedProductid) => {
    setCart(
      cart.filter((cartProduct) => (
        cartProduct.id !== clickedProductid
      ))
    );

  }

  const total = cart.reduce((sum, item) => (
    sum + item.price * item.quantity

  ), 0);

  const handleCheckout = () => {
    if (loggedIn) {
      alert("Thank you for your order")
    } else {
      navigate("/login")
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home
          products={products}
          loading={loading}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />}>
        </Route>

        <Route path="/products" element={<Product
          products={products}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          fetchSearchProducts={fetchSearchProducts}
          loading={loading}
          isSearching={isSearching}
          searchResults={searchResults}
          isSearchButtonClicked={isSearchButtonClicked}
          setIsSearchButtonClicked={setIsSearchButtonClicked}
          sortOption={sortOption}
          setSortOption={setSortOption}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          toggleFavorite={toggleFavorite}
          addToCart={addToCart}
          error={error}
          favorites={favorites}
        />}>
        </Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
        <Route path="/favorites" element={<Favorites favorites={favorites}
          toggleFavorite={toggleFavorite}

        />}>
        </Route>
        <Route path="/cart" element={<Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeCart={removeCart}
          total={total}
          handleCheckout={handleCheckout}
        />}>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login
          setLoggedIn={setLoggedIn}
        />}>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Notfound />}></Route>

      </Routes>
      <Footer />

    </>

  );
}
export default App;