import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import ChangePassword from "./components/ChangePassword";
import Header from "./components/Header";
import ProductGrid from "./components/Products";
import Footer from "./components/Footer";
import SigninHeader from "./components/SigninHeader";
import NotificationPanel from "./components/Notifications";
import Register from "./components/Register";
import FAQContent from "./components/Faq";
import BlogComponent from "./components/BlogComponent";
import AboutUs from "./components/AboutUs";
import BlogPostPage from "./components/BlogPostPage";
import ProductPage from "./components/ProductPage";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./components/Dashboard";
import Favourites from "./components/Favourites";
import Purchasing from "./components/Purchasing"; 
import SalesOrders from './components/SalesOrders'; 
import VehicleAdForm from './components/VehicleFormPage';
import RealEstateAdForm from "./components/RealEstateFormPage"
import ItemAdForm from "./components/ItemFormPage"
import ChatPage from "./components/ChatPage"
import SettingContent from "./components/SettingPage"
import ChooseAdType from "./components/ChooseAdType"



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Public Landing */}
        <Route path="/" element={<><Header /><ProductGrid /><Footer /></>} />

        {/* Signed-in Landing */}
        <Route path="/john-doe" element={<><SigninHeader /><ProductGrid /><Footer /></>} />

        {/* Static Content */}
        <Route path="/faq" element={<><Header /><FAQContent /><Footer /></>} />
        <Route path="/blog" element={<><Header /><BlogComponent /><Footer /></>} />
        <Route path="/about-us" element={<><Header /><AboutUs /><Footer /></>} />
        <Route path="/blog/exotic-cities-to-visit" element={<><BlogPostPage /><Footer /></>} />

        {/* Product Detail */}
        <Route path="/product" element={<><SigninHeader /><ProductPage /></>} />

        {/* Notifications */}
        <Route path="/notifications" element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <NotificationPanel />
          </div>
        } />
        {/* Dashboard Area */}
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/favourites" element={<DashboardLayout><Favourites /></DashboardLayout>} />
        <Route path="/purchasing" element={<DashboardLayout><Purchasing /></DashboardLayout>} />
        <Route path="/chat" element={<DashboardLayout><ChatPage /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><SettingContent /></DashboardLayout>} />

        <Route path="/sales" element={<DashboardLayout><SalesOrders /></DashboardLayout>} />
        <Route path="/item" element={<DashboardLayout><ItemAdForm/></DashboardLayout>} />
        <Route path="/new-listing" element={<DashboardLayout><ChooseAdType /></DashboardLayout>}/>


  <Route path="vehicle" element={<DashboardLayout><VehicleAdForm/></DashboardLayout>} />
  <Route path="real-estate" element={<DashboardLayout><RealEstateAdForm/></DashboardLayout>} />




        


        {/* Catch-All Route */}
        <Route path="*" element={<h1 className="text-center text-2xl mt-20">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
