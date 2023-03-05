import Container from 'react-bootstrap/Container';
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import logo from '../assets/img/logo.gif'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import styles from './NavBar.module.css'

function NavBar() {
  const [activeLink,setActiveLink]=useState('home');
  const [scrolled,setScrolled]=useState(false);
  
  useEffect(()=>{
    const onScroll=()=>{
        if (window.scrollY>50){
            setScrolled(true);
        } 
        else {
            setScrolled(false);
        }
    }
    window.addEventListener("scroll",onScroll);
    return ()=> window.removeEventListener("scroll",onScroll);
  },[])

  const onUpdateActiveLink = (value)=>{
    setActiveLink(value);

  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
    <Container>
      <Navbar.Brand href="#home">
        <Image src={logo} className={styles.logo} alt="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink==='skills' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>  
          <Nav.Link href="#projects" className={activeLink==='projects' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>          
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/ibrahim-al-kalaileh-05845a1b4/'> <Image src={navIcon1} alt="" /></a>
                <a href='https://web.facebook.com/ibrahim.x.Ai.x'> <Image src={navIcon2} alt="" /></a>
                <a href='#'> <Image src={navIcon3} alt="" /></a>
            </div>
            <Nav.Link href="#connect" className={activeLink==='connect' ? 'active navbar-link': 'navbar-link'} onClick={()=>onUpdateActiveLink('connect')}>
            <button className='rounded' onClick={()=>onUpdateActiveLink('contact')}>
                <span>Lets Connect</span>
            </button>
            </Nav.Link> 
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
  
}

export default NavBar