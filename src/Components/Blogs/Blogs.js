import React from 'react';
import image from '../../Assets/commingsoon/1000_F_285094302_zA6deTfAASnktH2FPpHnwjFK4aHCowod.jpg'

const Blogs = () => {
    return (
        <div>
            <div className='w-full h-[200px] shadow-xl p-5 mt-5 mb-10'>
                <h1 className='text-3xl text-center mt-10'>Leatest Blogs</h1>
            </div>
            <div data-aos='fade-up' >
                <img className='w-5/12 mx-auto my-10' src={image} alt="img" />
            </div>
        </div>
    );
};

export default Blogs;