import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    //
    const [error, setError] = useState('')

    const handleLogin = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        //
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
            setError('Did not match email or password', error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mt-4 mb-4">
            <div className="hero-content flex-col lg:flex-row">
              <div className="text-center mr-12">
                  <img src={login} alt="" />
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                 <form onSubmit={handleLogin}>
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
                    <input type="submit" value="Login" className="btn btn-primary"/>
                  </div>
                 </form>
                 <p className='text-center font-semibold'>
                    Have a New Account Created? <Link className='font-bold text-orange-500' to='/signup'>Signup</Link>
                 </p>
                 <p className='font-bold text-red-500'>
                    {error}
                 </p>
                </div>
              </div>
          </div>
        </div>
    );
};

export default Login;