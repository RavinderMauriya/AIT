// useRef only highlight

import React, { useState, useRef, useEffect } from "react";

const products = [
  { id: 1, name: "iPhone 15" },
  { id: 2, name: "Samsung Galaxy S23" },
  { id: 3, name: "OnePlus 12" },
  { id: 4, name: "MacBook Air M2" },
  { id: 5, name: "Dell XPS 13" },
  { id: 6, name: "HP Pavilion" },
  { id: 7, name: "Sony Headphones" },
  { id: 8, name: "Boat Earbuds" },
  { id: 9, name: "Apple Watch" },
  { id: 10, name: "iPad Pro" }
];

const SearchScroll = () => {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(null);
  const containerRef = useRef(null);

  // filter products
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  // scroll to first match
  useEffect(() => {
    if (!query || filtered.length === 0) return;

    const firstMatch = filtered[0];
    setActiveId(firstMatch.id);

    const element = containerRef.current.querySelector(
      `#product-${firstMatch.id}`
    );

    element?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, [query]);

  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      {/* Product List */}
      <div
        ref={containerRef}
        className="space-y-3 max-h-75 overflow-y-auto"
      >
        {products.map(product => (
          <div
            key={product.id}
            id={`product-${product.id}`}
            className={`p-4 border rounded transition
              ${activeId === product.id
                ? "bg-yellow-100 border-yellow-400"
                : "hover:bg-gray-50"
              }`}
          >
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchScroll;