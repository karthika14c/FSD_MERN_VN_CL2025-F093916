import React, { useState } from 'react'

const Question8 = () => {
    const products = [
        { name: "Laptop", category: "Electronics" },
        { name: "Smartphone", category: "Electronics" },
        { name: "T-Shirt", category: "Clothes" },
        { name: "Jeans", category: "Clothes" },
        { name: "Headphones", category: "Electronics" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleFilter = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Product List</h2>

            
            <div style={{ margin: "20px 0" }}>
                {["All", "Electronics", "Clothes"].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleFilter(category)}
                        style={{
                            marginRight: "10px",
                            padding: "8px 16px",
                            cursor: "pointer",
                            border: selectedCategory === category ? "2px solid #007BFF" : "2px solid gray",
                            backgroundColor: selectedCategory === category ? "#007BFF" : "white",
                            color: selectedCategory === category ? "white" : "black",
                            borderRadius: "4px",
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {filteredProducts.map((product, index) => (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "16px",
                            width: "150px",
                            textAlign: "center",
                        }}
                    >
                        <h4>{product.name}</h4>
                        <p>{product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Question8
