import React from 'react';

const Contact = () => {
    return (
        <div data-aos="fade-down">
            <div className='p-10 rounded-lg bg-[#F9F9FF] lg:w-3/4 mx-auto border'>

                <h1 className='text-md text-center mb-2 text-[#ED7D2B] font-bold'>Contact Us</h1>
                <h1 className='text-2xl text-center mb-8'>Stay connected with us</h1>

                <form className='flex flex-col w-full lg:w-1/2 mx-auto' action="">
                    <input type="email" placeholder="Email address" className="input input-bordered mt-4" />
                    <input type="text" placeholder="Subject" className="input mt-4 input-bordered " />
                    <textarea className="textarea mt-4 textarea-bordered" placeholder="Your message..."></textarea>
                    <button className="btn bg-[#00A3FE] rounded border-0 font-bold mt-6 text-white w-full mx-auto">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;