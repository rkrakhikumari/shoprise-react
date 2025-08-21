import React, { useState } from "react";
import productImg from "../assets/product.png";
import profileImg from "../assets/Profil.png";
import dateImg from "../assets/date.png";

const sampleOffers = [
  { date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
  { date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Pending" },
  { date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Pending" },
  { date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Declined" },
  { date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Declined" },
  { date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
  { date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
];

const statusColors = {
  Accepted: "bg-green-100 text-green-400",
  Pending: "bg-orange-100 text-yellow-400",
  Declined: "bg-red-100 text-red-400",
};

const OffersTab = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateRange, setDateRange] = useState("");

  const filteredOffers =
    statusFilter === "All"
      ? sampleOffers
      : sampleOffers.filter((offer) => offer.status === statusFilter);

  return (
    <div className="w-full">
      {/* Top Filters: Status + Date */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        {/* Status Buttons */}
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
          {["All", "Accepted", "Pending", "Declined"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap ${
                statusFilter === status
                  ? "bg-[#A9DCC5] text-[#333333]"
                  : "bg-transparent text-[#333]"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Date input */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex border border-gray-300 rounded px-3 py-1 items-center w-full sm:w-auto">
            <input
              type="text"
              placeholder="01.11.2023 - 30.11.2023"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="text-xs sm:text-sm placeholder-black outline-none bg-transparent w-full"
            />
            <img src={dateImg} className="w-4 h-4 ml-2" alt="Calendar" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full bg-white text-xs sm:text-sm">
          <thead className="bg-gray-100 text-left whitespace-nowrap">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Seller</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Offer</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOffers.map((offer, idx) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="px-4 py-3 whitespace-nowrap">{offer.date}</td>
                <td className="px-4 py-3">
                  <img
                    src={productImg}
                    alt="product"
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{offer.product}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={profileImg}
                      alt="seller"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{offer.seller}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-blue-600 underline cursor-pointer whitespace-nowrap">
                  Go to chat
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{offer.offer}</td>
                <td className="px-4 py-3 whitespace-nowrap">{offer.price}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[offer.status]}`}
                  >
                    {offer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 p-4 text-xs sm:text-sm">
        <button className="px-3 py-1 hover:bg-gray-100">&lt;</button>
        <button className="px-3 py-1 bg-[#D3D3D3]">1</button>
        <button className="px-3 py-1 hover:bg-gray-100">2</button>
        <button className="px-3 py-1 hover:bg-gray-100">3</button>
        <span className="px-2">...</span>
        <button className="px-3 py-1 hover:bg-gray-100">9</button>
        <button className="px-3 py-1 hover:bg-gray-100">&gt;</button>
      </div>
    </div>
  );
};

export default OffersTab;
