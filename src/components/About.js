import React from 'react';
import './About.css';
import avatar from './profile-pic (1).png';

const About = () => {
  return (
    <section class="about" id="about">
    <h2 class="heading">About <span>Me</span></h2>
    
    <div class="row">
        <div class="image">
            <img src={avatar} alt="" />
        </div>
        <div class="content">            
            <p>I'm a Computer Science enthusiast, studying at Vellore Institute of Technology. <br />
                On a personal level, I'm passionate about self-improvement and personal growth. <br />
            My academic experience has greatly aided my ability to solve problems and think analytically, which has motivated me to achieve academic success. </p>
            
            <div class="box-container">
                <div class="box">
                <p><span> Age: </span> 18</p>
                <p><span> Phone : </span> +91 8122394864</p>
                </div>
                <div class="box">
                <p><span> Email : </span> j.k.sanjay2006@gmail.com</p>
                <p><span> Place : </span> Vellore, India - 632006</p>
                </div>
            </div>
            
            <div class="resumebtn">
                <a href="https://res.cloudinary.com/dbemticrn/image/upload/v1719227437/MY_RESUME/gikoy49nplf1isqtgs5w.png" target="_blank" class="btn"><span>Resume</span>
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>

            </div>
        </div>
    </section>
  );
};

export default About;
