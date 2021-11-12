import React from 'react';
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
        </div>
    );
};

export default Home;