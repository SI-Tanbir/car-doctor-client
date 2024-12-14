
import React from 'react'

import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className='flex relative p-10'>
        <div className=''>
            <div>

            <img src={person}  alt="" />
            </div>
            <img className='absolute w-[30%] rounded border-white border-8 right-[45%] bottom-0  '  src={parts} alt="" />

        </div>
        <div className='p-10 space-y-6 ml-20'>
            <p className='font-bold'>About us</p>
            <p className='text-5xl font-bold'> We are qualified & of experience in this field</p>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 

            </p>

                <button className='btn bg-orange-600 text-white'>Get More Info</button>
        </div>
        
    </div>
  )
}

export default About