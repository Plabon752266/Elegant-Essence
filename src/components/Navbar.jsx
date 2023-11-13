import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const {user , loading ,logout,setUser} = useContext(UserContext)
  const navlist = <>
    <li><NavLink to={'/'}>Home</NavLink></li>

    <li>
      <NavLink to={'/addproduct'}>Add Product</NavLink>
      </li>
      </>
    const signout =()=>{
     logout().then(() => {
      // Sign-out successful.
      setUser(null)
      Swal.fire(
        'Successfully Logout',
        
      )
    }).catch((error) => {
      // An error happened.
    });
    }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlist}
          </ul>
        </div>
        <a className="p-4 text-4xl font-semibold">Elegant-Essence</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlist}
        </ul>
      </div>
      <div className="navbar-end">
        {
          !user?.email ? <Link to={'/login'}className="btn">Login</Link> : <button className="btn" onClick={signout}>Logout</button>
          
        }

       
      </div>
    </div>
  );
};

export default Navbar;