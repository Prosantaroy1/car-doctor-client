import React from 'react';

const CheekTable = ({cheeked, handleDeleted, handleUpdate}) => {
    const {_id, date, img, price, service, status} = cheeked;
    //
    
    return (
        <>
              <tr>
               <th>
                 <label>
                  <button onClick={()=> handleDeleted(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                 </label>
               </th>
               <td>
                 <div className="flex items-center space-x-3">
                   <div className="avatar">
                     <div className="w-32 rounded">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                       
                     </div>
                   </div>
                 </div>
               </td>
               <td>
                 {service}
               </td>
               <td>{date}</td>
               <td>{price}</td>
               <th>
                {
                    status ==='confirm' ? <span>Confirm</span>:
                    <button onClick={()=> handleUpdate(_id)} className="btn btn-ghost btn-xs">confirm please</button>
                }
               </th>
             </tr>
        
        </>
    );
};

export default CheekTable;