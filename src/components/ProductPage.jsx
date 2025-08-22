import React, { useState } from 'react';
import { Link } from "react-router-dom";

import prodImg from "../assets/product.png";
import locImg from "../assets/loc.png";
import jeniImg from "../assets/jeni.png";
import clockImg from "../assets/clock.png";
import locationImg from "../assets/location.png";
import heartImg from "../assets/heart.png";

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

export default function ProductPage() {
  const [showOfferForm, setShowOfferForm] = useState(false);
  const [offerPrice, setOfferPrice] = useState('');
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [messageText, setMessageText] = useState('Hello, is this article still available?');
  
  // Dynamically calculate total for offer form
  const offerTotal = offerPrice ? (parseFloat(offerPrice) + product.deliveryFee).toFixed(2) : '20.96';
  const totalPrice = (product.price + product.deliveryFee).toFixed(2);

  const handleOfferSubmit = () => {
    if (offerPrice) {
      alert(`Offer submitted: $${offerPrice}`);
    }
  };

  const handleCancelOffer = () => {
    setShowOfferForm(false);
    setOfferPrice('');
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-t border-b border-gray-300 text-gray-800 flex items-center gap-1 py-2 text-lg pt-4 pb-4 pl-7">
        <Link
        to="/"
        className="text-gray-800 cursor-pointer"
        role="link"
        aria-label="Go to all listings"
      >
        All listing
      </Link>
        <div className="select-none text-gray-800 pl-2 pr-2">{'>'}</div>
        <div className="text-blue-800 font-medium cursor-pointer">Products</div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-5 font-sans px-4 lg:px-8 pt-8">
        {/* Left: Images */}
        <div className="flex-1">
          <img 
            src={prodImg} 
            alt={`Selected product: ${product.title}`} 
            className="w-full rounded" 
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`p-0 bg-transparent rounded-lg cursor-pointer ${
                  selectedImage === img ? 'border border-orange-500' : 'border border-gray-300'
                }`}
                style={{
                  border: selectedImage === img ? '1px solid orange' : '1px solid #ccc',
                }}
                aria-label={`Select product image ${i + 1}`}
              >
                <img
                  src={img}
                  alt={`Product thumbnail ${i + 1}`}
                  className="w-full h-20 object-cover rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Middle: Details */}
        <div className="flex-1 lg:flex-grow">
          <div className="text-gray-800 text-lg">{product.category}</div>
          <h2 className="text-orange-400 mt-0 text-2xl">{product.title}</h2>
          <p className="text-sm text-gray-800 mt-0">Description</p>
          <p className="text-xs text-gray-800">{product.description}</p>
          
          <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
            <span className="flex items-center gap-1">
              <img src={clockImg} alt="Posted time" className="w-3.5 h-3.5" />
              {product.timeAgo}
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1">
              <img src={locationImg} alt="Location icon" className="w-3.5 h-3.5" />
              {product.location}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-800">
            <img src={heartImg} alt="Add to favorites icon" className="w-4 h-4" />
            <span>Add to favorites</span>
          </div>

          <h3 className="text-blue-800 mt-2 text-xl">
            ${product.price.toFixed(2)} 
            <span className="text-base text-gray-800 ml-2">({product.condition})</span>
          </h3>

          {/* Map Image */}
          <div className="mt-5">
            <img
              src={locImg}
              alt="Map showing seller's location"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Seller info */}
          <div className="mt-5">
            <div className="font-semibold mb-2">Seller</div>
            <div className="flex justify-start items-start gap-10 flex-wrap">
              <div className="flex gap-3 items-center">
                <img
                  src={product.seller.avatar}
                  alt={`Avatar of ${product.seller.name}`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium">{product.seller.name}</div>
                  <div className="text-xs text-gray-500">Join {product.seller.joinDate}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm text-orange-500 flex items-center gap-1">
                  <span>{'★'.repeat(product.seller.rating)}</span>
                  <span className="text-xs text-gray-800">({product.seller.reviewsCount})</span>
                </div>
                <button className="bg-blue-800 text-white border-none px-5 py-1.5 rounded-full text-sm cursor-pointer mt-1.5 min-w-20">
                  Follow
                </button>
              </div>
            </div>
          </div>

          {/* Message seller */}
          <div className="mt-5 pb-5">
            <label htmlFor="message" className="text-sm font-medium">Send a message to the seller</label>
            <div className="flex items-center mt-2 border border-gray-300 rounded-full bg-white overflow-hidden max-w-md">
              <input
                id="message"
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Hello, is this article still available?"
                className="flex-1 border-none outline-none text-sm px-3 py-2"
                aria-label="Message input"
              />
              <button className="bg-blue-800 text-white border-none rounded-full px-6 py-2 text-sm cursor-pointer">
                Send
              </button>
            </div>
          </div>
        </div>
        
        {/* Right: Checkout or Make Offer */}
        <div className="w-full lg:w-80 border border-gray-300 rounded-lg p-5 h-fit text-sm flex flex-col justify-between mt-5 lg:mt-0">
          {!showOfferForm ? (
            // Checkout View
            <div>
              <h3 className="text-center mb-5 text-gray-800 font-bold text-xl">Checkout</h3>

              <div className="flex justify-between mb-1">
                <span>Price</span>
                <span className="text-blue-800">${product.price.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Delivery fee</span>
                <span className="text-blue-800">${product.deliveryFee.toFixed(2)}</span>
              </div>

              <hr className="border-t-2 border-dotted border-gray-400 my-4" />

              <div className="flex justify-end font-bold text-lg text-gray-800">
                <span>${totalPrice}</span>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 border border-orange-400 bg-white text-orange-400 py-2.5 rounded-full cursor-pointer font-medium text-sm">
                  Buy now
                </button>

                <button
                  className="flex-1 border-none bg-gray-500 text-white py-2.5 rounded-full cursor-pointer font-medium text-sm"
                  onClick={() => setShowOfferForm(true)}
                >
                  Make offer
                </button>
              </div>

              <button className="mt-2 w-full bg-blue-800 text-white border-none py-3 rounded-full cursor-pointer font-medium text-sm">
                Paypal checkout
              </button>

              <small className="mt-5 text-gray-800 text-xs leading-relaxed px-3 text-center block">
                By continuing to checkout, you agree to the{' '}
                <a href="#" className="text-blue-800 underline">Privacy Policy</a>{' '}
                and{' '}
                <a href="#" className="text-blue-800 underline">Terms of Service</a>.
              </small>
            </div>
          ) : (
            // Make Offer View
            <div>
              <h3 className="text-center mb-5 text-gray-800 font-bold text-xl">Make offer</h3>

              <label className="italic">Enter your offer</label>
              <input
                type="number"
                placeholder="$7.46"
                value={offerPrice}
                onChange={(e) => setOfferPrice(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded placeholder-black mb-5 mt-1"
              />
              <div className="flex justify-between mb-2 text-lg">
                <span>Delivery fee</span>
                <span className="text-blue-800 font-medium text-base">${product.deliveryFee.toFixed(2)}</span>
              </div>

              <hr className="border-t border-dashed border-gray-300 my-4" />

              <div className="flex justify-end text-xl font-bold text-gray-800 mb-2">
                ${offerTotal}
              </div>
              <div className="flex flex-col gap-2">
                {/* Make Offer Button */}
                <button
                  className="h-11 bg-blue-800 text-white border-none rounded-full text-base font-medium cursor-pointer flex justify-center items-center mt-2"
                  onClick={handleOfferSubmit}
                >
                  Make offer
                </button>

                {/* Cancel Button */}
                <button
                  className="h-11 bg-gray-400 text-white border-none rounded-full text-base font-medium cursor-pointer flex justify-center items-center"
                  onClick={handleCancelOffer}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}