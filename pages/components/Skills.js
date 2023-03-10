import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Image from 'next/image'
import react_img from "../assets/img/react.png"
import node_img from "../assets/img/node.png"
import graphQL_img from "../assets/img/graphql.png"
import javascript_img from "../assets/img/javascript.png"
import redux_img from "../assets/img/redux.png"
import tailwind from "../assets/img/tailwind.png"
import nextjs from "../assets/img/nextjs.png"
import git_img from "../assets/img/git.png"
import html_img from "../assets/img/html.png"
import css_img from "../assets/img/css.png"
import docker_img from "../assets/img/docker.png"
import reactnative_img from "../assets/img/reactnative.png"
import colorSharp from "../assets/img/color-sharp.png"
import Skill from "./Skill";



const Skills = () => {

  const skills = [
    {
      name :"HTML",
      image:html_img,
    },
    {
      name :"CSS",
      image:css_img,
    },
    {
      name :"Javascript",
      image:javascript_img,
    },
    {
      name :"graphQL",
      image:graphQL_img,
    },
    {
      name :"node",
      image:node_img,
    },
    
    {
      name :"Redux",
      image:redux_img,
    },
    {
      name :"tailwindCSS",
      image:tailwind,
    },
    {
      name :"Nextjs",
      image:nextjs,
    },
    {
      name :"React",
      image:react_img,
    },
    {
      name :"Git",
      image:git_img,
    },
    {
      name :"React Native",
      image:reactnative_img,
    },
    {
      name :"Docker",
      image:docker_img,
    },

  ]
    
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill " id="skills">
        <div className="container" >
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn app__flex">
                        <h2>Skills</h2>
                        <div className="skill_item">
                        {
                          skills.map((skill,index)=>{
                            return(
                            
                            <Skill 
                              key={index}
                              {...skill}
                            />)
                            
                          })
                        }
                        </div>
                       
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <Image className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills