import React, { useState } from "react";
import productImg from "../assets/product.png";
import profileImg from "../assets/Profil.png";
import dateImg from "../assets/date.png";

const sampleOrders = [
  {
    id: 1,
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Delivered",
    status: "Completed",
    total: "$300",
  },
  {
    id: 2,
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Packing",
    status: "Pending",
    total: "$300",
  },
  {
    id: 3,
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Refund",
    status: "Cancel",
    total: "$300",
  },
  {
    id: 4,
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Delivered",
    status: "Cancel",
    total: "$300",
  },
  {
    id: 5,
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Delivered",
    status: "Pending",
    total: "$300",
  },
  {
    id: 6,
    date: "18 March",
    product: "Litter troller sprayer",
    seller: "Jackson Smith",
    fulfillment: "Delivered",
    status: "Completed",
    total: "$300",
  },
  {
    id: 7,
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
        <div
          role="tablist"
          aria-label="Filter orders by status"
          className="flex flex-wrap gap-2 text-xs sm:text-sm whitespace-nowrap"
        >
          {["All", "Completed", "Pending", "Cancel"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#A9DCC5] cursor-pointer ${
                statusFilter === status
                  ? "bg-[#A9DCC5] text-[#333333]"
                  : "bg-transparent text-[#222222]"
              }`}
              aria-selected={statusFilter === status}
              role="tab"
              type="button"
            >
              {status}
            </button>
          ))}
        </div>

        {/* Date Input */}
        <div className="flex items-center gap-2">
          <label htmlFor="dateRange" className="sr-only">
            Date range
          </label>
          <div className="flex border border-gray-300 rounded px-3 py-1 items-center text-xs sm:text-sm">
            <input
              type="text"
              id="dateRange"
              placeholder="01.11.2023 - 30.11.2023"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="placeholder-black outline-none bg-transparent w-full"
              aria-label="Date range filter"
            />
            <img
              src={dateImg}
              className="w-4 h-4 ml-2"
              alt=""
              aria-hidden="true"
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          className="min-w-[800px] w-full bg-white text-xs sm:text-sm"
          role="table"
          aria-label="Orders table"
        >
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3 whitespace-nowrap" scope="col">
                Date
              </th>
              <th className="px-4 py-3 whitespace-nowrap" scope="col">
                Image
              </th>
              <th className="px-4 py-3 whitespace-nowrap" scope="col">
                Name
              </th>
              <th className="px-4 py-3 whitespace-nowrap" scope="col">
                Seller
              </th>
              <th className="px-4 py-3 whitespace-nowrap" scope="col">
                Contact
              </th>
              <th className="px-4 py-3 whitespace-nowrap" scope="col">
                Fulfillment
              </th>
              <th className="px-4 py-3 whitespace-nowrap" scope="col">
                Total
              </th>
              <th className="px-4 py-3 whitespace-nowrap" scope="col">
                Status
              </th>
              <th className="px-4 py-3 whitespace-nowrap" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-t border-gray-200">
                <td className="px-4 py-3 whitespace-nowrap">{order.date}</td>
                <td className="px-4 py-3">
                  <img
                    src={productImg}
                    alt={`Product: ${order.product}`}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </td>
                <td className="px-4 py-3">{order.product}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={profileImg}
                      alt={`Seller: ${order.seller}`}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="whitespace-nowrap">{order.seller}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    className="text-blue-600 underline cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-400"
                    aria-label={`Go to chat with ${order.seller}`}
                    onClick={() => {
                    }}
                  >
                    Go to chat
                  </button>
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
                <td className="px-4 py-3">
                  <button
                    type="button"
                    aria-label={`More actions for order of ${order.product} by ${order.seller}`}
                    className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
                    onClick={() => {
                    }}
                  >
                    ...
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasingTab;
