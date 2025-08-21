import React, { useState } from "react";
import PurchasingTab from "./PurchasingTab";
import OffersTab from "./OffersTab";
import FollowingTab from "./FollowingTab";
import searchImg from "../assets/search.png";

const Purchasing = () => {
  const [activeTab, setActiveTab] = useState("Purchasing");

  return (
    <div className="w-full">
      {/* Tabs and Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-3">
        {/* Tabs */}
        <div className="flex gap-4 text-sm sm:text-base whitespace-nowrap overflow-x-auto">
          {["Purchasing", "Offers", "Following"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? "text-[#2563EB] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#2563EB]"
                  : "text-[#333333]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
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

      {/* Tab Content */}
      {activeTab === "Purchasing" && <PurchasingTab />}
      {activeTab === "Offers" && <OffersTab />}
      {activeTab === "Following" && <FollowingTab />}
    </div>
  );
};

export default Purchasing;
