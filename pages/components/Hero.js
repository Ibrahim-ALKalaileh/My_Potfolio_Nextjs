import Image from 'next/image'
import { Container,Row ,Col} from "react-bootstrap";
import headerImg from '../assets/img/header-img.svg';
import React from "react";

function Hero() {
    
    

  return (
    <section className="hero" id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">
                    Hi, Im Ibrahim.
                    </span>
                    <h1>{`Full-Stack Web and Mobile Developer `} </h1>
                    <p> </p>
                    
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <Image src={headerImg} alt='Hero Img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero