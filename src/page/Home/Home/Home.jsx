import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mb-4 mt-2'>
          <Banner/>
          <About/>
          <Services/> 
        </div>
    );
};

export default Home;