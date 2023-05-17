import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const CheekOut = () => {
  //
  const {user} = useContext(AuthContext);

    const services = useLoaderData();
    const {title, _id, price, img} = services;

    //
    const handleSubmit = event =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const price = from.price.value;
        const email = from.email.value;
        const date = from.date.value;
        const booking ={
            costomer: name,
            email,
            img,
            price,
            services_id: _id,
            service: title,
            date
        }
        console.log(booking)
        //POST DATA
        fetch(`http://localhost:5000/cheekout`, {
           method: 'POST',
           headers:{
            'content-type': 'application/json'
           },
           body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
        })
    } 

    return (
        <div>
            <h2 className='text-3xl text-center '>This is Book Cheek: {title}</h2>
            <form onSubmit={handleSubmit}>
               <div>
                   <div className="card-body grid grid-cols-1 md:grid-cols-2 ">
                         <div className="form-control">
                           <label className="label">
                             <span className="label-text">name</span>
                           </label>
                           <input type="text" defaultValue={user?.name} name='name' placeholder="name" className="input input-bordered" />
                         </div>
                         <div className="form-control">
                           <label className="label">
                             <span className="label-text">Services Price</span>
                           </label>
                           <input type="text" defaultValue={`$`+ price} name='price' placeholder="sevice price" className="input input-bordered" />
                         </div>
                    </div>
                    <div className="card-body grid grid-cols-1 md:grid-cols-2">
                         <div className="form-control">
                           <label className="label">
                             <span className="label-text">Email</span>
                           </label>
                           <input type="text" name='email' placeholder="email" className="input input-bordered" />
                         </div>
                         <div className="form-control">
                           <label className="label">
                             <span className="label-text">Date</span>
                           </label>
                           <input type="date" name='date' className="input input-bordered" />
                         </div>
                    </div>
                    <div className="form-control mb-4">
                           <input type="submit" value="submit" className="btn btn-primary"/>
                    </div>
               </div>
            </form>
        </div>
    );
};

export default CheekOut;