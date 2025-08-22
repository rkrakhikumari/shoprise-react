import React from 'react';
import aboutImg from "../assets/about.png";
import adsImg from "../assets/ads.png";
import simliyImg from "../assets/simily.png";
import User from "../assets/veruser.png";
import david from "../assets/david.png";

const stats = [
  {
    id: 'ads',
    icon: adsImg,
    value: "5000+",
    label: "Ads",
  },
  {
    id: 'customers',
    icon: simliyImg,
    value: "3264+",
    label: "Happy Customers",
  },
  {
    id: 'verified-users',
    icon: User,
    value: "2001+",
    label: "Verified Users",
  },
];

const testimonials = [
  {
    id: 'testimonial-1',
    name: "David Lee",
    title: "Director, AutoSale",
    image: david,
    message: "We are a dealer car company and sell a lot of cars here. Thanks",
  },
  {
    id: 'testimonial-2',
    name: "David Lee",
    title: "Director, AutoSale",
    image: david,
    message: "We are a dealer car company and sell a lot of cars here. Thanks",
  },
  {
    id: 'testimonial-3',
    name: "David Lee",
    title: "Director, AutoSale",
    image: david,
    message: "We are a dealer car company and sell a lot of cars here. Thanks",
  },
];

const AboutUs = () => {
  return (
    <main>
      {/* About Section */}
      <section className='flex flex-col-reverse lg:flex-row justify-end px-4 sm:px-7'>
        <div className="w-full lg:w-2/3 pr-0 lg:pr-2">
          <article>
            <h1 className="font-inter font-medium text-lg sm:text-xl lg:text-[22px] text-[#1F3A93] pb-3">
              About ShopRise - Elevating Your Local Shopping Experience
            </h1>
            <div className="text-[#333333] font-inter text-base sm:text-lg lg:text-[18px]">
              <p className='pb-4 sm:pb-5'>
                Welcome to <a className='text-[#FF7F50] underline'>ShopRise</a>, your premier local Marketplace
              </p>
              <p className="pb-4 sm:pb-5">
                ShopRise isn't just a marketplace; it's a community revolutionizing local buying and selling.
              </p>
              <p className="pb-6 sm:pb-8">
                Founded in 2023, ShopRise has swiftly become a leading mobile marketplace for local buyers and sellers across the U.S. Our mission is clear: to create the most reliable and user-friendly local marketplace, empowering our users to engage in transactions with confidence and ease.
              </p>
            </div>
          </article>

          <article>
            <h2 className='font-inter font-medium text-lg sm:text-xl lg:text-[22px] text-[#1F3A93] pb-3 sm:pb-4'>
              Our Journey
            </h2>
            <p className='text-[#333333] font-inter text-base sm:text-lg lg:text-[18px] pb-3 sm:pb-4'>
              ShopRise started with a vision to streamline the local buying and selling process, making it as straightforward and safe as possible. Our platform is built on the belief that everyone deserves access to a marketplace that is not just efficient but also secure and centered around the community.
            </p>
          </article>

          <article>
            <h2 className='font-inter font-medium text-lg sm:text-xl lg:text-[22px] text-[#1F3A93] pb-3 sm:pb-4'>Why ShopRise?</h2>
            <div className='text-[#333333] font-inter text-base sm:text-lg lg:text-[18px] pb-3 sm:pb-4'>
              <p className='pb-2 sm:pb-3'><span className='text-[#FF7F50]'>Trust and Safety:</span> We prioritize your safety with features like secure messaging, verified community meet-up spots, and a comprehensive rating system.</p>
              <p className='pb-2 sm:pb-3'><span className='text-[#FF7F50]'>Ease of Use:</span> Our app's intuitive design makes buying and selling a breeze—just a few taps and you're set!</p>
              <p className='pb-2 sm:pb-3'><span className='text-[#FF7F50]'>Eco-Friendly:</span> Promoting local transactions helps reduce environmental impact, supporting sustainability.</p>
              <p className='pb-2 sm:pb-3'><span className='text-[#FF7F50]'>Community-Centric:</span> At ShopRise, we're building more than a platform; we're nurturing a community, fostering connections that enrich local neighborhoods.</p>
            </div>
          </article>

          <article>
            <h2 className='font-inter font-medium text-lg sm:text-xl lg:text-[22px] text-[#1F3A93] pb-3 sm:pb-4'>Visioning the Future</h2>
            <p className='text-[#333333] font-inter text-base sm:text-lg lg:text-[18px] pb-3 sm:pb-4'>
              Looking forward, ShopRise is dedicated to innovating and enhancing our services. Our aim is to broaden our reach, ensuring every user experience is seamless, secure, and satisfying.
            </p>
          </article>

          <article>
            <h2 className='font-inter font-medium text-lg sm:text-xl lg:text-[22px] text-[#1F3A93] pb-3 sm:pb-4'>Join the ShopRise Community</h2>
            <p className='text-[#333333] font-inter text-base sm:text-lg lg:text-[18px] pb-5 sm:pb-7'>
              Whether you're decluttering, hunting for a bargain, or starting a local business venture, ShopRise is your go-to platform. Download our app today and join a thriving community of users who choose ShopRise for all their local <span className='text-[#FF7F50] underline'>buying and selling needs.</span>
            </p>
          </article>
        </div>

        {/* Image */}
        <div className='w-full lg:w-1/3 mb-6 lg:mb-0'>
          <img src={aboutImg} alt="Illustration showing ShopRise platform" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* How It Works */}
      <section className='bg-[#F7F7F7] px-4 sm:px-6 pt-2 pb-4'>
        <h2 className='font-inter font-medium text-xl sm:text-2xl lg:text-[30px] text-[#1F3A93] pb-3'>How it Works</h2>
        <p className='text-[#333333] font-inter text-base sm:text-lg lg:text-[18px] pb-4'>
          ShopRise: The premier local marketplace where simplicity meets trustworthiness. Elevate your buying and selling experience with us.
        </p>
        <ol className='text-[#333333] font-inter text-base sm:text-lg lg:text-[18px] list-decimal list-outside pl-4 sm:pl-6 space-y-3'>
          <li>Explore a plethora of exceptional deals in your vicinity, from elegant furniture and cutting-edge electronics to pristine vehicles. Discover the joy of purchasing directly from your neighbors, fostering community ties while you shop.</li>
          <li>Engage directly with sellers via our secure in-app messaging platform. Effortlessly negotiate prices and coordinate convenient meeting times, ensuring a seamless and professional transaction experience.</li>
          <li>Dive into user profiles to glean insights from ratings, badges, and a comprehensive transaction history. Make informed decisions with the confidence that you’re interacting with credible members of our community.</li>
          <li>Transform your possessions into potential profit! Just snap a photo with your smartphone and post your item in under 30 seconds. Effortless listing, rapid results.</li>
          <li>Be part of a thriving community! Join millions of discerning individuals on the paramount mobile platform dedicated to local commerce. Where buyers meet sellers, and community connections are forged.</li>
        </ol>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 bg-white text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-15 mb-8 sm:mb-12">
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-center gap-3 sm:gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <img src={stat.icon} alt={`${stat.label} icon`} className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#333333]">{stat.value}</h3>
                <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 bg-[#F7F7F7] text-center">
        <h2 className="text-xl sm:text-2xl lg:text-[30px] font-medium text-[#1F3A93] mb-6">What People Say</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-white rounded-md shadow-sm overflow-hidden w-full sm:w-[300px] md:w-[320px] lg:w-[350px]"
            >
              <div className="p-4 text-left">
                <p className="text-gray-800 text-sm sm:text-base mb-4">{testimonial.message}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="text-sm sm:text-base font-semibold text-[#333333]">{testimonial.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
