import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./components/heroSection";
import CoreCapabilities from "./components/coreCapabilities";
import WorksWithYourStack from "./components/worksWithYourStack";
import CustomerReviews from "./components/customerReviews";
import ReadyToTry from "./components/readyToTry";
import Footer from "./components/footer";
import CoreCapabilitiesTitle from "./components/coreCapabilities/components/CoreCapabilitiesTitle";

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full items-center flex-grow bg-black-A100">
      <HeroSection />
      <CoreCapabilitiesTitle />
      <CoreCapabilities />
      <WorksWithYourStack />
      <CustomerReviews />
      <ReadyToTry />
      <Footer />
    </div>
  );
};

export default LandingPage;
