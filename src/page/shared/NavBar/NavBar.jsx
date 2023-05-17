import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';


const NavBar = () => {

   const {user, logOut} = useContext(AuthContext);

    const navItem = <>
       <li><Link>Home</Link></li>
       <li><Link>About</Link></li>
       <li><Link>Service</Link></li>
       
          {
            user && <li><Link to='/cheekcard'>CheekCard</Link></li>
         }
        
        
       <li><Link>Blog</Link></li>
       <li><Link>Contact</Link></li>
    </>
    ///logOut
     const handleLogout =()=>{
       logOut()
       .then()
       .catch(error =>{
          console.log(error)
       })
     }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
               {navItem}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
                <img src={logo} alt="" className='w-16'/>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {navItem}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {
            user && <p className='text-red-500 font-bold'>{user.email}</p>
          }
          {
            user? 
              <button onClick={handleLogout} className="btn btn-outline btn-secondary">LogOut</button> 
             
             :
            <Link to='/login'>
            <button className="btn btn-outline btn-secondary">Login</button>
           </Link> 
           
          }
        </div>
      </div>
    );
};

export default NavBar;