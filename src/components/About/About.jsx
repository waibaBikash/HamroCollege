import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';


const About = () => {
  return (
    <div className='about'>
       <div className="about-left">
          <img src={about_img} alt="" className='about-img' />
          <img src={play_icon} alt="" className='play-icon' />
       </div>
       <div className="about-right">
         <h3>ABOUT UNIVERSITY</h3>
         <h2>Nurturing Tomorrow's Leaders Today</h2>
         <p>Embark on a trasnfromative education jurney with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
         <p>With a focus on innovation, hands-on lerning, and personalized menroship, our programs prepares aspiring educators to make a meaningful inpact in classrooms, schools, and cooouninities.</p>
         <p>Whether you aspire to become a teacher, administrator, couselor, or educator, or educational leader, our divese rage of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
       </div>
    </div>
  )
}

export default About;