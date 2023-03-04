import React from 'react'
import Image from 'next/image'
import {Col,Container,Tab,Row,Nav} from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorBG from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/netflix.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
function Projects() {
  const projects_React =[
    {
        title: "Netflix",
        description: "React Redux Firestore GoogleAuth",
        imgUrl: projImg1,
      },      
  ];

  const projects_Next =[
    {
        title: "Airbnb",
        description: "React Redux Firestore GoogleAuth",
        imgUrl: projImg1,
      },      
  ];

  const projects_reactNative =[
    {
        title: "Netflix",
        description: "React Redux Firestore GoogleAuth",
        imgUrl: projImg1,
      },      
  ];

  return (
    <section className='project' id='projects'>
    <Container>
      <Row>
        <Col>
          <h2>Projects</h2>
          <p></p>
          <Tab.Container id='projects-tabs' defaultActiveKey='first'>
          <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
            <Nav.Item>
              <Nav.Link eventKey='first'>React </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Next.js</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third"> React Native</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            
            <Tab.Pane eventKey='first'>
              <Row>
                {
                  projects_React.map((project,index)=>{
                    return(
                      <ProjectCard
                        key={index}
                        {...project}
                       />
                    )
                  })
                }
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey='second' >

                <Row>
                  {
                    projects_Next.map((project,index)=>{
                      return(
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
                
            </Tab.Pane>

            <Tab.Pane eventKey='third'>

                <Row>
                  {
                    projects_reactNative.map((project,index)=>{
                      return(
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>

            </Tab.Pane>

          </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
    <Image className='background-image-right' src={colorBG}/>
    </section>
  )
}

export default Projects