import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo/Logo.png'

const Navbar = () => {

    const menus = <>
        <li><Link to="/">Home</Link></li>
        <li><Link>Pricing</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menus
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl font-bold"> <img className='img-fluid h-14' src={Logo} alt="" /> <span className='text-[#8c94f7]'>Tele-</span>Up</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menus
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='mr-3 fw-light'>Login</Link>
                    <Link className="btn btn-outline border-[#8c94f7] rounded-3xl hover:bg-[#8c94f7] hover:border-[#8c94f7]">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;