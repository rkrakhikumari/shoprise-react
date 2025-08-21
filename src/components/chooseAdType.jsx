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
            className="mb-6 text-[#333] flex items-center gap-2"
          >
            <img src={arrowImg} alt="Back" className="w-6 h-6" />
          </button>
    <div className="flex flex-col items-center justify-center mt-20">
      
      <h2 className="text-center text-[#1F3A93] font-semibold text-xl mb-10">
        Choose the type of ad
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {/* Item */}
        <div
          onClick={() => navigate("/item")}
          className="w-[220px] h-[240px] bg-[#F2F2F2] p-5 rounded-xl flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="rounded-full bg-[#E5E5E5] w-20 h-20 mb-4 flex items-center justify-center">
            <img src={itemImg} alt="item" className="w-10 h-10" />
          </div>
          <h3 className="text-[#1F3A93] font-semibold text-center text-base mb-1">Item for sale</h3>
          <p className="text-center text-sm text-[#333]">Create a single ad for one or more items for sale.</p>
        </div>

        {/* Vehicle */}
        <div
          onClick={() => navigate("/vehicle")}
          className="w-[220px] h-[240px] bg-[#F2F2F2] p-5 rounded-xl flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="rounded-full bg-[#E5E5E5] w-20 h-20 mb-4 flex items-center justify-center">
            <img src={vehicleImg} alt="vehicle" className="w-18 h-17" />
          </div>
          <h3 className="text-[#1F3A93] font-semibold text-center text-base mb-1">Vehicle for sale</h3>
          <p className="text-center text-sm text-[#333]">Sell a car, truck, or other type of vehicle.</p>
        </div>

        {/* Real estate */}
        <div
          onClick={() => navigate("/real-estate")}
          className="w-[220px] h-[240px] bg-[#F2F2F2] p-5 rounded-xl flex flex-col items-center justify-center cursor-pointer"
        >
          <div className="rounded-full bg-[#E5E5E5] w-20 h-20 mb-4 flex items-center justify-center">
            <img src={realImg} alt="real estate" className="w-17 h-15" />
          </div>
          <h3 className="text-[#1F3A93] font-semibold text-center text-base mb-1 leading-tight">
            Real estate for sale or rent
          </h3>
          <p className="text-center text-sm text-[#333]">Place an ad for a house or apartment for sale or rent.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChooseAdType;
