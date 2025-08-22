import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productImg from '../assets/favImg.png';
import searchImg from '../assets/search.png';

const products = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  title: 'Liter trolley sprayer',
  price: '$9.99',
  condition: 'Used',
  location: 'Los Angeles, CA',
}));

const Favourites = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-[#1F3A93]">Favourites</h2>

        <form
          className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-auto max-w-full"
          role="search"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Search products"
        >
          <div className="px-3 text-gray-500 pointer-events-none">
            <img src={searchImg} alt="" aria-hidden="true" />
          </div>
          <input
            type="search"
            className="px-2 py-2.5 text-sm outline-none flex-grow min-w-0"
            aria-label="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-[#FF7F50] text-white px-4 py-2.5 text-sm rounded-full cursor-pointer"
            aria-label="Search"
          >
            Search
          </button>
          <div className="w-px h-6 bg-[#D3D3D3]" aria-hidden="true"></div>
        </form>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {filteredProducts.map(({ id, title, price, condition, location }) => (
          <Link
            key={id}
            to="/product"
            className="border border-gray-200 rounded-xl p-3 text-center hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF7F50] cursor-pointer"
            aria-label={`View details for ${title}`}
            tabIndex={0}
          >
            <img
              src={productImg}
              alt={title}
              className="w-full h-[150px] object-cover rounded-xl mb-3"
            />
            <h3 className="text-[#FF7F50] text-sm font-semibold hover:underline mb-1">
              {title}
            </h3>
            <div className="text-sm text-blue-600 font-semibold mb-1">
              {price}{' '}
              <span className="text-gray-500 text-xs">({condition})</span>
            </div>
            <p className="text-gray-500 text-xs">{location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
