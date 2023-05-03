import React from 'react';
import Header from '../pages/Header/Header';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import Footer from '../pages/Footer/Footer';
import { Outlet } from 'react-router-dom';

const ChefLayout = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;