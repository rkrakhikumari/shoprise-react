import React from 'react';
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import blog4 from "../assets/blog4.png"
import blog5 from "../assets/blog5.png"
import blog6 from "../assets/blog6.png"
import blog7 from "../assets/blog7.png"
import blog8 from "../assets/blog8.png"
import blog9 from "../assets/blog9.png"
import john from "../assets/john.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"
import user5 from "../assets/user5.png"
import user6 from "../assets/user6.png"
import user7 from "../assets/user7.png"
import user8 from "../assets/user8.png"
import user9 from "../assets/user9.png"


const blogPosts = [
  {
    category: "Technology News",
    title: "The Latest Technology Trends",
    description: "Discover the latest technological innovations and their impact on our daily lives.",
    author: "John Smith",
    date: "11 Jan 2022",
    image: blog1,
    avatar: john, 
  },
  {
    category: "Health and Well-being",
    title: "Tips for Healthy Eating",
    description: "Learn how to maintain a balanced diet for a healthier life.",
    author: "Lisa Miller",
    date: "12 Sept 2022",
    image: blog2,
    avatar: user2,
  },
  {
    category: "Travel and Adventure",
    title: "Exotic Cities to Visit",
    description: "Discover unique urban destinations around the world.",
    author: "Jessica Turner",
    date: "21 Jan 2023",
    image: blog3,
    avatar: user3,
  },
  {
    title: "Future Smartphones",
    category: "Technology News",
    description: "An overview of the next generations of smartphones and their advanced features.",
    author: "David Brown",
    date: "17 Apr 2022",
    image: blog4,
    avatar: user4,
  },
  {
    title: "World Cuisine Recipes",
    category: "Food and Gastronomy",
    description: "Explore delicious international recipes to try at home.",
    author: "Sophia Martinez",
    date: "25 May 2023",
    image: blog5,
    avatar: user5,
  },
  {
    title: "Exploring the Natural Wonders",
    category: "Travel and Adventure",
    description: "Breathtaking destinations for nature and adventure enthusiasts.",
    author: "Daniel White",
    date: "9 Aug 2023",
    image: blog6,
    avatar: user6,
  },
  {
    title: "The Rise of 5G Technology",
    category: "Technology News",
    description: "Explore the rapid advancement of 5G technology and its potential to revolutionize connectivity.",
    author: "Mark Roberts",
    date: "11 Jan 2022",
    image: blog7,
    avatar: user7,
  },
  {
    title: "The Secrets of Pastry",
    category: "Food and Gastronomy",
    description: "Tips to become an expert pastry chef and create incredible desserts.",
    author: "Maria Rodríguez",
    date: "5 Dec 2022",
    image: blog8,
    avatar: user8,
  },
  {
    title: "The Ethical Implications of AI",
    category: "Technology News",
    description: "Explore the ethical dilemmas and considerations surrounding the use of AI in various sectors.",
    author: "Alex Johnson",
    date: "12 Oct 2022",
    image: blog9,
    avatar: user9,
  },
];


const BlogComponent = () => {
  return (
        <div>
                <div className='flex items-center justify-center pt-4 px-4'>
                    <div className="text-center">

                    <h1 className="font-inter font-medium text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[#1F3A93]">
                        Discover the World of Knowledge <br className="hidden sm:block" /> with ShopRise
                    </h1>
                    <p className='text-[#333333] pt-2 text-sm sm:text-base'>Join us in this exciting adventure of discovery and learning.</p>
                    </div>

                </div>
                <div className="flex justify-center gap-3 sm:gap-6 md:gap-15 mt-4 sm:mt-6 flex-wrap px-4">
                <button className="bg-[#1F3A93] text-white px-3 py-2 rounded-md text-xs sm:text-sm font-medium">
                    View all
                </button>
                <span className="text-gray-800 text-xs sm:text-sm">Technology News</span>
                <span className="text-gray-800 text-xs sm:text-sm">Health and Well-being</span>
                <span className="text-gray-800 text-xs sm:text-sm">Travel and Adventure</span>
                <span className="text-gray-800 text-xs sm:text-sm">Food</span>
                </div>

                <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 py-6 sm:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-md shadow-sm overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-48 sm:h-52 md:h-60 object-cover rounded-2xl" />
                        <div className="p-3 sm:p-4">
                            <Link to="/blog/exotic-cities-to-visit" className="text-blue-700 hover:underline text-xs sm:text-sm">
                            {post.category}
                            </Link>
                        <h3 className="text-base sm:text-lg md:text-xl text-[#1D3E80] mt-2">{post.title}</h3>
                        <p className="text-xs sm:text-sm italic text-[#333333] mt-2">{post.description}</p>
                        <div className="flex items-center mt-3 sm:mt-4">
                            <img src={post.avatar} alt={post.author} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mr-2" />
                            <div className="text-xs sm:text-sm text-gray-600">
                            <p className="font-medium text-[#1D3E80]">{post.author}</p>
                            <p className="text-xs text-[#333333]">{post.date}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
        <div className="flex justify-center items-center gap-1 sm:gap-2 p-4 mb-6 sm:mb-8">
        <button className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-sm sm:text-base">&lt;</button>
        <button className="px-2 sm:px-3 py-1 bg-[#D3D3D3] text-sm sm:text-base">1</button>
        <button className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-sm sm:text-base">2</button>
        <button className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-sm sm:text-base">3</button>
        <span className="px-1 sm:px-2 text-sm sm:text-base">...</span>
        <button className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-sm sm:text-base">9</button>
        <button className="px-2 sm:px-3 py-1 text-sm sm:text-base">&gt;</button>
      </div>

        </div>
  );
};

export default BlogComponent;