import React from "react";

const notifications = [
  {
    id: 1,
    title: "Sell",
    message:
      "Your item [Item Name] has been sold to [Buyer's Name]. Please proceed with shipping as soon as possible",
    status: "Unread",
  },
  {
    id: 2,
    title: "Purchase",
    message:
      "You have purchased the item [Item Name] from [Seller's Name]. Thank you for your purchase!",
    status: "Unread",
  },
  {
    id: 3,
    title: "Sell",
    message:
      "You have received a payment from [Buyer's Name] for the item [Item Name].",
    status: "Read",
  },
  {
    id: 4,
    title: "Message",
    message:
      "You have received a message from [User's Name]. Check your inbox to respond.",
    status: "Read",
  },
  {
    id: 5,
    title: "Feedback",
    message:
      "[Buyer's Name] has opened a claim regarding the item [Item Name]. Please review the situation promptly",
    status: "Read",
  },
  {
    id: 6,
    title: "Order",
    message:
      "[User's Name] has reviewed your item [Item Name]. Check out the feedback and respond if necessary.",
    status: "Read",
  },
];

const NotificationDrawer = ({ onClose }) => {
  // Handler for "Mark all as unread" - placeholder
  const markAllAsUnread = () => {
    // Add logic here if needed
  };

  // Close drawer on Escape key for accessibility
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      {/* Background overlay: button for accessibility */}
      <button
        onClick={onClose}
        aria-label="Close notifications drawer"
        className="fixed inset-0 z-40 bg-black/20 cursor-pointer"
      />

      {/* Notification Drawer */}
      <aside
        className="
          fixed top-[64px] right-0
          w-full max-w-[350px]
          h-[calc(100vh-64px)]
          bg-white shadow-xl z-50 border-l border-[#D3D3D3] rounded-tl-2xl rounded-bl-2xl
          flex flex-col
          sm:rounded-2xl
          sm:top-[64px]
        "
        role="dialog"
        aria-modal="true"
        aria-label="Notifications panel"
      >
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-[#D3D3D3]">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-lg text-[#333333] truncate">
              Notifications
            </h2>
            <span className="bg-[#1F3A9340] text-[#1F3A93] text-xs font-semibold px-2 py-0.5 rounded-full">
              {notifications.length}
            </span>
          </div>
          <button
            onClick={markAllAsUnread}
            className="text-sm text-[#FF7F50] font-medium hover:underline whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#FF7F50]"
            aria-label="Mark all notifications as unread"
            type="button"
          >
            Mark all as unread
          </button>
        </header>

        {/* Notification List */}
        <div className="overflow-y-auto flex-1" tabIndex={-1}>
          <ul>
            {notifications.map((item) => (
              <li
                key={item.id}
                className="px-5 py-3 border-t first:border-t-0 border-[#D3D3D3] hover:bg-gray-50 transition"
              >
                <h3 className="text-[#1F3A93] font-semibold text-sm mb-1 truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-[#333333] truncate">{item.message}</p>
                <div className="flex justify-between items-center text-xs text-[#333333] mt-2">
                  <time dateTime="PT1H">1 hour ago</time>
                  <span className="flex items-center gap-1 text-sm" aria-live="polite">
                    {item.status === "Unread" && (
                      <span
                        className="w-2 h-2 rounded-full bg-[#1F3A93]"
                        aria-hidden="true"
                      ></span>
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
      </aside>
    </>
  );
};

export default NotificationDrawer;
