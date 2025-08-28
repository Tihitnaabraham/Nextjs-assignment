import Image from "next/image";
import React from 'react';
import HeroBanner from "./home/components/HeroBanner";
import FreshSales from "./home/components/FreshSales";
import BrowseByCategory from "./home/components/BrowseByCategory";
import BestSellingProducts from "./home/components/BestSellingProducts";
import ExploreProducts from "./home/components/ExploreProducts";
import Navbar from "./shared-components/Navbar";
import Footer from "./shared-components/Footer";
import Header from "./shared-components/Header";
import MusicExperienceBanner from "./home/components/MusicExperienceBanner";
import NewArrival from "./home/components/NewArrival";
import ServiceFeatures from "./home/components/TrustBadge";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gray-50">
        { }
        <Header />
        { }
        <Navbar />

        { }
        <HeroBanner />

        { }
        <FreshSales />

        { }
        <BrowseByCategory />

        { }
        <BestSellingProducts />

        { }
        <MusicExperienceBanner />


        { }
        {<ExploreProducts />}
        { }
        {<NewArrival />}

        { }
        {<ServiceFeatures />}


        { }
        <Footer />
      </div>

    </div>
  );
}

