import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arrowImg from "../assets/arrow.png";
import prodImg from "../assets/product.png";
import jeniImg from "../assets/jeni.png";
import clockImg from "../assets/clock.png";
import locationImg from "../assets/location.png";
import heartImg from "../assets/heart.png";
import locImg from "../assets/sale_loc.png";
import AddImg from "../assets/add-image.png";

const product = {
  title: 'Trolley sprayer',
  category: 'Farming Tools & Machinery',
  description: 'Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added. We ship nationwide.',
  price: 9.99,
  deliveryFee: 13.50,
  location: 'Los Angeles, CA',
  timeAgo: '3 hours ago',
  condition: 'Used like new',
  images: [prodImg, prodImg, prodImg, prodImg],
  seller: {
    name: 'Jennifer Garnet',
    joinDate: 'Oct 2023',
    rating: 5,
    reviewsCount: 10,
    avatar: jeniImg,
  }
};

const ItemForm = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="pt-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-6 text-[#333] flex items-center gap-2 cursor-pointer"
        aria-label="Go back"
      >
        <img src={arrowImg} alt="Back arrow icon" className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
        <span className='text-[#1F3A93] font-medium'>Back</span>
      </button>

      <div className="flex flex-col md:flex-row gap-4 pt-4">
        {/* Left: Form */}
        <div className="flex-1 w-full md:max-w-[450px]">
          <div className="bg-white rounded-lg p-4 border border-[#D3D3D3]">
            <h2 className="font-semibold text-xl sm:text-2xl text-[#1F3A93] mb-1">Item for sale</h2>

            <p className="text-base text-[#1F3A93] font-semibold">
              Informations <span className="text-[#333333] text-xs font-medium">(Mandatory)</span>
            </p>
            <p className="text-xs text-[#333333] mb-2">Give as much detail as possible</p>

            <div className="mb-2">
              <label className="text-sm font-semibold" htmlFor="category-select">Category</label>
              <select
                id="category-select"
                className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm cursor-pointer"
                aria-required="true"
                defaultValue="Home & Garden"
              >
                <option>Home & Garden</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold" htmlFor="subcategory-select">Subcategory</label>
              <select
                id="subcategory-select"
                className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm cursor-pointer"
                aria-required="true"
                defaultValue="Tools"
              >
                <option>Tools</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold" htmlFor="title-input">Title</label>
              <input
                id="title-input"
                className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm"
                value={product.title}
                readOnly
                aria-readonly="true"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold" htmlFor="description-textarea">Description</label>
              <textarea
                id="description-textarea"
                className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm"
                rows={4}
                value={product.description}
                readOnly
                aria-readonly="true"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold block mb-1" htmlFor="photo-upload">
                Photos (0/10). <span className='text-xs font-medium'>You can add up to 10 photos.</span>
              </label>
              <button
                type="button"
                id="photo-upload"
                className="w-full h-28 sm:h-32 flex flex-col items-center justify-center border border-[#D3D3D3] rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Add photos by clicking or dragging and dropping"
                onClick={() => {
                  // Add photo handler placeholder
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Add photo handler placeholder
                  }
                }}
              >
                <img src={AddImg} alt="" className="w-6 h-6 sm:w-8 sm:h-8 mb-2" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-[#333333] font-medium">Add photos</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Or drag and drop</p>
              </button>
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold" htmlFor="price-input">Prices</label>
              <input
                id="price-input"
                className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm"
                value={product.price}
                readOnly
                aria-readonly="true"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold" htmlFor="condition-input">Condition</label>
              <input
                id="condition-input"
                className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm"
                value={product.condition}
                readOnly
                aria-readonly="true"
              />
            </div>
          </div>
        </div>

        {/* Middle: Image */}
        <div className="flex-1 w-full md:max-w-[350px] mt-4 md:mt-0">
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full max-h-[300px] sm:max-h-[400px] object-cover rounded"
          />
          <div className="grid grid-cols-4 gap-2 mt-2">
            {product.images.map((img, i) => (
              <button
                key={`${img}-${i}`}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`w-full h-16 sm:h-20 rounded cursor-pointer border focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  selectedImage === img ? 'border-2 border-orange-500' : 'border-gray-300'
                }`}
                aria-label={`Select thumbnail ${i + 1}`}
              >
                <span
                  className="block w-full h-full rounded"
                  style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  aria-hidden="true"
                />
                <span className="sr-only">{`Thumbnail ${i + 1}`}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 w-full mt-4 md:mt-0">
          <div className="text-[#333333] text-sm sm:text-base font-semibold">{product.category}</div>
          <h2 className="text-xl sm:text-2xl text-[#FF7F50] font-bold">{product.title}</h2>
          <p className="text-xs sm:text-sm text-[#333333] mt-2 font-semibold">Description</p>
          <p className="text-xs sm:text-sm text-[#333333]">{product.description}</p>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 mt-4">
            <span className="flex items-center gap-1">
              <img src={clockImg} alt="" className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              {product.timeAgo}
            </span>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <span className="flex items-center gap-1">
              <img src={locationImg} alt="" className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
              {product.location}
            </span>
          </div>

          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-[#333] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#1F3A93] rounded"
            aria-label="Add to favorites"
            onClick={() => {
              // placeholder for favorite logic
            }}
          >
            <img src={heartImg} alt="" className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
            Add to favorites
          </button>

          <h3 className="text-[#1F3A93] text-lg sm:text-xl mt-3 font-bold">
            ${product.price.toFixed(2)}{' '}
            <span className="text-xs sm:text-sm text-[#333] font-normal">
              ({product.condition})
            </span>
          </h3>

          <div className="mt-5">
            <img src={locImg} alt="Map showing product location" className="w-full h-full object-cover rounded" />
          </div>

          <div className="mt-5">
            <div className="font-semibold mb-2 text-sm sm:text-base">Seller</div>
            <div className="flex items-start gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <img
                  src={product.seller.avatar}
                  alt={`Seller avatar of ${product.seller.name}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <div className="font-medium text-sm sm:text-base">{product.seller.name}</div>
                  <div className="text-xs text-gray-500">Join {product.seller.joinDate}</div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div
                  className="text-orange-500 text-xs sm:text-sm flex items-center gap-1"
                  aria-label={`Seller rating ${product.seller.rating} stars`}
                >
                  {'★'.repeat(product.seller.rating)}
                  <span className="text-[#333]">({product.seller.reviewsCount})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Box */}
          <div className="mt-5 pb-5 w-full max-w-md opacity-90 pointer-events-none select-none">
            <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-400">
              Send a message to the seller
            </label>
            <div className="flex items-center mt-2 border border-[#D3D3D3] rounded-full overflow-hidden bg-white">
              <input
                id="message"
                type="text"
                placeholder="Hello, is this article still available?"
                className="flex-1 px-3 py-2 text-xs sm:text-sm text-gray-400 bg-white outline-none"
                disabled
                aria-disabled="true"
              />
              <button
                type="button"
                className="bg-[#1F3A93] text-white px-4 py-2 text-xs sm:text-sm rounded-full opacity-40 cursor-not-allowed"
                disabled
                aria-disabled="true"
                aria-label="Send message (disabled)"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;
