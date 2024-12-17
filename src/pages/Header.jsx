
import { Link, useNavigate } from 'react-router'
import logo from '../assets/logo.svg'
import { TfiShoppingCartFull } from "react-icons/tfi";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {

  const {user,handleLogout}=useContext(AuthContext);
  const navigate =useNavigate()
  const logoutAndnavigate =()=>{
    handleLogout();
    navigate('/login')
    
  }

  return (

    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        
      </div>

      <Link className="btn btn-ghost text-xs"> <img width={70} src={logo} alt="car-logo"  /></Link>

    </div>
    <div>
      <ul className='flex gap-10 font-extrabold'>
        <Link to={'/'}>Home</Link>
        <li>About</li>
        <li>Sevice</li>
        <li>Blog</li>
        <li>Contract</li>
        <Link to={'/login'}>Login</Link>
        {user && <>   <Link to={'/bookings'}>bookings</Link>  

      <button>

      <li onClick={logoutAndnavigate} >Signout</li>
      </button>
        </>}

        
        </ul>
    </div>


   
   
    
  
    <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn">
      <div className="indicator text-2xl">
      <TfiShoppingCartFull />

        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
      <button className="border-2 p-3 rounded border-red-400 text-red-600 font-bold">Appointment</button>
    </div>
  </div>
  )
}

export default Header