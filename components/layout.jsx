import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Signin from '@/pages/auth/signin';
import { useRouter } from 'next/router'
import Dashboard from '@/pages/dashboard';

function Layout({ children }) {
  const router = useRouter();
  const isSigninPage = router.pathname === '/auth/signin';
  const isDashboard = router.pathname === '/dashboard'


  return (
    <div className='content'>
      {isDashboard ? (
        <Dashboard />
      ) : isSigninPage ? (
        <Signin />
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </div>
  )
}

export default Layout
