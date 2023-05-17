import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import CheekTable from './CheekTable';

const CheekCard = () => {
    ///
    const {user} = useContext(AuthContext);
    const [cheeking, setCheeking] = useState([]);
    //
    const url = `http://localhost:5000/cheekout?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> setCheeking(data))
    },[])
    ///deleted data
   
     const handleDeleted= id =>{
        const proceed = confirm('Are you sure deleted')
        if(proceed){
            fetch(`http://localhost:5000/cheekout/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
                alert('Deleted Your Successful');
                const remaining = cheeking.filter(cheek => cheek._id !==id);
                setCheeking(remaining);
            })
        }
    
     
   }
   //update data
   const handleUpdate = id=>{
      fetch(`http://localhost:5000/cheekout/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
      })
      .then(res =>res.json())
      .then(data=>{
         console.log(data)
         if(data.modifiedCount > 0){
             const remaining = cheeking.filter(cheek => cheek._id !==id)
             const updated = cheeking.find(cheek => cheek._id ===id)
             updated.status= 'confirm'
             const newCheeking = [updated, ...remaining];
             setCheeking(newCheeking);

         }
      })
   }

    return (
        <div>
            <h2 className='text-3xl text-center mt-4 mb-3'>This is CheekCard Products</h2>
            <div className="overflow-x-auto w-full ">
          <table className="table w-full pr-48 ">
           {/* head */}
           <thead>
             <tr>
               <th>
                 <label>
                   <input type="checkbox" className="checkbox" />
                 </label>
               </th>
               <th>Img</th>
               <th>Sevice</th>
               <th>Date</th>
               <th>Price</th>
               <th>Status</th>
             </tr>
           </thead>
           <tbody>
            
             {
                cheeking.map(cheeked => <CheekTable
                 key={cheeked._id}
                 cheeked={cheeked}
                 handleDeleted={handleDeleted}
                 handleUpdate={handleUpdate}
                ></CheekTable>)
             }
             
           </tbody>
       </table>
       </div>
     </div>
    );
};

export default CheekCard; 
/*
 {
                cheeking.map(cheeked => <CheekTable
                 key={cheeked._id}
                 cheeked={cheeked}
                ></CheekTable>)
             }
*/