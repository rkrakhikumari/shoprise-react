import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/loginPage";
import ChangePassword from "./components/changePassword";
import Header from "./components/header";
import ProductGrid from "./components/products";
import Footer from "./components/footer";
import SigninHeader from "./components/signinHeader";
import NotificationPanel from "./components/notifications";
import Register from "./components/register";
import FAQContent from "./components/faq";
import BlogComponent from "./components/blogComponent";
import AboutUs from "./components/aboutUs";
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
import SettingContent from "./components/settingPage"
import ChooseAdType from "./components/chooseAdType"



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
