
import React from 'react'
import team1 from '../assets/images/team/1.jpg'
import team2 from '../assets/images/team/2.jpg'
import team3 from '../assets/images/team/3.jpg'

const OurTeam = () => {
  return (
    <div >

            <p className='text-5xl text-center m-4'>Our team</p>

            <div className='flex justify-center gap-4 text-center'>
        <div className='border p-2 rounded-lg w-[400px]' >
        <img className=' border border-8  w-ful rounded-lg' src={team1} alt="" />
            <p className='font-bold'>Car Engin Plug</p>
            <p>Engin Expert</p>

        </div>



        <div className='border p-2 rounded-lg w-[400px]' >
        <img className=' border border-8  w-ful rounded-lg' src={team2} alt="" />
            <p className='font-bold'>Car Engin Plug</p>
            <p>Engin Expert</p>

        </div>



        <div className='border p-2 rounded-lg w-[400px]' >
        <img className=' border border-8  w-ful rounded-lg' src={team3} alt="" />
            <p className='font-bold'>Car Engin Plug</p>
            <p>Engin Expert</p>

        </div>


        </div>
    </div>
  )
}

export default OurTeam