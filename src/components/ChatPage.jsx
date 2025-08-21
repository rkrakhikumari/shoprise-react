import React, { useState } from 'react';
import searchImg from "../assets/search.png";
import jeniImg from '../assets/jeni.png';
import { FiImage } from 'react-icons/fi';
import { PiImage } from "react-icons/pi";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  const messages = [
    {
      id: 1,
      from: 'customer',
      content: "Hi, I'm interested in the blue sofa. Can you provide more details?",
      time: '18:05',
    },
    {
      id: 2,
      from: 'seller',
      content:
        "Hello! Certainly, it's a premium velvet sofa with modern design and sturdy construction. Seats three comfortably.",
      time: '18:10',
    },
    {
      id: 3,
      from: 'customer',
      content: 'Great! What are the dimensions?',
      time: '18:15',
    },
    {
      id: 4,
      from: 'seller',
      content: `It's 84" long, 36" deep, and 32 high.`,
      time: '18:15',
    },
    {
      id: 5,
      from: 'customer',
      content: "Perfect, I'll take it! How do I proceed with the purchase?",
      time: '18:15',
    },
  ];

  const tabs = ["All", "Read", "Unread"];

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      {/* Top header section with search aligned right */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
        {/* Left side - Chat title */}
        <h2 className="text-2xl font-semibold text-blue-900">Chat</h2>

        {/* Search box aligned top-right */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full md:w-auto max-w-full">
          <div className="px-3 text-gray-500 shrink-0">
            <img src={searchImg} alt="search" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <input
            type="text"
            className="px-2 py-2.5 text-sm outline-none flex-grow min-w-0"
          />
          <button className="bg-[#FF7F50] text-white px-4 py-2.5 text-sm rounded-full shrink-0">
            Search
          </button>
          <div className="w-px h-6 bg-[#D3D3D3] hidden md:block"></div>
        </div>
      </div>

      {/* Tabs above the chat layout */}
      <div className="flex gap-3 mb-4 text-sm overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-md flex-shrink-0 ${
              activeTab === tab
                ? 'bg-gray-200 text-[#333] font-medium'
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main chat layout */}
      <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[600px] bg-white text-sm rounded-md shadow-md overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-1/3 w-full flex flex-col">
          {/* Chat List */}
          <div className="border border-gray-300 rounded-md flex-1 divide-y divide-gray-200">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`flex gap-2 p-4 cursor-pointer ${
                  i === 3 ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedChat(true)}
              >
                <img
                  src={jeniImg}
                  alt="Jennifer Garnet"
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold truncate">Jennifer Garnet</span>

                    {/* TIME AND DOT vertically stacked */}
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <span className="text-xs text-[#1F3A93]">18:05</span>
                      <span className="w-2 h-2 bg-[#1F3A93] rounded-full"></span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 truncate">
                    Perfect, I'll take it! How do I proceed with ...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window*/}
        <div className="md:w-2/3 w-full h-full border border-gray-300 rounded-md flex flex-col bg-white">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-gray-200 p-4">
            <img src={jeniImg} alt="Jennifer Garnet" className="w-13 h-13 rounded-full" />
            <span className="text-sm font-medium">Jennifer Garnet</span>
          </div>

          {/* Messages */}
          <div className="p-5 flex-1 overflow-y-auto">
            <div className="text-center text-sm text-[#333333] mb-4">Aujourd'hui</div>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 flex ${
                  msg.from === 'seller' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-md p-2 text-md rounded-md ${
                    msg.from === 'seller'
                      ? 'bg-blue-900 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content}
                  <div className="text-[10px] text-left mt-1 opacity-70">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 flex items-center gap-2 border border-gray-300">
            <PiImage className="w-8 h-8 text-[#1F3A93] cursor-pointer" />

            <input
              type="text"
              placeholder="Send a chat"
              className="bg-gray-200 flex-1 p-2 border border-gray-300 text-sm outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
