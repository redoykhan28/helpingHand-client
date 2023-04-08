import React from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Countup = () => {
    const [countOn, setCountOn] = React.useState(false);
    return (
        <div >
            <ScrollTrigger
                onEnter={() => setCountOn(true)}
                onExit={() => setCountOn(false)}
            >
                {countOn && (
                    <div>
                        <div className='px-4 mb-44 sm:mb-0 sm:max-w-xl md:max-w-xl lg:max-w-screen-2xl md:px-24 lg:px-8 mx-auto lg:mx-8  py-10 bg-black flex flex-col lg:flex-row justify-between shadow-xl rounded-xl'>
                            <div className='flex flex-col lg:flex-row my-4 items-center'>
                                <CountUp
                                    duration={3}
                                    end={5000}
                                    className='text-4xl font-extrabold text-white'
                                ></CountUp>
                                <div className='text-md mx-4 font-semibold text-center lg:text-start mt-2 lg:mt-0 text-[#99999B]'>
                                    <p>Happy</p>
                                    <p>Clients</p>
                                </div>
                            </div>

                            <div className="border-r-2 border-light"></div>

                            <div className='flex flex-col lg:flex-row my-4 items-center'>
                                <CountUp
                                    duration={3}
                                    end={5500}
                                    className='text-4xl font-extrabold text-white'
                                ></CountUp>
                                <div className='text-md mx-4 font-semibold text-center lg:text-start mt-2 lg:mt-0 text-[#99999B]'>
                                    <h1>Finished</h1>
                                    <h1>Delivery</h1>
                                </div>
                            </div>

                            <div className="border-r-2 border-light"></div>

                            <div className='flex flex-col lg:flex-row my-4 items-center'>
                                <CountUp
                                    duration={3}
                                    end={50}
                                    className='text-4xl font-extrabold text-white'
                                ></CountUp>
                                <div className='text-md mx-4 font-semibold text-center lg:text-start mt-2 lg:mt-0 text-[#99999B]'>
                                    <h1>Relaible</h1>
                                    <h1>Rider</h1>
                                </div>
                            </div>

                            <div className="border-r-2 border-light"></div>

                            <div className='flex flex-col lg:flex-row my-4 items-center'>
                                <CountUp
                                    duration={3}
                                    end={1000}
                                    className='text-4xl font-extrabold text-white'
                                ></CountUp>
                                <div className='text-md mx-4 font-semibold text-center lg:text-start mt-2 lg:mt-0 text-[#99999B]'>
                                    <h1>Area</h1>
                                    <h1>Covered</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </ScrollTrigger>
        </div>
    );
};

export default Countup;