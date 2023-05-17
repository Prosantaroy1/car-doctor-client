import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, title, img, price} = service;
    return (
        <div>
            <div className="card w-96 h-[380px] bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
                 <img src={img} alt="Shoes" className="rounded-xl" />
               </figure>
               <div className="card-body">
                 <h2 className="card-title font-bold">{title}</h2>
                 <p className="card-price font-bold text-start text-[#FF3811]">Price:${price}</p>
                 <div className="card-actions">
                   <Link to={`/cheekout/${_id}`}>
                     <button className="btn btn-primary">Book Now</button>
                   </Link>
                 </div>
               </div>
            </div>
        </div>
    );
};

export default Service;