import React from 'react';
import Header from '../pages/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;