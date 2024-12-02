import React from 'react';
import './Home.css';
import Bot from '../Images/Grace_Wang_photo.jpg';
import {Link} from 'react-scroll'; 

const intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    <span className="introName"> I'm Grace Wang <br/></span>
                    Composer, Pianist, and Teacher
                </span>
                <p className="introPara"><br/> </p>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={1000}>
                    <button className="btn">
                        About Me
                    </button>
                </Link>
            </div>
            <img src={Bot} alt="CAD" className="bg"/>
        </section>
    )
}

export default intro