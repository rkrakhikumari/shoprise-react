import React, { useState } from "react";
import productImg from "../assets/product.png";
import profileImg from "../assets/Profil.png";
import dateImg from "../assets/date.png";

const sampleOrders = [
  {
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Delivered",
    status: "Completed",
    total: "$300",
  },
  {
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Packing",
    status: "Pending",
    total: "$300",
  },
  {
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Refund",
    status: "Cancel",
    total: "$300",
  },
  {
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Delivered",
    status: "Cancel",
    total: "$300",
  },
  {
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Delivered",
    status: "Pending",
    total: "$300",
  },
  {
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Delivered",
    status: "Completed",
    total: "$300",
  },
  {
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Delivered",
    status: "Completed",
    total: "$300",
  },
];

const statusColors = {
  Completed: "bg-green-100 text-green-400",
  Pending: "bg-orange-100 text-yellow-400",
  Cancel: "bg-red-100 text-red-400",
};

const fulfillmentColors = {
  Delivered: "bg-green-100 text-green-400",
  Packing: "bg-orange-100 text-yellow-400",
  Refund: "bg-red-100 text-red-400",
};

const PurchasingTab = () => {
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateRange, setDateRange] = useState("");

  const filteredOrders =
    statusFilter === "All"
      ? sampleOrders
      : sampleOrders.filter((order) => order.status === statusFilter);

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        {/* Status Buttons */}
        <div className="flex flex-wrap gap-2 text-xs sm:text-sm whitespace-nowrap">
          {["All", "Completed", "Pending", "Cancel"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-xl ${
                statusFilter === status
                  ? "bg-[#A9DCC5] text-[#333333]"
                  : "bg-transparent text-[#222222]"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Date Input */}
        <div className="flex items-center gap-2">
          <div className="flex border border-gray-300 rounded px-3 py-1 items-center text-xs sm:text-sm">
            <input
              type="text"
              placeholder="01.11.2023 - 30.11.2023"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="placeholder-black outline-none bg-transparent w-full"
            />
            <img src={dateImg} className="w-4 h-4 ml-2" alt="Calendar" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[800px] w-full bg-white text-xs sm:text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3 whitespace-nowrap">Date</th>
              <th className="px-4 py-3 whitespace-nowrap">Image</th>
              <th className="px-4 py-3 whitespace-nowrap">Name</th>
              <th className="px-4 py-3 whitespace-nowrap">Seller</th>
              <th className="px-4 py-3 whitespace-nowrap">Contact</th>
              <th className="px-4 py-3 whitespace-nowrap">Fulfillment</th>
              <th className="px-4 py-3 whitespace-nowrap">Total</th>
              <th className="px-4 py-3 whitespace-nowrap">Status</th>
              <th className="px-4 py-3 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order, idx) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="px-4 py-3 whitespace-nowrap">{order.date}</td>
                <td className="px-4 py-3">
                  <img
                    src={productImg}
                    alt="product"
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-3">{order.product}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={profileImg}
                      alt="seller"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="whitespace-nowrap">{order.seller}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-blue-600 underline cursor-pointer whitespace-nowrap">
                  Go to chat
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${fulfillmentColors[order.fulfillment]}`}
                  >
                    {order.fulfillment}
                  </span>
                </td>
                <td className="px-4 py-3">{order.total}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasingTab;
