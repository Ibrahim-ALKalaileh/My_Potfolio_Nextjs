import React from 'react'
import Image from 'next/image'
import logo from "../assets/img/logo.gif"
import linkedin from '../assets/img/nav-icon1.svg'
import facebook from '../assets/img/nav-icon2.svg'
import github from '../assets/img/github.png'
import {Container,Row,Col} from 'react-bootstrap'
import styles from './Footer.module.css'

const Footer = () => {
  return (
       <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content center">
          
          <Col xs={12} md={6} className="text-md-start text-center"> 
            <Image src={logo} alt="Logo" className={styles.logo}/>
          </Col>
          <Col size={12} sm={6}  className="text-center text-sm-end text-md-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ibrahim-al-kalaileh-05845a1b4/"><Image src={linkedin} alt="Icon" /></a>
              <a href="https://web.facebook.com/ibrahim.x.Ai.x"><Image src={facebook} alt="Icon" /></a>
              <a href="https://github.com/Ibrahim-ALKalaileh"><Image src={github} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer