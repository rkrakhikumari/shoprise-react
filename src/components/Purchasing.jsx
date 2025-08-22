import React, { useState } from "react";
import PurchasingTab from "./PurchasingTab";
import OffersTab from "./OffersTab";
import FollowingTab from "./FollowingTab";
import searchImg from "../assets/search.png";

const Purchasing = () => {
  const [activeTab, setActiveTab] = useState("Purchasing");
  const [searchTerm, setSearchTerm] = useState(""); // controlled input state

  return (
    <div className="w-full">
      {/* Tabs and Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-3">
        {/* Tabs */}
        <nav aria-label="Purchasing tabs" className="flex gap-4 text-sm sm:text-base whitespace-nowrap overflow-x-auto">
          {["Purchasing", "Offers", "Following"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 font-medium transition-colors duration-200 cursor-pointer ${
                activeTab === tab
                  ? "text-[#2563EB] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#2563EB]"
                  : "text-[#333333]"
              }`}
              aria-current={activeTab === tab ? "page" : undefined}
              type="button"
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Search Bar */}
        <form
          className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-auto max-w-full"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          aria-label="Search purchasing items"
        >
          <div className="px-3 text-gray-500" aria-hidden="true">
            <img src={searchImg} alt="" />
          </div>
          <input
            type="search"
            className="px-2 py-2.5 text-sm outline-none flex-grow min-w-0"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search items"
          />
          <button
            type="submit"
            className="bg-[#FF7F50] text-white px-4 py-2.5 text-sm rounded-full cursor-pointer"
            aria-label="Search"
          >
            Search
          </button>
        </form>
      </div>

      {/* Tab Content */}
      {activeTab === "Purchasing" && <PurchasingTab />}
      {activeTab === "Offers" && <OffersTab />}
      {activeTab === "Following" && <FollowingTab />}
    </div>
  );
};

export default Purchasing;
