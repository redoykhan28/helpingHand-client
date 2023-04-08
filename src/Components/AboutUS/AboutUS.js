import React from 'react';
import image from '../../Assets/Order/11241416_4676729.jpg'
import image2 from '../../Assets/Order/6982750_3333449.jpg'

const AboutUS = () => {
    return (
        <div>
            <div className='w-full h-[200px] shadow-xl p-5 mt-5 mb-10'>
                <h1 className='text-3xl text-center mt-10'>About Us</h1>
            </div>
            <div data-aos="fade-up" className="hero  w-full lg:w-9/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full lg:w-1/2 lg:mx-6'>
                        <img src={image} className="rounded-lg" alt='img' />
                    </div>
                    <div className='w-full lg:w-1/2 lg:mx-6'>
                        <h1 className="text-5xl font-bold">WHO WE ARE</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="hero  w-full lg:w-9/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='w-full lg:w-1/2 lg:mx-6'>
                        <img src={image2} className="rounded-lg" alt='img' />
                    </div>
                    <div className='w-full lg:w-1/2 lg:mx-6'>
                        <h1 className="text-5xl font-bold">OUR STORY</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;