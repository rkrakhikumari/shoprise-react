import React from "react";

const notifications = [
  {
    title: "Sell",
    message:
      "Your item [Item Name] has been sold to [Buyer's Name]. Please proceed with shipping as soon as possible",
    status: "Unread",
  },
  {
    title: "Purchase",
    message:
      "You have purchased the item [Item Name] from [Seller's Name]. Thank you for your purchase!",
    status: "Unread",
  },
  {
    title: "Sell",
    message:
      "You have received a payment from [Buyer's Name] for the item [Item Name].",
    status: "Read",
  },
  {
    title: "Message",
    message:
      "You have received a message from [User's Name]. Check your inbox to respond.",
    status: "Read",
  },
  {
    title: "Feedback",
    message:
      "[Buyer's Name] has opened a claim regarding the item [Item Name]. Please review the situation promptly",
    status: "Read",
  },
  {
    title: "Order",
    message:
      "[User's Name] has reviewed your item [Item Name]. Check out the feedback and respond if necessary.",
    status: "Read",
  },
];

const NotificationDrawer = ({ onClose }) => {
  return (
    <>
      {/* Background overlay: blurred & semi-transparent */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20"
      />

      {/* Notification Drawer */}
      <div
        className="
          fixed top-[64px] right-0
          w-full max-w-[350px]
          h-[calc(100vh-64px)]
          bg-white shadow-xl z-50 border-l border-[#D3D3D3] rounded-tl-2xl rounded-bl-2xl
          flex flex-col
          sm:rounded-2xl
          sm:top-[64px]
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#D3D3D3]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-[#333333] truncate">
              Notifications
            </span>
            <span className="bg-[#1F3A9340] text-[#1F3A93] text-xs font-semibold px-2 py-0.5 rounded-full">
              {notifications.length}
            </span>
          </div>
          <button
            onClick={() => {
              /* Your logic to mark all as unread */
            }}
            className="text-sm text-[#FF7F50] font-medium hover:underline whitespace-nowrap"
          >
            Mark all as unread
          </button>
        </div>

        {/* Notification List */}
        <div className="overflow-y-auto flex-1">
          <ul>
            {notifications.map((item, idx) => (
              <li
                key={idx}
                className="px-5 py-3 border-t first:border-t-0 border-[#D3D3D3] hover:bg-gray-50 transition"
              >
                <h4 className="text-[#1F3A93] font-semibold text-sm mb-1 truncate">
                  {item.title}
                </h4>
                <p className="text-sm text-[#333333] truncate">{item.message}</p>
                <div className="flex justify-between items-center text-xs text-[#333333] mt-2">
                  <span>1 hour ago</span>
                  <span className="flex items-center gap-1 text-sm">
                    {item.status === "Unread" && (
                      <span className="w-1 h-1 rounded-full bg-[#1F3A93]"></span>
                    )}
                    <span
                      className={
                        item.status === "Unread"
                          ? "text-[#1F3A93] font-medium"
                          : "text-[#1F3A93]"
                      }
                    >
                      {item.status}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotificationDrawer;
