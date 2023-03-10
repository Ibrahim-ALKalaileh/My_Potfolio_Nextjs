import React from 'react'
import Image from 'next/image'



const Skill = ({name,image}) => {
  return (
    <div className='skill_div'>
         <div >
            <Image src={image}/>
            <p >
            {name}
            </p>
        </div>
    </div>
  )
}

export default Skill