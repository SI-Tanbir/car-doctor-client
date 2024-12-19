
import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';

const Login = () => {
  const navigate=useNavigate()
    const location=useLocation();
      console.log('login location',location.state)

    const {signIn,setUser}=useContext(AuthContext);
    
    const handleLogin = (e) => {
      e.preventDefault();
      
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
      
      signIn(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          
          // Optional: Set the user information here or do other state management tasks
          console.log(user);
          
          // Post request for JWT token
          // axios.post('http://localhost:3000/jwt', user,{withCredentials:true})
          //   .then(function (response) {
          //     console.log('JWT Response:', response);
          //     if(response.data.success){
          //       navigate(location?.state ? location?.state : '/')
          //     }
          //     // You can process the response here (e.g., store JWT, navigate, etc.)
          //   })
          //   .catch(function (error) {
          //     console.error('JWT Error:', error);
          //   });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('Login Error:', errorMessage);
          confirm('Wrong credentials'); // Display an alert or confirmation
        });
    };
    

  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login