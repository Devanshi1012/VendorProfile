import React from "react";
import Profile from "./components/Profile";
import Overview from "./components/Overview";
import PhotoGallery from "./components/PhotoGallery";
import ReviewSection from "./components/ReviewSection";
import MoreInformationSection from "./components/MoreInformationSection";
import SimilarVendorsSection from "./components/SimilarVendorSection";
import AboutSection from "./components/About";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Profile />
      <Overview />
      <PhotoGallery />
      <ReviewSection />
      <MoreInformationSection />
      <SimilarVendorsSection />
      <AboutSection />
    </>
  );
}

export default App;
