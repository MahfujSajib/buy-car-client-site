import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import OurPartners from '../OurPartners/OurPartners';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <OurPartners></OurPartners>
            <Footer></Footer>
        </div>
    );
};

export default Home;