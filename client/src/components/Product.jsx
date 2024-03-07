import React from 'react'
import ProductsCard from './ProductsCard'

const Product = () => {
    return (
        <div className='py-5'>
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl bg-blue-950 text-white py-2 w-80 text-center rounded-md'>Shopping Everyday</h1>
                <span className='my-2 w-20 h-[3px] bg-blue-950'></span>
                <p className='max-w-[650px] text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, exercitationem? Laudantium vel itaque cum repellendus qui. Incidunt enim molestias nulla officiis quasi, fuga aliquam delectus asperiores, vel voluptatibus expedita consectetur unde quia doloribus minus. Eius, impedit. Consectetur, nam! Amet itaque inventore facilis!</p>
            </div>
            <div className='max-w-screen-xl mx-auto'>
                <ProductsCard />
            </div>
        </div>
    )
}

export default Product