import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arrowImg from "../assets/arrow.png";
import prodImg from "../assets/house.png";
import jeniImg from "../assets/jeni.png";
import clockImg from "../assets/clock.png"; 
import locationImg from "../assets/location.png"; 
import heartImg from "../assets/heart.png"; 
import locImg from "../assets/sale_loc.png"; 
import AddImg from "../assets/add-image.png"

const product = {
  title: '5 rooms-3 bathroom',
  category: 'House for rent',
  description: 'This meticulously crafted residence offers luxurious comfort and an unparalleled lifestyle. Type  of laundry- Type of packing- Type or air conditioning- Type of heating',
  price: 9.99,
  deliveryFee: 13.50,
  location: 'Los Angeles, CA',
  timeAgo: '3 hours ago',
  condition: 'Used like new',
  year : '2015',
  brand :'Toyota',
  model: 'Camry',
  images: [prodImg, prodImg, prodImg, prodImg],
  seller: {
    name: 'Jennifer Garnet',
    joinDate: 'Oct 2023',
    rating: 5,
    reviewsCount: 10,
    avatar: jeniImg,
  }
};

const VehicleAdForm = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="pt-3 px-4 md:px-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-[#333] flex items-center gap-2"
      >
        <img src={arrowImg} alt="Back" className="w-4 h-4 md:w-5 md:h-5" />
        <span className='text-[#1F3A93] font-medium text-sm md:text-base'>Back</span>
      </button>

      <div className="flex flex-col lg:flex-row gap-6 pt-7">
        {/* Left: Form */}
        <div className="flex-1 w-full max-w-full lg:max-w-[450px]">
          <div className="bg-white rounded-lg p-4 border border-[#D3D3D3]">
            <h2 className="font-semibold text-xl md:text-2xl text-[#1F3A93] mb-1">New real estate ad</h2>

            <p className="text-lg text-[#1F3A93] font-semibold">About this estate <span className="text-[#333333] text-sm font-medium">(Mandatory)</span></p>
            <p className="text-sm text-[#333333] mb-2">Give as much detail as possible</p>

            <div className="mb-4">
              <label className="text-md font-semibold block mb-1">Photos (0/10). <span className='text-sm font-medium'> You can add up to 10 photos.</span> </label>
              <div className="w-full h-32 flex flex-col items-center justify-center border border-[#D3D3D3] rounded">
                <img src={AddImg} alt="Add" className="w-8 h-8 mb-2" />
                <p className="text-sm text-[#333333] font-medium">Add photos</p>
                <p className="text-xs text-gray-500">Or drag and drop</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-4">
                <label className="text-md font-semibold">Type</label>
                <select className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded">
                  <option value="text">House</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="text-md font-semibold">For sale or rent</label>
                <select className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded">
                  <option value="text">For rent</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="text-md font-semibold">Number of room</label>
                <input
                  type="text"
                  className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded"
                  value={5}
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label className="text-md font-semibold">Number of bathroom</label>
                <input
                  type="text"
                  className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded"
                  value={3}
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label className="text-md font-semibold">Description</label>
                <textarea
                  className="w-full border border-[#D3D3D3] px-3 py-2 mt-1 rounded text-sm resize-none"
                  rows={3}
                  value={
                    "This meticulously crafted residence offers luxurious comfort and an unparalleled lifestyle."
                  }
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label className="text-md font-semibold">Prices</label>
                <input
                  type="text"
                  className="w-full border border-[#D3D3D3] px-2 py-1 mt-1 rounded"
                  value={product.price}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Image */}
        <div className="flex-1 w-full max-w-full lg:max-w-[350px]">
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full h-auto rounded object-cover max-h-[300px] md:max-h-[400px]"
          />
          <div className="grid grid-cols-4 gap-2 mt-2">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className={`w-full h-20 object-cover rounded cursor-pointer border ${i === 0 ? 'border-2 border-orange-500' : 'border-gray-300'}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 w-full">
          <div className="text-[#333333] text-lg font-semibold">{product.category}</div>
          <h2 className="text-2xl text-[#FF7F50] font-bold">{product.title}</h2>
          <p className="text-sm text-[#333333] mt-2 font-semibold">Description</p>
          <p className="text-sm text-[#333333]">{product.description}</p>

          <div className="flex items-center flex-wrap gap-4 text-sm text-gray-500 mt-4">
            <span className="flex items-center gap-1">
              <img src={clockImg} alt="Clock" className="w-4 h-4" />
              {product.timeAgo}
            </span>
            <span className="text-gray-300 hidden sm:block">|</span>
            <span className="flex items-center gap-1">
              <img src={locationImg} alt="Location" className="w-4 h-4" />
              {product.location}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2 text-sm text-[#333]">
            <img src={heartImg} alt="heart" className="w-6 h-6" />
            Add to favorites
          </div>

          <h3 className="text-[#1F3A93] text-xl mt-3 font-bold">
            ${product.price.toFixed(2)}{' '}
            <span className="text-sm text-[#333] font-normal">
              ({product.condition})
            </span>
          </h3>

          <div className="mt-5">
            <img src={locImg} alt="Map" className="w-full h-auto object-cover rounded" />
          </div>

          <div className="mt-5">
            <div className="font-semibold mb-2">Seller</div>
            <div className="flex items-top justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium">{product.seller.name}</div>
                  <div className="text-sm text-gray-500">Join {product.seller.joinDate}</div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-orange-500 text-sm flex items-center gap-1">
                  {'★'.repeat(product.seller.rating)}
                  <span className="text-sm text-[#333]">({product.seller.reviewsCount})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Box */}
          <div className="mt-5 pb-5 max-w-md opacity-90 pointer-events-none select-none">
            <label htmlFor="message" className="text-sm font-medium text-gray-400">
              Send a message to the seller
            </label>
            <div className="flex items-center mt-2 border border-[#D3D3D3] rounded-full overflow-hidden bg-white">
              <input
                id="message"
                type="text"
                placeholder="Hello, is this article still available?"
                className="flex-1 px-3 py-2 text-sm text-gray-400 bg-white outline-none"
                disabled
              />
              <button
                className="bg-[#1F3A93] text-white px-4 py-2 text-sm rounded-full opacity-40"
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

export default VehicleAdForm;
