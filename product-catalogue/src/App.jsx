import { useState } from "react";
import products from "./data/products.json";
import './App.css'


function App() {

  const [search, setSearch] = useState("");
  const [category , setCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h1>Product Catalogue</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
