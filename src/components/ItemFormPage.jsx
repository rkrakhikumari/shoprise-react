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
        onClick={() => navigate(-1)}
        className="mb-6 text-[#333] flex items-center gap-2"
      >
        <img src={arrowImg} alt="Back" className="w-3 h-3 sm:w-4 sm:h-4" />
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
              <label className="text-sm font-semibold">Category</label>
              <select className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm">
                <option>Home & Garden</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold">Subcategory</label>
              <select className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm">
                <option>Tools</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold">Title</label>
              <input className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm" value={product.title} />
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold">Description</label>
              <textarea
                className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm"
                rows={4}
                value={product.description}
              />
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold block mb-1">
                Photos (0/10). <span className='text-xs font-medium'>You can add up to 10 photos.</span>
              </label>
              <div className="w-full h-28 sm:h-32 flex flex-col items-center justify-center border border-[#D3D3D3] rounded">
                <img src={AddImg} alt="Add" className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                <p className="text-xs sm:text-sm text-[#333333] font-medium">Add photos</p>
                <p className="text-[10px] sm:text-xs text-gray-500">Or drag and drop</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold">Prices</label>
              <input className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm" value={product.price} />
            </div>

            <div className="mb-4">
              <label className="text-sm font-semibold">Condition</label>
              <input className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded text-xs sm:text-sm" value={product.condition} />
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
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className={`w-full h-16 sm:h-20 object-cover rounded cursor-pointer border ${i === 0 ? 'border-2 border-orange-500' : 'border-gray-300'}`}
                onClick={() => setSelectedImage(img)}
              />
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
              <img src={clockImg} alt="Clock" className="w-3 h-3 sm:w-4 sm:h-4" />
              {product.timeAgo}
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1">
              <img src={locationImg} alt="Location" className="w-3 h-3 sm:w-4 sm:h-4" />
              {product.location}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-[#333]">
            <img src={heartImg} alt="heart" className="w-6 h-6 sm:w-7 sm:h-7" />
            Add to favorites
          </div>

          <h3 className="text-[#1F3A93] text-lg sm:text-xl mt-3 font-bold">
            ${product.price.toFixed(2)}{' '}
            <span className="text-xs sm:text-sm text-[#333] font-normal">
              ({product.condition})
            </span>
          </h3>

          <div className="mt-5">
            <img src={locImg} alt="Map" className="w-full h-full object-cover rounded" />
          </div>

          <div className="mt-5">
            <div className="font-semibold mb-2 text-sm sm:text-base">Seller</div>
            <div className="flex items-start gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <div className="font-medium text-sm sm:text-base">{product.seller.name}</div>
                  <div className="text-xs text-gray-500">Join {product.seller.joinDate}</div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-orange-500 text-xs sm:text-sm flex items-center gap-1">
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
              />
              <button
                className="bg-[#1F3A93] text-white px-4 py-2 text-xs sm:text-sm rounded-full opacity-40"
                disabled
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
