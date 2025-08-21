import React, { useState } from "react";
import productImg from "../assets/product.png";
import profileImg from "../assets/Profil.png";

const sampleOffers = [
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Pending" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Pending" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Declined" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Declined" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
  { date: "18 March", product: "Litter troller sprayer", customer: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
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
            {filteredOffers.map((offer, idx) => (
              <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50 text-xs sm:text-sm md:text-base">
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{offer.date}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                  <img
                    src={productImg}
                    alt="product"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{offer.product}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2 whitespace-nowrap">
                  <img
                    src={profileImg}
                    alt="customer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0"
                  />
                  <span className="truncate max-w-[80px] sm:max-w-[150px]">{offer.customer}</span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-blue-600 underline cursor-pointer whitespace-nowrap">
                  Go to chat
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{offer.offer}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">{offer.price}</td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${statusColors[offer.status]}`}>
                    {offer.status}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-3 text-xl text-[#333333] whitespace-nowrap">⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-3 text-xs sm:text-sm md:text-base text-[#333] flex-wrap">
        <button className="px-2 py-1 rounded hover:bg-gray-100">&lt;</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-black font-medium">1</button>
        <button className="px-2 py-1 rounded hover:bg-gray-100">2</button>
        <span>...</span>
        <button className="px-2 py-1 rounded hover:bg-gray-100">9</button>
        <button className="px-2 py-1 rounded hover:bg-gray-100">&gt;</button>
      </div>
    </div>
  );
};

export default OffersTab;
