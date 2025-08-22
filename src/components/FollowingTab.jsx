import React from "react";
import jeniImg from "../assets/jeni.png";

const sellers = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  name: "Jennifer Garnet",
  joinDate: "Jan 2023",
  rating: 5,
  reviewsCount: 10,
  listings: "9 listings"
}));

const FollowingTab = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {sellers.map((seller) => (
        <div
          key={seller.id}
          className="bg-[#D3D3D333] border border-[#D3D3D3] rounded-xl p-4 w-full max-w-full flex flex-col justify-between"
          tabIndex={0}
          aria-label={`Seller card for ${seller.name}`}
          role="region"
        >
          {/* Top Section */}
          <div className="flex justify-between gap-4 flex-wrap">
            {/* Avatar + Info */}
            <div className="flex items-center gap-3 min-w-[160px]">
              <img
                src={jeniImg}
                alt={`Avatar of ${seller.name}`}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-sm">{seller.name}</div>
                <div className="text-xs text-gray-500">Join {seller.joinDate}</div>
              </div>
            </div>

            {/* Stars + Unfollow */}
            <div className="flex flex-col items-end">
              <div
                className="flex items-center gap-1 text-[#FF7F50] text-base"
                aria-label={`${seller.rating} star rating`}
                role="img"
              >
                <span aria-hidden="true">{"★".repeat(seller.rating)}</span>
                <span className="text-xs text-[#333]">({seller.reviewsCount})</span>
              </div>
              <button
                className="bg-[#1F3A93] text-white text-xs px-4 py-1.5 rounded-full mt-2 min-w-[90px] focus:outline-none focus:ring-1 focus:ring-[#FF7F50] cursor-pointer"
                aria-label={`Unfollow ${seller.name}`}
                type="button"
              >
                Unfollow
              </button>
            </div>
          </div>

          {/* Bottom Section: Listings */}
          <div className="flex justify-between items-center pt-4 mt-auto">
            <p className="text-xs text-gray-500">{seller.listings}</p>
            <button
              className="text-[#2E4BFF] text-xs underline whitespace-nowrap cursor-pointer"
              type="button"
              aria-label={`View listings by ${seller.name}`}
            >
              View listing
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowingTab;
