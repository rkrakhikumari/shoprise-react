import React from 'react';
import { Link } from 'react-router-dom';
import productImg from '../assets/favImg.png';
import searchImg from '../assets/search.png';

const products = Array(15).fill({
  title: 'Liter trolley sprayer',
  price: '$9.99',
  condition: 'Used',
  location: 'Los Angeles, CA',
});

const Favourites = () => {
  return (
    <div className="p- w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-[#1F3A93]">Favourites</h2>

        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-auto max-w-full">
                  <div className="px-3 text-gray-500">
                    <img src={searchImg} alt="search" />
                  </div>
                  <input
                    type="text"
                    className="px-2 py-2.5 text-sm outline-none flex-grow min-w-0"
                  />
                  <button className="bg-[#FF7F50] text-white px-4 py-2.5 text-sm rounded-full ">
                    Search
                  </button>
                    <div className="w-px h-6 bg-[#D3D3D3]"></div>
        
        
                </div>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-3 text-center hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={productImg}
              alt={product.title}
              className="w-full h-[150px] object-cover rounded-xl mb-3"
            />
            <h3 className="text-[#FF7F50] text-sm font-semibold hover:underline mb-1">
              <Link to="/product">{product.title}</Link>
            </h3>
            <div className="text-sm text-blue-600 font-semibold mb-1">
              {product.price} <span className="text-gray-500 text-xs">({product.condition})</span>
            </div>
            <p className="text-gray-500 text-xs">{product.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
