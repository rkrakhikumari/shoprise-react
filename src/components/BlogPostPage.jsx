import React from "react";
import { Link } from "react-router-dom";

import blog3 from "../assets/blog3.png";
import linkImg from "../assets/Linked.png";
import Twitter from "../assets/Twitter.png";
import Facebook from "../assets/Facebook.png";
import Post from "../assets/post1.png";
import user3 from "../assets/user3.png";
import user7 from "../assets/user7.png";
import user8 from "../assets/user8.png";
import user9 from "../assets/user9.png";
import blog7 from "../assets/blog7.png";
import blog8 from "../assets/blog8.png";
import blog9 from "../assets/blog9.png";

const post = {
  title: "Exotic Cities to Visit",
  category: "Travel and Adventure",
  author: "Jessica Turner",
  date: "21 Jan 2023",
  imageUrl: blog3,
  content: `In a world brimming with destinations to explore, there's a magnetic pull towards cities that promise something out of the ordinary. While iconic metropolises have their timeless charm, there's an allure in venturing off the beaten path to discover exotic cities that beckon with a sense of wonder.
These cities are where tradition intertwines with modernity, where history and culture unfold in the most captivating of ways. Join us as we embark on a journey to explore some of the most enchanting exotic cities the world has to offer, where each step promises a new adventure.`,
};

const blogPosts = [
  {
    title: "The Rise of 5G Technology",
    category: "Technology News",
    description:
      "Explore the rapid advancement of 5G technology and its potential to revolutionize connectivity.",
    author: "Mark Roberts",
    date: "11 Jan 2022",
    image: blog7,
    avatar: user7,
  },
  {
    title: "The Secrets of Pastry",
    category: "Food and Gastronomy",
    description:
      "Tips to become an expert pastry chef and create incredible desserts.",
    author: "Maria Rodríguez",
    date: "5 Dec 2022",
    image: blog8,
    avatar: user8,
  },
  {
    title: "The Ethical Implications of AI",
    category: "Technology News",
    description:
      "Explore the ethical dilemmas and considerations surrounding the use of AI in various sectors.",
    author: "Alex Johnson",
    date: "12 Oct 2022",
    image: blog9,
    avatar: user9,
  },
];

const BlogPostPage = () => {
  return (
    <>
      {/* Main Blog Header Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-30 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Post Info */}
        <div>
          <div className="text-sm text-gray-600 mb-2 mt-2 flex flex-wrap gap-2 items-center">
            <Link to="/blog" className="text-[#333333] text-xl pr-2 whitespace-nowrap">Blog</Link> 
            <span className="text-xl text-gray-500">{">"}</span>
            <Link to="/blog/exotic-cities-to-visit" className="text-xl text-[#1F3A93] pl-2 whitespace-nowrap">
              {post.category}
            </Link>
          </div>

          <h1 className="text-3xl font-semibold text-[#1F3A93] mb-2 pt-7">{post.title}</h1>

          <p className="text-xl text-gray-700 mb-1 pt-6">
            By <span className="text-[#1F3A93]">{post.author}</span>
          </p>
          <p className="text-base md:text-md text-[#333333] mb-10">{post.date}</p>

          {/* Social Share */}
          <div className="flex flex-col items-start gap-3 mb-6">
            <span className="text-[#333333] text-xl">Share this post</span>
            <div className="flex gap-4 pt-3">
              {[Facebook, Twitter, linkImg].map((icon, idx) => (
                <div key={idx} className="w-10 h-10 bg-[#1F3A93] rounded-full flex items-center justify-center cursor-pointer">
                  <img src={icon} alt="Social Icon" className="w-6 h-6 md:w-7 md:h-7" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Main Image */}
        <div>
          <img src={post.imageUrl} alt={post.title} className="w-full rounded object-cover" />
        </div>

        {/* Full Content */}
        <div className="col-span-1 md:col-span-2 mt-10 px-4 md:px-20">
          <h2 className="text-3xl font-semibold text-[#1F3A93] mb-4">Introduction</h2>
          <p className="font-inter text-base md:text-lg text-[#333333] pt-10 whitespace-pre-line">{post.content}</p>
        </div>
      </div>

      {/* Featured Image + Quote Section */}
      <div className="pt-10 px-4 md:px-20 pb-3 max-w-6xl mx-auto">
        <img src={Post} alt="Featured" className="w-full rounded object-cover" />
        <p className="mt-4 border-l-2 border-[#D3D3D3] italic text-gray-600 pl-2">Ibiza Espagne</p>

        <p className="text-[#1F3A93] mt-9 text-base md:text-lg">
          Exotic cities are like hidden gems, waiting to be discovered by intrepid travelers...
        </p>
        <p className="text-[#333333] mt-7 text-base md:text-lg">
          One of the joys of visiting exotic cities lies in the opportunity to immerse oneself in local traditions...
        </p>
        <p className="text-[#333333] mt-7 text-base md:text-lg">
          The tantalizing aroma of spices, the sounds of bustling markets...
        </p>

        <div className="border-l-2 border-[#D3D3D3] italic mt-20 pl-2">
          <p className="text-[#333333]">
            Exotic cities aren't just destinations; they're gateways to adventures waiting to be had...
          </p>
        </div>

        {/* Conclusion */}
        <div>
          <h1 className="text-[#1F3A93] text-2xl md:text-3xl pt-10">Conclusion</h1>
          <p className="pt-10 text-[#333333] text-base md:text-lg">
            Exotic cities are more than just places on a map; they are invitations to embark on journeys...
          </p>
          <p className="text-[#333333] pt-10 text-base md:text-lg">
            Whether you're drawn to the historical allure of Dubrovnik, the spiritual depth of Kyoto...
          </p>
        </div>

        {/* Bottom Share + Author */}
        <div className="flex flex-col items-start gap-3 mb-10 pt-6">
          <span className="text-[#333333] text-lg">Share this post</span>
          <div className="flex gap-4 pt-1">
            {[Facebook, Twitter, linkImg].map((icon, idx) => (
              <div key={idx} className="w-9 h-9 bg-[#1F3A93] rounded-full flex items-center justify-center cursor-pointer">
                <img src={icon} alt="Social Icon" className="w-6 h-6 md:w-7 md:h-7" />
              </div>
            ))}
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-10">
          <img src={user3} alt="Jessica Turner" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover" />
          <div>
            <div className="text-[#1F3A93] text-[18px] md:text-[20px] font-medium">Jessica Turner</div>
            <div className="text-[14px] md:text-[16px] text-[#333333]">Community manager</div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 mb-4 px-4 md:px-20 max-w-6xl mx-auto gap-4 md:gap-0">
        <div className="text-[#1F3A93] text-2xl whitespace-nowrap">Related posts</div>
        <button className="bg-[#1F3A93] text-white px-4 py-1 rounded-md text-sm whitespace-nowrap">View all</button>
      </div>

      {/* Related Post Cards */}
      <div className="px-4 md:px-20 pb-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-md overflow-hidden shadow-sm">
              <img src={post.image} alt={post.title} className="w-full h-48 md:h-60 object-cover rounded-t-2xl" />
              <div className="p-4">
                <Link to="/blog/exotic-cities-to-visit" className="text-blue-700 hover:underline text-sm md:text-base">
                  {post.category}
                </Link>
                <h3 className="text-lg md:text-xl text-[#1D3E80] mt-2">{post.title}</h3>
                <p className="text-xs md:text-sm italic text-[#333333] mt-2">{post.description}</p>
                <div className="flex items-center mt-4">
                  <img src={post.avatar} alt={post.author} className="w-12 h-12 md:w-20 md:h-20 rounded-full mr-2 object-cover" />
                  <div className="text-xs md:text-sm text-gray-600">
                    <p className="font-medium text-[#1D3E80]">{post.author}</p>
                    <p className="text-[10px] md:text-xs text-[#333333]">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
