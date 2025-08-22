import React, { useState, useEffect } from 'react';
import jeniImg from '../assets/jeni.png';
import { FaArrowLeft, FaImage } from 'react-icons/fa';

const messagesData = [
  {
    id: 'msg-1',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
  {
    id: 'msg-2',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
  {
    id: 'msg-3',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
  {
    id: 'msg-4',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
  {
    id: 'msg-5',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
  {
    id: 'msg-6',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
  {
    id: 'msg-7',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
  {
    id: 'msg-8',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
  {
    id: 'msg-9',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
  {
    id: 'msg-10',
    name: 'Jennifer Garnet',
    time: '18:05',
    text: "Perfect, I'll take it! How do I proceed with..."
  },
];

export default function ChatDrawer({ onClose }) {
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleChatClick = (chat) => setSelectedChat(chat);
  const handleBack = () => setSelectedChat(null);

  return (
    <>
      {/* Overlay */}
      <button
        onClick={onClose}
        aria-label="Close chat drawer"
        className="fixed inset-0 backdrop-blur-sm z-40 cursor-pointer"
        type="button"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-screen bg-white shadow-xl z-50 flex flex-col transition-transform duration-300
                  w-full max-w-[350px] sm:w-[350px]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatDrawerTitle"
        tabIndex={-1}
      >
        {/* Header */}
        <header className="bg-[#FF7F50] text-white flex justify-between items-center h-14 px-4 font-semibold text-lg sm:text-lg">
          <button
            onClick={handleBack}
            className="text-white text-xl sm:text-xl cursor-pointer"
            aria-label="Back to chat list"
            type="button"
            disabled={!selectedChat}
          >
            <FaArrowLeft />
          </button>
          <h2 id="chatDrawerTitle" className="text-center flex-1">
            Chat
          </h2>
          <button
            onClick={onClose}
            className="text-white text-2xl font-bold leading-none cursor-pointer"
            aria-label="Close chat drawer"
            type="button"
          >
            ×
          </button>
        </header>

        {selectedChat ? (
          <section className="flex-1 flex flex-col" aria-label={`Chat conversation with ${selectedChat.name}`}>
            {/* Chat Header */}
            <div className="flex items-center h-14 gap-3 px-4 border-b-2 border-[#D3D3D3]">
              <img src={jeniImg} alt={`${selectedChat.name} avatar`} className="w-10 h-10 rounded-full" />
              <span className="text-sm font-medium truncate">{selectedChat.name}</span>
            </div>

            {/* Date */}
            <div className="text-center text-xs text-gray-400 mt-1 mb-1" aria-live="polite" aria-atomic="true">Aujourd'hui</div>

            {/* Chat Body */}
            <div
              className="flex-1 overflow-y-auto px-2 pt-1 pb-2 text-sm space-y-1 flex flex-col justify-end"
              tabIndex={0}
            >
              <article className="w-fit max-w-[90%]" aria-label="Received message">
                <div className="bg-gray-200 rounded-xl px-2 py-1">
                  Hi, I'm interested in the blue sofa. Can you provide more details?
                </div>
                <time className="text-[10px] text-gray-500 mt-0.5" dateTime="2025-08-22T18:05">18:05</time>
              </article>

              <article className="ml-auto w-fit max-w-[90%] text-right" aria-label="Sent message">
                <div className="bg-[#1F3A93] text-white rounded-xl px-2 py-1">
                  Hello! Certainly, it's a premium velvet sofa with modern design and sturdy construction. Seats three comfortably.
                </div>
                <time className="text-[10px] text-gray-300 mt-0.5" dateTime="2025-08-22T18:10">18:10</time>
              </article>

              <article className="w-fit max-w-[90%]" aria-label="Received message">
                <div className="bg-gray-200 rounded-xl px-2 py-1">
                  Great! What are the dimensions?
                </div>
                <time className="text-[10px] text-gray-500 mt-0.5" dateTime="2025-08-22T18:15">18:15</time>
              </article>

              <article className="ml-auto w-fit max-w-[90%] text-right" aria-label="Sent message">
                <div className="bg-[#1F3A93] text-white rounded-xl px-2 py-1">
                  It's 84” long, 36” deep, and 32 high.
                </div>
                <time className="text-[10px] text-gray-300 mt-0.5" dateTime="2025-08-22T18:15">18:15</time>
              </article>

              <article className="w-fit max-w-[90%]" aria-label="Received message">
                <div className="bg-gray-200 rounded-xl px-2 py-1">
                  Perfect, I'll take it! How do I proceed with the purchase?
                </div>
                <time className="text-[10px] text-gray-500 mt-0.5" dateTime="2025-08-22T18:15">18:15</time>
              </article>
            </div>

            {/* Input with image upload icon */}
            <form className="border-t px-3 py-2" onSubmit={e => e.preventDefault()} aria-label="Send a new message">
              <div className="flex items-center bg-gray-100 rounded-full px-2 py-2 gap-2">
                <button
                  className="text-gray-500 text-lg cursor-pointer"
                  aria-label="Upload image"
                  type="button"
                >
                  <FaImage />
                </button>
                <input
                  type="text"
                  placeholder="Send a chat"
                  className="flex-1 bg-transparent outline-none text-sm"
                  aria-label="Type your message"
                  readOnly
                />
              </div>
            </form>
          </section>
        ) : (
          // Chat List View
          <nav
            style={{ height: 'calc(100vh - 56px)' }}
            className="overflow-y-auto px-3"
            aria-label="Chat list"
          >
            {messagesData.map((msg) => (
              <button
                key={msg.id}
                onClick={() => handleChatClick(msg)}
                type="button"
                aria-label={`Open chat with ${msg.name}`}
                style={{ height: 'calc((100vh - 56px) / 10)' }}
                className="flex w-full items-center justify-between border-b border-[#D3D3D3] py-2 cursor-pointer text-left px-2 focus:outline-none focus:ring-2 focus:ring-[#1F3A93]"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img
                    src={jeniImg}
                    alt={`${msg.name} avatar`}
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{msg.name}</div>
                    <div className="text-xs text-gray-700 truncate" title={msg.text}>{msg.text}</div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center w-16 flex-shrink-0 text-right">
                  <span className="text-[11px] text-[#1F3A93]">{msg.time}</span>
                  <span className="w-2 h-2 bg-[#1F3A93] rounded-full mt-1" aria-hidden="true"></span>
                </div>
              </button>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
