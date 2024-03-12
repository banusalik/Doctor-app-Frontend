import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '85vh' }} className="bg-[#f1f5f9]">
        {/* <Toaster /> */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
