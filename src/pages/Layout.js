import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/nav-foot/Footer'
import Navbar from '../component/nav-foot/Navbar'

const Layout = (props) => {

  const users = props.users;
  
  return (
    <div style={{ display: "flex",minHeight:"100vh",flexDirection:"column"}}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout