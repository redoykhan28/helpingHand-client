import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../../Assets/Home/bg-3.jpg'

const Hero = () => {
    return (
        <div>
            <div className=''>
                <div className="hero lg:mt-14">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div data-aos="fade-down" className='lg:w-full'>
                            <img src={heroImg} alt='Banner' />
                        </div>
                        <div data-aos="zoom-in" className='lg:w-1/2 text-start'>
                            <h1 className="text-6xl text-[#ED7D2B] font-bold">Let's</h1>
                            <h1 className="text-6xl text-[#5D96E3] font-bold">Get the Product</h1>
                            <h1 className="text-6xl text-[#00A3FE] font-bold">At your door!</h1>
                            <p className="py-6">HelpingHand is the ecommerse riding service website where you can get your necessary product very fast.. </p>
                            <Link to={'/order'} className="btn bg-[#00A3FE] border-none hover:bg-[#466EB5]  text-white">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;