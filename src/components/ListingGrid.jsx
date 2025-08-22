import React, { useState } from "react";
import productImg from "../assets/product.png";

// Generate listings with unique IDs to avoid shared references and unstable keys
const listings = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: "Liter trolley sprayer",
  description:
    "Cart sprayer NEW 120 liters 4 stroke With reel Hose 50m 40Bar Pistol Pneumatic wheels 13% VAT added . We ship nationwide.",
  price: "$9.99",
  condition: "(Used)",
  listedDate: "06/19/2021",
  clicks: 0,
}));

const ListingCard = ({ listing }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const handleEdit = () => alert("Edit clicked");
  const handleDelete = () => alert("Delete clicked");
  const handleViewOrders = (e) => {
    e.preventDefault();
    alert(`View orders for ${listing.title}`);
  };

  return (
    <div
      className="relative flex border border-[#D3D3D3] rounded-xl p-3 bg-white w-full max-w-full items-start gap-4 sm:gap-6 flex-wrap sm:flex-nowrap"
      tabIndex={0}
      role="group"
      aria-label={`Listing: ${listing.title}`}
    >
      {/* Image */}
      <img
        src={productImg}
        alt={`Product image for ${listing.title}`}
        className="w-28 h-28 sm:w-44 sm:h-44 rounded-md object-cover shrink-0"
      />

      {/* Content */}
      <div className="flex flex-col justify-start text-left flex-1 min-w-0">
        <h3 className="text-[#FF7F50] text-base sm:text-lg font-semibold mb-1 sm:mb-2 truncate">
          {listing.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 leading-snug mb-1 sm:mb-2 max-w-full">
          {listing.description}
        </p>
        <p className="text-sm sm:text-lg font-semibold text-blue-800 mb-1 truncate">
          {listing.price}{" "}
          <span className="text-gray-600 font-normal">{listing.condition}</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-700 mb-1 truncate">
          Listed on {listing.listedDate} •{" "}
          <span
            className="text-[#1F3A93] font-semibold"
            aria-label="Clicks on listing"
          >
            {listing.clicks} clicks on listing
          </span>
        </p>
        <button
          onClick={handleViewOrders}
          className="text-[#1F3A93] underline text-sm sm:text-md truncate bg-transparent border-none p-0 cursor-pointer"
          aria-label={`View orders for listing ${listing.title}`}
          type="button"
        >
          View orders
        </button>
      </div>

      {/* Ellipsis Button */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={toggleMenu}
          className="bg-gray-200 text-[#1F3A93] px-2 py-1 rounded-md text-base sm:text-lg hover:bg-[#D3D3D3] cursor-pointer"
          aria-haspopup="true"
          aria-expanded={showMenu}
          aria-label="More options for this listing"
          type="button"
        >
          <span aria-hidden="true">⋯</span>
        </button>

        {showMenu && (
          <div
            className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-20 min-w-[100px]"
            role="menu"
            aria-label="Listing options"
          >
            <button
              onClick={handleEdit}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              role="menuitem"
              type="button"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
              role="menuitem"
              type="button"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ListingGrid = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingGrid;
