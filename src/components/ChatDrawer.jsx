import React, { useState, useEffect } from 'react';
import jeniImg from '../assets/jeni.png';
import { FaArrowLeft, FaImage } from 'react-icons/fa';

const messages = Array(10).fill({
  name: 'Jennifer Garnet',
  time: '18:05',
  text: "Perfect, I'll take it! How do I proceed with..."
});

export default function ChatDrawer({ onClose }) {
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  const handleChatClick = (chat) => setSelectedChat(chat);
  const handleBack = () => setSelectedChat(null);

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} className="fixed inset-0 backdrop-blur-sm z-40" />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-screen bg-white shadow-xl z-50 flex flex-col transition-transform duration-300
                      w-full max-w-[350px] sm:w-[350px]">

        {/* Header */}
        <div className="bg-[#FF7F50] text-white flex justify-between items-center h-14 px-4 font-semibold text-lg sm:text-lg">
          <button onClick={handleBack} className="text-white text-xl sm:text-xl">
            <FaArrowLeft />
          </button>
          <span>Chat</span>
          <button onClick={onClose} className="text-white text-2xl font-bold leading-none">×</button>
        </div>

        {selectedChat ? (
          <div className="flex-1 flex flex-col">

            {/* Chat Header */}
            <div className="flex items-center h-14 gap-3 px-4 border-b-2 border-[#D3D3D3]">
              {/* Back Button left of text */}

              {/* Chat name and avatar */}
              <img src={jeniImg} alt="Avatar" className="w-10 h-10 rounded-full" />
              <span className="text-sm font-medium truncate">{selectedChat.name}</span>
            </div>

            {/* Date */}
            <div className="text-center text-xs text-gray-400 mt-1 mb-1">Aujourd'hui</div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto px-2 pt-1 pb-2 text-sm space-y-1 flex flex-col justify-end">
              <div className="w-fit max-w-[90%]">
                <div className="bg-gray-200 rounded-xl px-2 py-1">
                  Hi, I'm interested in the blue sofa. Can you provide more details?
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">18:05</div>
              </div>

              <div className="ml-auto w-fit max-w-[90%] text-right">
                <div className="bg-[#1F3A93] text-white rounded-xl px-2 py-1">
                  Hello! Certainly, it's a premium velvet sofa with modern design and sturdy construction. Seats three comfortably.
                </div>
                <div className="text-[10px] text-gray-300 mt-0.5">18:10</div>
              </div>

              <div className="w-fit max-w-[90%]">
                <div className="bg-gray-200 rounded-xl px-2 py-1">
                  Great! What are the dimensions?
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">18:15</div>
              </div>

              <div className="ml-auto w-fit max-w-[90%] text-right">
                <div className="bg-[#1F3A93] text-white rounded-xl px-2 py-1">
                  It's 84” long, 36” deep, and 32 high.
                </div>
                <div className="text-[10px] text-gray-300 mt-0.5">18:15</div>
              </div>

              <div className="w-fit max-w-[90%]">
                <div className="bg-gray-200 rounded-xl px-2 py-1">
                  Perfect, I'll take it! How do I proceed with the purchase?
                </div>
                <div className="text-[10px] text-gray-500 mt-0.5">18:15</div>
              </div>
            </div>

            {/* Input with image upload icon */}
            <div className="border-t px-3 py-2">
              <div className="flex items-center bg-gray-100 rounded-full px-2 py-2 gap-2">
                <button className="text-gray-500 text-lg">
                  <FaImage />
                </button>
                <input
                  type="text"
                  placeholder="Send a chat"
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>
            </div>

          </div>
        ) : (
          // - Chat List View -
          <div
            style={{ height: 'calc(100vh - 56px)' }}
            className="overflow-y-auto px-3"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                onClick={() => handleChatClick(msg)}
                style={{ height: 'calc((100vh - 56px) / 10)' }}
                className="flex items-center justify-between border-b border-[#D3D3D3] py-2 cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img
                    src={jeniImg}
                    alt="Avatar"
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{msg.name}</div>
                    <div className="text-xs text-gray-700 truncate" title={msg.text}>{msg.text}</div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center w-16 flex-shrink-0 text-right">
                  <span className="text-[11px] text-[#1F3A93]">{msg.time}</span>
                  <span className="w-2 h-2 bg-[#1F3A93] rounded-full mt-1"></span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
