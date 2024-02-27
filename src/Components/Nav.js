import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const nav = () => {
  return (
    <>
    <nav>
        <ul className='flex justify-center items-center cursor-pointer bg-zinc-900 text-white p-7'>
            <li className='px-5 uppercase cursor-pointer'>
            <Link to="/">Home</Link>
            </li>
            <li className='px-5 uppercase cursor-pointer'>
                <Link to="/About">About</Link>
            </li>
            <li className='px-5 uppercase cursor-pointer'>
                <Link to="/Contact">Contact</Link>
            </li>
            <li className='px-5 uppercase cursor-pointer'>
                <Link to="/Services">Services</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default nav
