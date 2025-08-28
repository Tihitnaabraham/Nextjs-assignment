import React from 'react';
import HeroBanner from './components/HeroBanner';
import FreshSales from './components/FreshSales';
import BrowseByCategory from './components/BrowseByCategory';
import BestSellingProducts from './components/BestSellingProducts';
import ExploreProducts from './components/ExploreProducts';
import Navbar from '../shared-components/Navbar';
import Footer from '../shared-components/Footer';
import Header from '../shared-components/Header';
import MusicExperienceBanner from './components/MusicExperienceBanner';
import NewArrival from './components/NewArrival';
import TrustBadge from './components/TrustBadge';

const HomePage: React.FC = () => {
  return (
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
      {<TrustBadge />}


      { }
      <Footer />
    </div>
  );
};

export default HomePage;