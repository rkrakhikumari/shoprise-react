import React, { useState } from "react";
import productImg from "../assets/product.png";
import profileImg from "../assets/Profil.png";
import searchImg from "../assets/search.png";
import dateImg from "../assets/date.png";
import SalesOffers from "./SalesOffers";
import ListingGrid from "./ListingGrid";
import ChooseAdType from "./chooseAdType";
import arrowImg from "../assets/arrow.png";
import { useNavigate } from "react-router-dom";

const sampleOrders = [
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", fulfillment: "Delivered", status: "Completed", total: "$300" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", fulfillment: "Delivered", status: "Completed", total: "$300" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", fulfillment: "Packing", status: "Pending", total: "$300" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", fulfillment: "Refund", status: "Cancel", total: "$300" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", fulfillment: "Delivered", status: "Pending", total: "$300" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", fulfillment: "Delivered", status: "Completed", total: "$300" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", fulfillment: "Delivered", status: "Cancel", total: "$300" },
];

const statusColors = {
  Completed: "bg-green-100 text-green-500",
  Pending: "bg-orange-100 text-orange-500",
  Cancel: "bg-red-100 text-red-500",
};

const fulfillmentColors = {
  Delivered: "bg-green-100 text-green-500",
  Packing: "bg-orange-100 text-orange-500",
  Refund: "bg-red-100 text-red-500",
};

const SalesOrders = ({ collapseSidebar, expandSidebar }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Orders");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [showChooseAd, setShowChooseAd] = useState(false);
  const [previousTab, setPreviousTab] = useState("Listing");

  const handleCreateNewListing = () => {
    collapseSidebar?.();
    setPreviousTab(activeTab);
    setShowChooseAd(true);
    navigate("/new-listing");
  };

  const handleBackFromChooseAd = () => {
    setShowChooseAd(false);
    setActiveTab(previousTab);
    expandSidebar?.();
  };

  const filteredOrders = sampleOrders.filter((order) => {
    const statusMatch = statusFilter === "All" || order.status === statusFilter;
    const searchMatch =
      searchText === "" ||
      order.product.toLowerCase().includes(searchText.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchText.toLowerCase());
    return statusMatch && searchMatch;
  });

  const renderOrdersTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white text-xs sm:text-sm md:text-base">
        <thead className="bg-gray-100 text-left">
          <tr className="text-[#333] font-medium">
            {["Date", "Image", "Name", "Customer", "Contact", "Fulfillment", "Total", "Status", "Actions"].map((title, i) => (
              <th
                key={i}
                className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, idx) => (
            <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50 text-xs sm:text-sm">
              <td className="px-2 sm:px-4 py-1.5 sm:py-3">{order.date}</td>
              <td className="px-2 sm:px-4 py-1.5 sm:py-3">
                <img
                  src={productImg}
                  alt="product"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover"
                />
              </td>
              <td className="px-2 sm:px-4 py-1.5 sm:py-3">{order.product}</td>
              <td className="px-2 sm:px-4 py-1.5 sm:py-3 flex items-center gap-2 whitespace-nowrap">
                <img
                  src={profileImg}
                  alt="customer"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                />
                <span className="truncate max-w-[100px] sm:max-w-[150px]">{order.customer}</span>
              </td>
              <td className="px-2 sm:px-4 py-1.5 sm:py-3 text-blue-600 underline cursor-pointer whitespace-nowrap">
                Go to Chat
              </td>
              <td className="px-2 sm:px-4 py-1.5 sm:py-3 whitespace-nowrap">
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold ${fulfillmentColors[order.fulfillment]}`}
                >
                  {order.fulfillment}
                </span>
              </td>
              <td className="px-2 sm:px-4 py-1.5 sm:py-3">{order.total}</td>
              <td className="px-2 sm:px-4 py-1.5 sm:py-3 whitespace-nowrap">
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold ${statusColors[order.status]}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="px-2 sm:px-4 py-1.5 sm:py-3 text-lg sm:text-xl text-[#333] whitespace-nowrap">
                ⋯
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderContent = () => {
    if (showChooseAd) {
      return (
        <div>
          <button
            onClick={handleBackFromChooseAd}
            className="mb-4 px-4 py-2 text-[#333] text-sm sm:text-base"
          >
            <img src={arrowImg} alt="Back" />
          </button>
          <ChooseAdType />
        </div>
      );
    }

    switch (activeTab) {
      case "Orders":
        return renderOrdersTable();
      case "Listing":
        return (
          <div className="text-center text-[#333]">
            <ListingGrid />
          </div>
        );
      case "Offers":
        return (
          <div className="text-center text-[#333]">
            <SalesOffers />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 text-xs sm:text-sm md:text-base">
      {!showChooseAd && (
        <>
          {/* Tabs and Create Listing Button */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 flex-wrap w-full">
              <div className="flex gap-4 sm:gap-6 font-medium text-sm sm:text-base flex-wrap">
                {["Orders", "Listing", "Offers"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative pb-1 sm:pb-2 whitespace-nowrap ${
                      activeTab === tab
                        ? "text-[#1F3A93] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#1F3A93]"
                        : "text-[#333]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === "Listing" && (
              <div className="w-full md:w-auto ml-auto">
      <button
        className="bg-[#1F3A93] text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-blue-800 transition whitespace-nowrap"
        onClick={handleCreateNewListing}
      >
        Create new listing
      </button>
    </div>
              )}
            </div>

            {["Orders", "Offers"].includes(activeTab) && (
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full max-w-full mt-4 md:mt-0 md:w-auto text-xs sm:text-sm">
                <div className="px-3 text-gray-500 flex-shrink-0">
                  <img src={searchImg} alt="search" />
                </div>
                <input
                  type="text"
                  className="px-2 py-2.5 outline-none flex-grow min-w-0 bg-transparent placeholder:text-black"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="bg-[#FF7F50] text-white px-4 py-2.5 rounded-full whitespace-nowrap">
                  Search
                </button>
              </div>
            )}
          </div>

          {/* Filters and Date Input */}
          {["Orders", "Offers"].includes(activeTab) && (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-wrap">
              {/* Status Tabs */}
  <div className="flex flex-nowrap gap-2 min-w-[320px] text-xs sm:text-sm">
    {["All", "Completed", "Pending", "Cancel"].map((status) => (
      <button
        key={status}
        onClick={() => setStatusFilter(status)}
        className={`px-4 py-1.5 rounded-xl font-medium whitespace-nowrap ${
          statusFilter === status
            ? "bg-[#A9DCC5]"
            : "bg-transparent text-[#333]"
        }`}
      >
        {status}
      </button>
    ))}
  </div>

              {/* Date Range Input */}
              <div className="flex border border-gray-300 rounded px-3 py-1 items-center max-w-xs text-xs sm:text-sm mt-2 md:mt-0 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="01.11.2023 - 30.11.2023"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="outline-none bg-transparent w-full placeholder-black text-xs sm:text-sm"
                />
                <img src={dateImg} className="w-4 h-4 ml-2 flex-shrink-0" alt="Calendar" />
              </div>
            </div>
          )}
        </>
      )}

      {/* Main Content */}
      <div>{renderContent()}</div>
    </div>
  );
};

export default SalesOrders;
