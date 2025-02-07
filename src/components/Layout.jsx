import React from 'react';
import {Outlet} from "react-router-dom";
import Header from './Header';
// import Categories from './Categories';
// import FeaturedProducts from './FeaturedProducts';
import CategorySection from './CategorySection';
import ProductSection from './ProductSection';
import Footer from './Footer';


 function Layout() {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
      {/* <Categories />
      <FeaturedProducts /> */}
      {/* <Content />
      <MainSection />
      */}
    </div>
  );
}

export default Layout;
