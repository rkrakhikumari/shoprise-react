import React, { useState } from "react";
import productImg from "../assets/product.png";
import profileImg from "../assets/Profil.png";
import dateImg from "../assets/date.png";

const sampleOffers = [
  { id: 1, date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
  { id: 2, date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Pending" },
  { id: 3, date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Pending" },
  { id: 4, date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Declined" },
  { id: 5, date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Declined" },
  { id: 6, date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
  { id: 7, date: "18 March", product: "Litter troller sprayer", seller: "Jackson Smith", offer: "$300", price: "$300", status: "Accepted" },
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
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm cursor-pointer">
          {["All", "Accepted", "Pending", "Declined"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap ${
                statusFilter === status
                  ? "bg-[#A9DCC5] text-[#333333]"
                  : "bg-transparent text-[#333]"
              } cursor-pointer`}
              aria-pressed={statusFilter === status}
              aria-label={`Filter offers by ${status}`}
              type="button"
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
              aria-label="Filter by date range"
              autoComplete="off"
            />
            <button
              type="button"
              aria-label="Open date picker"
              className="ml-2 cursor-pointer"
            >
              <img
                src={dateImg}
                className="w-4 h-4"
                alt=""
                aria-hidden="true"
              />
            </button>
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
            {filteredOffers.map((offer) => (
              <tr key={offer.id} className="border-t border-gray-200">
                <td className="px-4 py-3 whitespace-nowrap">{offer.date}</td>
                <td className="px-4 py-3">
                  <img
                    src={productImg}
                    alt={`Image of ${offer.product}`}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{offer.product}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={profileImg}
                      alt={`Profile of ${offer.seller}`}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{offer.seller}</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <button
                    className="text-blue-600 underline cursor-pointer"
                    onClick={() => alert(`Go to chat with ${offer.seller}`)}
                    aria-label={`Go to chat with ${offer.seller}`}
                    type="button"
                  >
                    Go to chat
                  </button>
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
      <nav
        className="flex justify-center items-center gap-2 p-4 text-xs sm:text-sm"
        role="navigation"
        aria-label="Pagination"
      >
        <button
          className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
          aria-label="Previous page"
          type="button"
        >
          &lt;
        </button>
        <button
          className="px-3 py-1 bg-[#D3D3D3] cursor-pointer"
          aria-current="page"
          type="button"
        >
          1
        </button>
        <button className="px-3 py-1 hover:bg-gray-100 cursor-pointer" type="button">
          2
        </button>
        <button className="px-3 py-1 hover:bg-gray-100 cursor-pointer" type="button">
          3
        </button>
        <span className="px-2" aria-hidden="true">
          ...
        </span>
        <button className="px-3 py-1 hover:bg-gray-100 cursor-pointer" type="button">
          9
        </button>
        <button
          className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
          aria-label="Next page"
          type="button"
        >
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default OffersTab;
