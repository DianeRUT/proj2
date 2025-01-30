import React from 'react';
import Header from './Header';
// import Categories from './Categories';
// import FeaturedProducts from './FeaturedProducts';
import Content from './Content';
import MainSection from './MainContent';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      {/* <Categories />
      <FeaturedProducts /> */}
      <Content />
      <MainSection />
      <Footer />
    </div>
  );
}

export default Home;
