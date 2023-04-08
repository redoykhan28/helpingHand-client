import React from 'react';
import { FaBiking, FaDollyFlatbed, FaDoorClosed } from "react-icons/fa";
import './Services.css'

const Services = () => {
    return (
        <div>
            <div>
                <div >
                    <h1 className='text-md text-center mb-2 text-[#ED7D2B] font-bold'>Our Services</h1>

                    <h1 className='text-2xl font-semibold text-center mb-12'>Services We Provide</h1>
                    <div className='w-full lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div data-aos='fade-up' className="card cd1 w-full lg:w-96 bg-base-100 shadow-xl hover:shadow-2xl">
                            <figure className="px-10 pt-10">
                                <h1 className='text-[#00A3FE] text-5xl'><FaBiking /></h1>
                            </figure>
                            <div className="card-body border-b-8 border-b-[#00A3FE] items-center text-center">
                                <h2 className="card-title">Standerd Delivery</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aliquam rem beatae? Consequatur, impedit aliquid.</p>
                                <button className='btn bg-transparent rounded-full text-[#00A3FE] px-10 py-4 border-2 border-gray-400 my-3'>Read More</button>
                            </div>
                        </div>

                        <div data-aos='zoom-in' className="card  cd1 w-full lg:w-96 bg-base-100 shadow-xl hover:shadow-2xl">
                            <figure className="px-10 pt-10">
                                <h1 className='text-[#00A3FE] text-5xl'><FaDoorClosed /></h1>
                            </figure>
                            <div className="card-body border-b-8 border-b-[#00A3FE] items-center text-center">
                                <h2 className="card-title">Door to Door</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aliquam rem beatae? Consequatur, impedit aliquid.</p>
                                <button className='btn bg-transparent rounded-full text-[#00A3FE] px-10 py-4 border-2 border-gray-400 my-3'>Read More</button>
                            </div>
                        </div>

                        <div data-aos='fade-up' className="card cd1 w-full lg:w-96 bg-base-100 shadow-xl hover:shadow-2xl">
                            <figure className="px-10 pt-10">
                                <h1 className='text-[#00A3FE] text-5xl'><FaDollyFlatbed /></h1>
                            </figure>
                            <div className="card-body border-b-8 border-b-[#00A3FE] items-center text-center">
                                <h2 className="card-title">Express Courier</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aliquam rem beatae? Consequatur, impedit aliquid.</p>
                                <button className='btn bg-transparent rounded-full text-[#00A3FE] px-10 py-4 border-2 border-gray-400 my-3'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;