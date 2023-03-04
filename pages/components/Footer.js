import React from 'react'
import Image from 'next/image'
import logo from "../assets/img/logo.gif"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
       <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <Image src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><Image src={navIcon1} alt="Icon" /></a>
              <a href="#"><Image src={navIcon2} alt="Icon" /></a>
              <a href="#"><Image src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer