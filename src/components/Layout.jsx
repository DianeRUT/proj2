import React from 'react';
import {Outlet} from "react-router-dom";
import Header from './Header';
// import Categories from './Categories';
// import FeaturedProducts from './FeaturedProducts';
import Content from './Content';
import MainSection from './MainContent';
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
