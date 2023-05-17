import React, { useContext } from 'react';
import signup from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignup = event =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email, password)
        ///
        createUser(email, password)
         .then(result=>{
             const user = result.user;
             console.log(user)
         })
         .catch(error => {
            console.log(error)
         })
    }

    return (
        <div className="hero min-h-screen bg-base-200 mt-4 mb-4">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mr-12">
              <img src={signup} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            {/* From start */}
             <form onSubmit={handleSignup}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter your name?" className="input input-bordered" />
              </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Enter your email?" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="Enter your password?" className="input input-bordered" />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Signup" className="btn btn-primary"/>
              </div>
             </form>
              {/* From end */}
             <p className='text-center font-semibold'>
                    Already have a account? <Link className='font-bold text-orange-500' to='/login'>Login</Link>
             </p>
            </div>
          </div>
       </div>
     </div>
    );
};

export default SignUp;