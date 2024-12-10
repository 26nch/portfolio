import React from 'react'
import "./About.css"
import Jinx from '/images/jinx.png'

const About = () => {
  return (
    <section>
        <h4>Get To Know</h4>
        <h2>About Me</h2>
        <div className='container about_container'>
            <div className="about_me">
                <div className="about_me_img">
                    <img src={Jinx} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About