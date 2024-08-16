import React from 'react'
import { Link } from 'react-router-dom';
import MrKrabs from "../assets/MrKrabs.png"
import Spongebob from "../assets/SpongeBob.png"
import Squidward from "../assets/Squidward.png"

const Crew = () => {
    return (
        <div className='text-yellow-400 text-2xl bg-blue-950/40 flex grid-cols-5 justify-around mx-12 mt-12 p-12 rounded-2xl'>
            <div className='text-center hover:scale-110'><img className='h-[300px]' src={MrKrabs} />Eugene H. Krabs <br /> <span>(Owner)</span></div>
            <div className='text-center flex flex-col justify-center items-center hover:scale-110'><img className='h-[200px] mt-[100px]' src={Spongebob} />SpongeBob SquarePants<br /> <span>(Fry Cook)</span></div>
            <div className='text-center flex flex-col justify-center items-center hover:scale-110'><img className='h-[300px]' src={Squidward} />Squidward Tentacles<br /> <span>(Cashier and waiter)</span></div>
        </div>
    )
}

export default Crew
