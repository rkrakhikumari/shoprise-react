import React from "react";
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from "lucide-react"; 
import locationImg from "../assets/location.png";
import prodImg from "../assets/prod.png";
import searchImg from "../assets/search.png"; 

const products = Array(36).fill({
  title: "Liter trolley sprayer",
  price: "$9.99",
  condition: "Used",
  location: "Los Angeles, CA",
  image: "https://via.placeholder.com/200x150.png?text=Sprayer",
});

const ProductGrid = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Bottom Row */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-b border-t border-[#D3D3D3]">
        {/* Left: Filters */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm mb-3 md:mb-0">
          <button className="flex items-center gap-2 text-black">
            <Menu size={18} />
            Categories
            <ChevronDown size={14} />
          </button>
          <span className="h-6 w-px bg-gray-400 hidden md:inline-block" />
          <a href="#" className="hover:text-black">For you</a>
          <a href="#" className="hover:text-black">Local</a>
          <a href="#" className="hover:text-black">Selling</a>
          <a href="#" className="hover:text-black">Buying</a>
          <button className="flex items-center gap-1 text-black">
            More
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Right: Search */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-auto max-w-full">
          <div className="px-3 text-gray-500">
            <img src={searchImg} alt="search" />
          </div>
          <input
            type="text"
            className="px-2 py-2.5 text-sm outline-none flex-grow min-w-0"
          />
          <button className="bg-[#FF7F50] text-white px-4 py-2.5 text-sm rounded-full">
            Search
          </button>
        </div>
      </div>

      {/* Top Filters */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8 py-4 border- border-[#D3D3D3]">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <div className="flex items-center">
            <span className="text-sm text-[#333333]">Sort by:</span>
            <select className="border border-[#D3D3D3] rounded px-3 py-2 ml-3 text-[#333333]">
              <option>Less viewed</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <img src={locationImg} alt="location" className="w-4 h-4" />
          <select className="text-[#1F3A93] text-sm bg-transparent border-none outline-none cursor-pointer">
            <option>Los Angeles,CA - 10 miles</option>
            <option>New York, NY - 15 miles</option>
            <option>Chicago, IL - 20 miles</option>
          </select>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-between items-center gap-3 px-4 sm:px-6 md:px-8 py-2">
        <div className="flex gap-3 flex-wrap">
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
              key={idx}
              className="border border-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-100 flex items-center gap-1"
            >
              {cat}
              <span className="text-[#000000]">×</span>
            </button>
          ))}
        </div>
        <button className="text-[#FF7F50] text-sm font-medium whitespace-nowrap">
          Clear all categories
        </button>
      </div>

      {/* Products Grid */}
      <div className="px-4 sm:px-6 md:px-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-3">
            <img
              src={prodImg}
              alt={product.title}
              className="w-full h-40 object-cover rounded-2xl mb-2"
            />
            <h3 className="text-[#FF7F50] text-sm font-medium hover:underline cursor-pointer mb-1">
              <Link to="/product">{product.title}</Link>
            </h3>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-blue-600 text-sm font-semibold">{product.price}</span>
              <span className="text-[#333333] text-xs">({product.condition})</span>
            </div>
            <p className="text-[#333333] text-xs">{product.location}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 px-4 sm:px-6 md:px-8 py-6">
        <button className="px-3 py-1 hover:bg-gray-100">&lt;</button>
        <button className="px-3 py-1 bg-[#D3D3D3]">1</button>
        <button className="px-3 py-1 hover:bg-gray-100">2</button>
        <button className="px-3 py-1 hover:bg-gray-100">3</button>
        <span className="px-2">...</span>
        <button className="px-3 py-1 hover:bg-gray-100">9</button>
        <button className="px-3 py-1">&gt;</button>
      </div>
    </div>
  );
};

export default ProductGrid;
