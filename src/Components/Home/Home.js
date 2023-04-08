import React from 'react';
import Hero from './HeroSection/Hero';
import Services from './Services/Services';
import Countup from './CountUp/Countup';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section className='w-11/12 mx-auto mt-20'>
                <Services></Services>
            </section>
            <section data-aos='fade-up' className='w-11/12 lg:w-full mx-auto mt-20'>
                <Countup></Countup>
            </section>
            <section data-aos='fade-up' className='w-full mx-auto mt-20'>
                <Testimonial></Testimonial>
            </section>
            <section className='w-11/12 mx-auto my-20'>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;