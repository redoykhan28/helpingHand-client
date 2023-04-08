import React from 'react';

const Loader = () => {
    return (
        <div>
            <div>
                <div className='my-40'>
                    <progress className="progress bg-[#00A3FE]  w-56"></progress>
                    <h1 className='text-md  font-bold'>Loading...</h1>
                </div>
            </div>
        </div>
    );
};

export default Loader;