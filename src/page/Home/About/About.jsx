import React from 'react';
import aboutImg1 from '../../../assets/images/about_us/person.jpg'
import aboutImg2 from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen mt-3 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className='lg:w-1/2 relative'>
                 <img src={aboutImg1} alt="" className='w-3/4 rounded-lg shadow-2xl'/>
                 <img src={aboutImg2} alt="" className='w-1/2 absolute right-5 top-1/2 
                 rounded-lg shadow-2xl border-8 border-white'/>
              </div>
              <div  className='lg:w-1/2'>
                <h3 className='text-3xl font-bold text-[#FF3811]'>About us</h3>
                <h1 className="text-4xl font-bold">
                   We are qualified<br/> & of experience<br/> in this field
                </h1>
                <p className="py-3 font-semibold">
                  There are many variations of passages of Lorem Ipsum available, but the majority 
                   have suffered alteration in some form,
                   by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <p className="py-3 font-semibold">
                  the majority have suffered alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable. 
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
        </div>
    );
};

export default About;