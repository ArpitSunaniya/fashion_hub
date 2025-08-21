import React from 'react'
import Header from '../header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../footer';
import ScrollToTop from '../scrollToTop';

const Layout = () => {
    const location = useLocation();
    const hideFooter = location.pathname === "/ShoppingCart";
    return (
        <>
            <ScrollToTop />,
            <Header />
            <main className="pt-12">
                <Outlet />
            </main>
            {!hideFooter && <Footer />}
        </>
    )
}
export default Layout;