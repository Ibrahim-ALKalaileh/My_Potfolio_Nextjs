import { Col } from "react-bootstrap";
import Image from 'next/image'

const ProjectCard = ({title,description,imgUrl}) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <Image src={imgUrl}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard