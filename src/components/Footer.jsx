import React, { useState } from 'react';
import faceImg from "../assets/facebook.png";
import instaImg from "../assets/insta.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
  };

  return (
    <footer className="bg-[#F7F7F7] pt-6 sm:pt-8 pb-4 sm:pb-6" role="contentinfo">
      <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 mb-6 sm:mb-8">
          {/* Left - Logo & Description */}
          <div className="lg:w-1/3">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#D3D3D3] rounded-full mr-2 sm:mr-3" aria-hidden="true"></div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">ShopRise</h2>
            </div>
            <p className="text-[#333333] text-sm leading-relaxed">
              ShopRise is not just a marketplace; it's a commitment. A commitment to uncompromised quality, unparalleled user experience, and unwavering integrity.
            </p>
          </div>

          {/* Middle - Links */}
          <nav aria-label="Footer navigation" className="lg:w-1/3 flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex-1">
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-[#FF7F50] text-sm hover:underline" aria-label="All listing">
                    All listing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#333333] text-sm hover:underline" aria-label="About us">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#333333] text-sm hover:underline" aria-label="FAQ">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#333333] text-sm hover:underline" aria-label="Blog">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="text-[#333333] text-sm hover:underline" aria-label="Privacy Policy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#333333] text-sm hover:underline" aria-label="Terms and Conditions">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#333333] text-sm hover:underline" aria-label="Shipping Policy">
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Right - Newsletter */}
          <div className="lg:w-1/3">
            <h3 className="text-[#333333] text-base sm:text-lg font-medium mb-2 sm:mb-2">
              Subscribe to our newsletter
            </h3>
            <form
              className="flex mb-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubscribe();
              }}
              aria-label="Subscribe to newsletter form"
            >
              <div className="flex w-full border border-gray-300 rounded-full overflow-hidden text-[#333333]">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm focus:outline-none placeholder-[#333333] min-w-0"
                  autoComplete="email"
                  required
                  aria-required="true"
                />
                <button
                  type="submit"
                  className="bg-[#FF7F50] text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#FF7F50] cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-end" role="region" aria-label="Social media links">
              <div className="flex flex-row sm:flex-col gap-4 sm:gap-3 sm:space-y-0">
                <button
                  type="button"
                  aria-label="Facebook"
                  className="focus:outline-none focus:ring-2 focus:ring-[#FF7F50] rounded cursor-pointer"
                >
                  <img src={faceImg} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
                <button
                  type="button"
                  aria-label="Instagram"
                  className="focus:outline-none focus:ring-2 focus:ring-[#FF7F50] rounded cursor-pointer"
                >
                  <img src={instaImg} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-gray-200 gap-4">
          <button
            type="button"
            className="bg-[#1F3A93] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium order-2 sm:order-1 focus:outline-none focus:ring-2 focus:ring-[#FF7F50] cursor-pointer"
            aria-label="Sell on ShopRise"
          >
            Sell on ShopRise
          </button>
          <p
            className="text-[#000000] text-xs sm:text-sm text-center order-1 sm:order-2"
            aria-label="Copyright notice"
          >
            © All Right Reserved by | ShopRise | Copyright 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
