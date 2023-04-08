import React from 'react';
import Nav from '../Components/Shared/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;