import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
   // console.log(services);
    return (
        <div className='mt-5 text-center'>
            <div>
                <h3 className='font-bold text-2xl text-[#FF3811]'>Service</h3>
                <h1 className='font-semibold text-4xl '>Our Service Area</h1>
                <p className='text-[#737373]'>
                 the majority have suffered alteration in some form, by injected humour,
                 or randomised<br/> words which don't look even slightly believable. 
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 mt-3'>
              {
                  services.map(service => <Service
                   key={service._id}
                   service={service}
                  ></Service>)
              }
            </div>
        </div>
    );
};

export default Services;