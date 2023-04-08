import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';
import useAdmin from '../../Hooks/AdminHooks';
import useCustomer from '../../Hooks/CustomerHooks';

const Nav = () => {

    //use context
    const { user, logout } = useContext(authProvider)



    //is admin
    const [isAdmin] = useAdmin(user?.email)

    //is customer
    const [isCustomer] = useCustomer(user?.email)

    //handle logout
    const handleLogout = () => {

        logout()
            .then(res => {
            })

    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul data-aos='zoom-in' tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About Us</Link></li>
                            <li><Link to={'/blog'}>Blogs</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                            {
                                !isAdmin &&
                                <li><Link to={'/order'}>Orders</Link></li>
                            }

                            {
                                isCustomer &&
                                <li><Link to={'/Profile'}>Profile</Link></li>

                            }

                            {
                                isAdmin &&
                                <li><Link to={'/dashhome'}>Dashboard</Link></li>

                            }

                            {
                                user ?
                                    <>
                                        <li><Link to={'/signup'}>Signup</Link></li>
                                        <li><Link to={'/login'}>Login</Link></li>
                                    </>
                                    :
                                    <li><Link onClick={handleLogout}>Logout</Link></li>
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl font-bold"><span className='text-[#00A3FE]'>Helping</span><span className='text-[#ED7D2B]'>Hand</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/'}>Home</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/about'}>About Us</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/blog'}>Blogs</NavLink></li>

                        <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/contact'}>Contact</NavLink></li>
                        {
                            isCustomer &&
                            <>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/order'}>Orders</NavLink></li>

                                <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/Profile'}>Profile</NavLink></li>
                            </>
                        }

                        {
                            isAdmin &&
                            <li><NavLink className={({ isActive }) => isActive ? 'bg-transparent font-bold' : 'font-semibold'} to={'/dashhome'}>Dashboard</NavLink></li>

                        }

                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {
                        user ?
                            <Link onClick={handleLogout} className="btn rounded-full  text-white normal-case border-none px-8">Logout</Link>

                            :

                            <>
                                <Link to={'/login'} className="btn rounded-full bg-[#00A3FE] text-white hover:bg-[#466EB5] normal-case border-none px-8">Login</Link>
                                <Link to={'/signup'} className="btn lg:mx-3 rounded-full bg-[#ED7D2B] text-white hover:bg-[#FA9746] normal-case border-none px-8">Signup</Link>
                            </>

                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;