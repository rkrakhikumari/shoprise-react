import React from 'react';
import profileImg from "../assets/Profil.png";

const Dashboard = () => {
  const orders = [
    { id: '173204', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', fulfillment: 'Delivered', status: 'Delivered' },
    { id: '173205', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', fulfillment: 'Packing', status: 'Pending' },
    { id: '173206', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', fulfillment: 'Refund', status: 'Cancel' },
    { id: '173207', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', fulfillment: 'Delivered', status: 'Pending' },
    { id: '173208', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', fulfillment: 'Delivered', status: 'Delivered' },
    { id: '173209', date: '18 March', customer: 'Jackson Smith', product: 'Litter troller sprayer', fulfillment: 'Delivered', status: 'Delivered' },
  ];

  const getBadgeClass = (type, value) => {
    const map = {
      fulfillment: {
        Delivered: 'bg-green-100 text-green-400',
        Packing: 'bg-orange-100 text-orange-400',
        Refund: 'bg-red-100 text-red-400',
      },
      status: {
        Delivered: 'bg-green-100 text-green-400',
        Pending: 'bg-orange-100 text-orange-400',
        Cancel: 'bg-red-100 text-red-400',
      },
    };
    return map[type]?.[value] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="w-full text-[10px] sm:text-sm">
      {/* Welcome */}
      <h2 className="text-base sm:text-xl font-semibold mb-4 px-2 sm:px-4">Welcome back John!</h2>

      {/* Marketplace Insights - Top */}
      <div className="px-2 sm:px-3 md:px-6">
        <h3 className="text-sm sm:text-md font-semibold text-[#1F3A93] mb-4">Marketplace insights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {['Clicks on listings', 'Listing saves', 'Listing shares', 'Marketplace followers'].map((label, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D3D3D3] flex items-center justify-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#1F3A93]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-sm">{label}</span>
                <span className="text-base sm:text-xl font-semibold">0</span>
              </div>
            </div>
          ))}
        </div>

        {/* Marketplace Insights - Bottom */}
        <h3 className="text-sm sm:text-md font-semibold text-[#1F3A93] mb-3">Marketplace insights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-5">
          {[
            {
              title: 'Cancellation rate',
              description: 'You have canceled 0% of your orders',
            },
            {
              title: 'Missed handling rate',
              description: 'You have shipped or canceled 0% of orders after 3 business days.',
            },
            {
              title: 'Claim escalation',
              description: '0% of your orders covered by Purchase Protection are escalated to Facebook',
            },
            {
              title: 'Chargeback rate',
              description: '0% of your orders are charged back through the buyer’s payment method',
            },
          ].map((item, index) => (
            <div key={index} className="text-left">
              <div className="text-base sm:text-xl font-semibold">0%</div>
              <div className="text-[10px] sm:text-sm">{item.title}</div>
              <p className="text-[9px] sm:text-xs mt-1 text-[#333]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="px-2 sm:px-3 md:px-6">
        <h3 className="text-sm sm:text-md font-semibold mb-4 text-[#1F3A93]">Orders</h3>
        <div className="overflow-x-auto w-full">
          <table className="min-w-[800px] w-full bg-white text-[10px] sm:text-sm text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 font-medium whitespace-nowrap">ID</th>
                <th className="px-4 py-3 font-medium whitespace-nowrap">Date</th>
                <th className="px-4 py-3 font-medium whitespace-nowrap">Customer</th>
                <th className="px-4 py-3 font-medium whitespace-nowrap">Products</th>
                <th className="px-4 py-3 font-medium whitespace-nowrap">Address</th>
                <th className="px-4 py-3 font-medium whitespace-nowrap">Fulfillment</th>
                <th className="px-4 py-3 font-medium whitespace-nowrap">Total</th>
                <th className="px-4 py-3 font-medium whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-[#000000] whitespace-nowrap">{order.id}</td>
                  <td className="px-4 py-3 text-[#000000] whitespace-nowrap">{order.date}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-[#000000]">
                      <img src={profileImg} alt={order.customer} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                      <span>{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[#000000] whitespace-nowrap">{order.product}</td>
                  <td className="px-4 py-3 text-[#000000] whitespace-nowrap">Address</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`text-[9px] sm:text-xs font-semibold px-3 py-1 rounded-full ${getBadgeClass('fulfillment', order.fulfillment)}`}>
                      {order.fulfillment}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#000000] whitespace-nowrap">Total</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`text-[9px] sm:text-xs font-semibold px-3 py-1 rounded-full ${getBadgeClass('status', order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
