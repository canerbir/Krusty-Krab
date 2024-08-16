import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"


const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex w-full mx-auto justify-between items-center'>
                <div className='ml-[-250px] hover:animate-pulse'><img src={Logo} /></div>
                <div className='text-[32px]  text-red-600'>
                    <Link to="/" className='mx-5 hover:bg-blue-950/40 rounded-full p-4'>Home</Link>
                    <Link to="/about" className='mx-5 hover:bg-blue-950/40 rounded-full p-4'>About</Link>
                    <Link to="/menu" className='mx-5 hover:bg-blue-950/40 rounded-full p-4'>Menu</Link>
                    <Link to="crew" className='mx-5 hover:bg-blue-950/40 rounded-full p-4'>Krusty Krew</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
