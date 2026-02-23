import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatWeAre from "@/components/WhatWeAre";
import TourOfferings from "@/components/TourOfferings";
import SampleTour from "@/components/SampleTour";
import BeyondTheTour from "@/components/BeyondTheTour";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <WhatWeAre />
      <TourOfferings />
      <SampleTour />
      <BeyondTheTour />
      <Footer />
    </main>
  );
};

export default Index;
