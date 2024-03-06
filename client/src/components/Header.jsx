import React from 'react'
import { cart, userLogo } from '../assets';


const Header = () => {

    const navItems = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
        {
            name: "Blogs",
            path: "/blogs",
        },
    ];
    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <div>
                    <h1 className='text-3xl font-bold line-through font-apnaLogo text-blue-950'>Apna Dukan</h1>
                </div>
                <div className='flex items-center gap-6'>
                    <ul className='flex items-center gap-6'>
                        {navItems.map((item) => {
                            return (
                                <li key={item.name} className='text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                    <div className='relative'>
                    <img className='w-7' src={cart} alt="cart" />
                    <span className='absolute w-7 top-2 left-0 text-sm flex items-center justify-center font-semibold'>0</span>
                    </div>
                    <div>
                        <img className='w-8 h-8 rounded-full object-cover' src={userLogo} alt="userLogo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header