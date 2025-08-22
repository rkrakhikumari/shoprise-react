import React from "react";
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from "lucide-react"; 
import locationImg from "../assets/location.png";
import prodImg from "../assets/prod.png";
import searchImg from "../assets/search.png"; 

const products = Array.from({ length: 36 }).map((_, i) => ({
  id: i + 1, 
  title: "Liter trolley sprayer",
  price: "$9.99",
  condition: "Used",
  location: "Los Angeles, CA",
  image: "https://via.placeholder.com/200x150.png?text=Sprayer",
}));

const ProductGrid = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Bottom Row */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-b border-t border-[#D3D3D3]">
        {/* Left: Filters */}
        <nav aria-label="Category filters" className="flex flex-wrap items-center gap-4 md:gap-6 text-sm mb-3 md:mb-0">
          <button
            type="button"
            className="flex items-center gap-2 text-black cursor-pointer"
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="categories-menu"
          >
            <Menu size={18} aria-hidden="true" focusable="false" />
            Categories
            <ChevronDown size={14} aria-hidden="true" focusable="false" />
          </button>
          <span className="h-6 w-px bg-gray-400 hidden md:inline-block" aria-hidden="true" />
          {/* Changed anchors with href="#" to buttons to prevent page jumps */}
          <button type="button" className="hover:text-black text-inherit cursor-pointer">For you</button>
          <button type="button" className="hover:text-black text-inherit cursor-pointer">Local</button>
          <button type="button" className="hover:text-black text-inherit cursor-pointer">Selling</button>
          <button type="button" className="hover:text-black text-inherit cursor-pointer">Buying</button>
          <button type="button" className="flex items-center gap-1 text-black cursor-pointer" aria-haspopup="true" aria-expanded="false" aria-controls="more-menu">
            More
            <ChevronDown size={14} aria-hidden="true" focusable="false" />
          </button>
        </nav>

        {/* Right: Search */}
        <form
          role="search"
          className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-auto max-w-full"
          onSubmit={(e) => e.preventDefault()} 
          aria-label="Search products"
        >
          <div className="px-3 text-gray-500">
            <img src={searchImg} alt="Search icon" />
          </div>
          <input
            type="search"
            aria-label="Search products"
            className="px-2 py-2.5 text-sm outline-none flex-grow min-w-0"
            readOnly
          />
          <button
            type="submit"
            className="bg-[#FF7F50] text-white px-4 py-2.5 text-sm rounded-full cursor-pointer"
            aria-label="Submit search"
          >
            Search
          </button>
        </form>
      </div>

      {/* Top Filters */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8 py-4 border border-[#D3D3D3]">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <label htmlFor="sort-by" className="text-sm text-[#333333] cursor-pointer">
            Sort by:
          </label>
          <select
            id="sort-by"
            className="border border-[#D3D3D3] rounded px-3 py-2 text-[#333333]"
            aria-label="Sort products"
            defaultValue="Less viewed"
          >
            <option>Less viewed</option>
          </select>
        </div>
        <div className="flex items-center gap-1">
          <img src={locationImg} alt="Location icon" className="w-4 h-4" aria-hidden="true" />
          <select
            aria-label="Select location"
            className="text-[#1F3A93] text-sm bg-transparent border-none outline-none cursor-pointer"
            defaultValue="Los Angeles,CA - 10 miles"
          >
            <option>Los Angeles,CA - 10 miles</option>
            <option>New York, NY - 15 miles</option>
            <option>Chicago, IL - 20 miles</option>
          </select>
        </div>
      </div>

      {/* Category Filters */}
      <section aria-label="Category filter buttons" className="flex flex-wrap justify-between items-center gap-3 px-4 sm:px-6 md:px-8 py-2">
        <div className="flex gap-3 flex-wrap" role="list">
          {[
            "Arts & Crafts",
            "Antiques & Collectibles",
            "Auto Parts",
            "Books, Movies & Music",
            "Electronics",
            "Furniture",
            "Home Improvement & Tools",
          ].map((cat, idx) => (
            <button
              key={cat} 
              type="button"
              className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-100 flex items-center gap-1 cursor-pointer"
              aria-label={`Remove category filter ${cat}`}
            >
              <span>{cat}</span>
              <span aria-hidden="true" className="text-[#000000]">×</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="text-[#FF7F50] text-sm font-medium whitespace-nowrap cursor-pointer"
          aria-label="Clear all categories"
        >
          Clear all categories
        </button>
      </section>

      {/* Products Grid */}
      <section
        aria-label="Product listings"
        className="px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
      >
        {products.map((product) => (
          <article
            key={product.id}
            tabIndex={0}
            className="border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FF7F50]"
            aria-label={`${product.title}, ${product.price}, condition ${product.condition}, located in ${product.location}`}
          >
            <Link
              to="/product"
              className="block focus:outline-none focus:ring-2 focus:ring-[#FF7F50] rounded-2xl overflow-hidden mb-2"
              aria-label={`View details for ${product.title}`}
            >
              <img
                src={prodImg}
                alt={product.title}
                className="w-full h-40 object-cover rounded-2xl"
              />
            </Link>
            <h3 className="text-[#FF7F50] text-sm font-medium mb-1">
              <Link to="/product" className="hover:underline cursor-pointer">
                {product.title}
              </Link>
            </h3>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-blue-600 text-sm font-semibold">{product.price}</span>
              <span className="text-[#333333] text-xs">({product.condition})</span>
            </div>
            <p className="text-[#333333] text-xs">{product.location}</p>
          </article>
        ))}
      </section>

      {/* Pagination */}
      <nav
        aria-label="Pagination"
        className="flex justify-center items-center gap-2 px-4 sm:px-6 md:px-8 py-6"
      >
        <button type="button" className="px-3 py-1 hover:bg-gray-100 cursor-pointer" aria-label="Previous page">
          &lt;
        </button>
        <button
          type="button"
          className="px-3 py-1 bg-[#D3D3D3] cursor-default"
          aria-current="page"
          aria-label="Page 1"
        >
          1
        </button>
        <button type="button" className="px-3 py-1 hover:bg-gray-100 cursor-pointer" aria-label="Page 2">2</button>
        <button type="button" className="px-3 py-1 hover:bg-gray-100 cursor-pointer" aria-label="Page 3">3</button>
        <span className="px-2" aria-hidden="true">...</span>
        <button type="button" className="px-3 py-1 hover:bg-gray-100 cursor-pointer" aria-label="Page 9">9</button>
        <button type="button" className="px-3 py-1 hover:bg-gray-100 cursor-pointer" aria-label="Next page">
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default ProductGrid;
