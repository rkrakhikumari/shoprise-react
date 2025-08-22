import React, { useState } from "react";
import productImg from "../assets/product.png";
import profileImg from "../assets/Profil.png";

const sampleOffers = [
  { id: '1', date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Pending" },
  { id: '2', date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Pending" },
  { id: '3', date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
  { id: '4', date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Declined" },
  { id: '5', date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Declined" },
  { id: '6', date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
  { id: '7', date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
];

const statusColors = {
  Pending: "bg-orange-100 text-orange-500",
  Accepted: "bg-green-100 text-green-500",
  Declined: "bg-red-100 text-red-500",
};

const OffersTab = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState("");

  const filteredOffers = sampleOffers.filter((offer) => {
    const matchesStatus = statusFilter === "All" || offer.status === statusFilter;
    const matchesSearch =
      searchText === "" ||
      offer.product.toLowerCase().includes(searchText.toLowerCase()) ||
      offer.customer.toLowerCase().includes(searchText.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="text-xs sm:text-sm md:text-base lg:text-lg">
      {/* Offers Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-xs sm:text-sm md:text-base">
          <thead className="bg-gray-100 text-left">
            <tr className="text-[#333333] font-medium text-xs sm:text-sm md:text-base">
              <th className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Date</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Image</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Name</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Customers</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Contact</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Offer</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Price</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Status</th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOffers.map((offer) => (
              <tr
                key={offer.id}
                className="border-t border-gray-200 hover:bg-gray-50 text-xs sm:text-sm md:text-base"
              >
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{offer.date}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                  <img
                    src={productImg}
                    alt={`Product: ${offer.product}`}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{offer.product}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2 whitespace-nowrap">
                  <img
                    src={profileImg}
                    alt={`Customer: ${offer.customer}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
                  />
                  <span className="truncate max-w-[80px] sm:max-w-[150px]">{offer.customer}</span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                  <button
                    type="button"
                    className="underline text-blue-600 cursor-pointer"
                    aria-label={`Chat with ${offer.customer}`}
                    onClick={() => alert("Go to chat")}
                  >
                    Go to chat
                  </button>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{offer.offer}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{offer.price}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${statusColors[offer.status]}`}
                  >
                    {offer.status}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                  <button
                    type="button"
                    className="text-xl text-[#333333] cursor-pointer"
                    aria-label={`More actions for ${offer.product}`}
                    onClick={() => alert("More actions")}
                  >
                    ⋯
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-3 text-xs sm:text-sm md:text-base text-[#333] flex-wrap">
        <button className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer" aria-label="Previous page">
          &lt;
        </button>
        <button
          className="px-3 py-1 rounded bg-gray-200 text-black font-medium"
          aria-label="Current page 1"
        >
          1
        </button>
        <button className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer" aria-label="Go to page 2">
          2
        </button>
        <span aria-hidden="true">...</span>
        <button className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer" aria-label="Go to page 9">
          9
        </button>
        <button className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer" aria-label="Next page">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default OffersTab;
