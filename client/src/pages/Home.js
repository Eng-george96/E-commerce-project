import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement.js'
import Navbar from '../components/navbar/Navbar.js';
import Slider from '../components/Slider.js';
import Categories from '../components/Categories.js';
import Products from '../components/Products.js';
import NewLetter from '../components/newletter/NewLetter.js';
import Footer from '../components/footer/Footer.js';

const Container = styled.div`
overflow:hidden;
`;
const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
       <NewLetter/>
       <Footer/>
    </Container>
  )
}

export default Home 