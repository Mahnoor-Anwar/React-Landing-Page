import { useState } from 'react'
import Navbar from './Navbar/NavbarTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopContact from './TopContact/TopContact';
import MainContent from './MainContent/MainContent';
import Academics from './Academics/Academics';
import Welcome from './Welcome/Welcome';
import Campus from './CampusLife/Campus';
import Courese from './PC/Courese';
import Rates from './Rates/Rates';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import Reviees from './Reviews/Reviees';
import NewsAndBlogs from './NewsAndBlogs/NewsAndBlogs';
import Footer from './Footer/Footer';

function App() {
  
  return (
    <>
    <TopContact />,
      <Navbar/>,
      <MainContent />,
      <Academics />,
      <Welcome/>,
      <Campus />,
      <Courese />,
      <Rates />,
  <UpcomingEvents />,
  <Reviees />,
  <NewsAndBlogs />,
  <Footer />
    </>
  )
}

export default App
