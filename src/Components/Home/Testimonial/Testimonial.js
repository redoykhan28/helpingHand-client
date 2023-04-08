import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 1000,



        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="bg-[#F9F9FF] lg:p-12">
                <div className=" text-center">
                    <h1 className='text-md text-center mb-2 text-[#ED7D2B] font-bold'>Testimonials</h1>
                    <h1 className='text-2xl font-semibold text-center mb-12'>Our Satisfied Customers Review</h1>
                    <p className='text-gray-500 mb-12 lg:w-1/2 mx-auto'>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit</p>
                </div>


                <div className="lg:w-11/12 px-8 lg:px-10 pb-10 mx-auto">
                    <Slider className="grid gap-20" {...settings}>
                        <div className="card w-96 bg-white rounded-md border border-gray-100">
                            <div className="card-body text-start">
                                <p className="text-gray-500 text-justify italic">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae asperiores quae ad voluptates minus nam, ullam aliquam libero sapiente sint mollitia fugiat provident nesciunt totam exercitationem nisi voluptatum animi?
                                </p>
                                <h1 className="text-xl font-bold my-2">FANNY SPANCER</h1>
                                <div className="flex justify-start">
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span >
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStarHalf />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card  w-96 bg-white rounded-md border border-gray-100">
                            <div className="card-body text-start">
                                <p className="text-gray-500 text-justify italic">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae asperiores quae ad voluptates minus nam, ullam aliquam libero sapiente sint mollitia fugiat provident nesciunt totam exercitationem nisi voluptatum animi?
                                </p>
                                <h1 className="text-xl font-bold my-2">FANNY SPANCER</h1>
                                <div className="flex justify-start">
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span >
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStarHalf />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card  w-96 bg-white rounded-md border border-gray-100">
                            <div className="card-body text-start">
                                <p className="text-gray-500 text-justify italic">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae asperiores quae ad voluptates minus nam, ullam aliquam libero sapiente sint mollitia fugiat provident nesciunt totam exercitationem nisi voluptatum animi?
                                </p>
                                <h1 className="text-xl font-bold my-2">FANNY SPANCER</h1>
                                <div className="flex justify-start">
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span >
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStarHalf />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card  w-96 bg-white rounded-md border border-gray-100">
                            <div className="card-body text-start">
                                <p className="text-gray-500 text-justify italic">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae asperiores quae ad voluptates minus nam, ullam aliquam libero sapiente sint mollitia fugiat provident nesciunt totam exercitationem nisi voluptatum animi?
                                </p>
                                <h1 className="text-xl font-bold my-2">FANNY SPANCER</h1>
                                <div className="flex justify-start">
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span >
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStarHalf />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card  w-96 bg-white rounded-md border border-gray-100">
                            <div className="card-body text-start">
                                <p className="text-gray-500 text-justify italic">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vitae asperiores quae ad voluptates minus nam, ullam aliquam libero sapiente sint mollitia fugiat provident nesciunt totam exercitationem nisi voluptatum animi?
                                </p>
                                <h1 className="text-xl font-bold my-2">FANNY SPANCER</h1>
                                <div className="flex justify-start">
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span >
                                    <span className="text-yellow-400 mx-1">
                                        <FaStar />
                                    </span>
                                    <span className="text-yellow-400 mx-1">
                                        <FaStarHalf />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div >
        </div>
    );
};

export default Testimonial;