import React from 'react'
import { Link } from 'react-router-dom';
import KrabbyPatty from "../assets/KrabbyPatty.jpg"
import CoralBits from "../assets/CoralBits.jpg"
import KelpRings from "../assets/KelpRings.jpg"
import KelpShake from "../assets/KelpShake.jpg"
import KrabbyMeal from "../assets/KrabbyMeal.jpg"

const Home = () => {
    return (
        <div className='bg-blue-950/40 grid grid-cols-5 gap-x-10 mx-12 mt-12 p-12 rounded-2xl'>
            <div><img className='h-[250px] w-[300px] rounded-2xl hover:scale-110' src={KelpRings} /></div>
            <div><img className='h-[250px] w-[300px] rounded-2xl hover:scale-110' src={CoralBits} /></div>
            <div><img className='h-[250px] w-[300px] rounded-2xl hover:scale-110' src={KrabbyPatty} /></div>
            <div><img className='h-[250px] w-[300px] rounded-2xl hover:scale-110' src={KelpShake} /></div>
            <div><img className='h-[250px] w-[300px] rounded-2xl hover:scale-110' src={KrabbyMeal} /></div>
        </div>
    )
}

export default Home
