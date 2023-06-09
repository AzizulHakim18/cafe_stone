import React from 'react';
import Navbar from '../Sheared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;