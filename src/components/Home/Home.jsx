import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import Jinx from '/images/jinx.png'
import "./Home.css"

const Home = () => {
  return (
    <header id='home'>
        <div className='container home_container'>
            <h4>Hello, I'm</h4>
            <h1>Hai Nguyen</h1>
            <h4 className='text-light'>DevOps Engineer</h4>
            <div className='cta'>
                <a href="" download className='btn'>
                    Download CV
                </a>
                <a href="#contact" className='btn btn_primary'>
                    Contact Me
                </a>
            </div>
            <div className="social">
                <a href="">
                    <BsLinkedin/>
                </a>
                <a href="">
                    <BsGithub/>
                </a>
                <a href="">
                    <BsInstagram/>
                </a>
            </div>
            <div className="me">
                <img src={Jinx} alt="Jinx" />
            </div>

            <a href="#contact" className='scroll_down'>
                Scroll Down
            </a>
        </div>
    </header>
  )
}

export default Home