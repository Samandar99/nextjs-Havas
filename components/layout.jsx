// components/Layout.jsx

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Aside from './Aside';
import { useRouter } from 'next/router';

function Layout({ children }) {
  const router = useRouter();
  const isSigninPage = router.pathname === '/auth/signin';
  const isDashboard = router.pathname.startsWith('/admin');

  return (
    <div className='content'>
      {isDashboard ? (
        <div className='flex'>
          <Aside />
          <div className='dashboard-content'>
            {children}
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </div>
  );
}

export default Layout;
