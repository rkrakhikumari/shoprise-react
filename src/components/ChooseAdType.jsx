import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import itemImg from "../assets/item.png";
import vehicleImg from "../assets/vehicle.png";
import realImg from "../assets/real.png";
import arrowImg from "../assets/arrow.png";

const ChooseAdType = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-[#333] flex items-center gap-2 cursor-pointer"
        type="button"
        aria-label="Go back"
      >
        <img src={arrowImg} alt="Back arrow icon" className="w-6 h-6" />
      </button>
      <main className="flex flex-col items-center justify-center mt-20" role="main">
        <h2 className="text-center text-[#1F3A93] font-semibold text-xl mb-10">
          Choose the type of ad
        </h2>

        <div className="flex flex-wrap gap-8 justify-center" role="list">
          {/* Item */}
          <button
            onClick={() => navigate("/item")}
            className="w-[220px] h-[240px] bg-[#F2F2F2] p-5 rounded-xl flex flex-col items-center justify-center cursor-pointer"
            type="button"
            aria-label="Create an item for sale ad"
            role="listitem"
          >
            <div className="rounded-full bg-[#E5E5E5] w-20 h-20 mb-4 flex items-center justify-center" aria-hidden="true">
              <img src={itemImg} alt="Item icon" className="w-10 h-10" />
            </div>
            <h3 className="text-[#1F3A93] font-semibold text-center text-base mb-1">Item for sale</h3>
            <p className="text-center text-sm text-[#333]">Create a single ad for one or more items for sale.</p>
          </button>

          {/* Vehicle */}
          <button
            onClick={() => navigate("/vehicle")}
            className="w-[220px] h-[240px] bg-[#F2F2F2] p-5 rounded-xl flex flex-col items-center justify-center cursor-pointer"
            type="button"
            aria-label="Create a vehicle for sale ad"
            role="listitem"
          >
            <div className="rounded-full bg-[#E5E5E5] w-20 h-20 mb-4 flex items-center justify-center" aria-hidden="true">
              <img src={vehicleImg} alt="Vehicle icon" className="w-16 h-16" />
            </div>
            <h3 className="text-[#1F3A93] font-semibold text-center text-base mb-1">Vehicle for sale</h3>
            <p className="text-center text-sm text-[#333]">Sell a car, truck, or other type of vehicle.</p>
          </button>

          {/* Real estate */}
          <button
            onClick={() => navigate("/real-estate")}
            className="w-[220px] h-[240px] bg-[#F2F2F2] p-5 rounded-xl flex flex-col items-center justify-center cursor-pointer"
            type="button"
            aria-label="Create a real estate ad for sale or rent"
            role="listitem"
          >
            <div className="rounded-full bg-[#E5E5E5] w-20 h-20 mb-4 flex items-center justify-center" aria-hidden="true">
              <img src={realImg} alt="Real estate icon" className="w-16 h-14" />
            </div>
            <h3 className="text-[#1F3A93] font-semibold text-center text-base mb-1 leading-tight">
              Real estate for sale or rent
            </h3>
            <p className="text-center text-sm text-[#333]">Place an ad for a house or apartment for sale or rent.</p>
          </button>
        </div>
      </main>
    </>
  );
};

export default ChooseAdType;
