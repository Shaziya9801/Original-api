import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  let {username}=useParams();
  console.log(username,"Params");
  return (
    <div>
      <h2>Hello {username}</h2>
      
    </div>
  )
}

export default About