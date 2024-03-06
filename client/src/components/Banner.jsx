import React, { useState } from 'react'
import { slider1, slider2, slider3, slider4 } from '../assets'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
    }
    console.log(currentSlide)

    const sliderBg = [slider1, slider2, slider3, slider4]

    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className='w-screen h-[650px] relative'>
                <div style={{transform:`translateX(-${currentSlide*100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
                    <img className='w-screen h-full object-cover' src={sliderBg[0]} alt="Slider1" loading='priority' />
                    <img className='w-screen h-full object-cover' src={sliderBg[1]} alt="Slider2" />
                    <img className='w-screen h-full object-cover' src={sliderBg[2]} alt="Slider3" />
                    <img className='w-screen h-full object-cover' src={sliderBg[3]} alt="Slider4" />
                </div>
                <div className='absolute w-fit left-0 right-0 mx-auto flex bottom-1/2 space-x-[90vw]'>
                    <div onClick={prevSlide} className='hover:cursor-pointer hover:text-red-300 active:text-red-500 text-xl duration-300'><FaArrowCircleLeft /></div>
                    <div onClick={nextSlide} className='hover:cursor-pointer hover:text-red-300 active:text-red-500 text-xl duration-300'><FaArrowCircleRight /></div>
                </div>
            </div>
        </div>
    )
}

export default Banner