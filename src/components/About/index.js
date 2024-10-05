import './index.scss';
import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimateLetters';
import Loader from 'react-loaders';
import cursor from '../../assets/images/cursorIcon.png';
import ui from '../../assets/images/uiIcon.png';
import server from '../../assets/images/serverIcon.png';
const About=()=>{
    const [letterClass,setLetterClass]=useState('text-animate');
    const aboutArray="About Me".split("");
    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover');
        },3000);
    },[]);
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={15} />
                </h1>
                <p>
                    I'm a third-year B.Tech <span>Computer Science</span> student at VRSEC.
                    I am highly motivated <span>front-end developer</span> seeking a position in a renowned IT company
                    where I can work with cutting-edge technologies on exciting and diverse projects.
                </p>
                <p>
                    Additionally, I have a strong foundation in <span>data structures</span> and <span>algorithms</span>,
                    which supports my <span>problem-solving</span> skills and enhances my overall technical expertise.
                </p>
                <p align="LEFT">
                    I'm quiet confident, naturally curious, and constantly enhancing my skills through 
                    diverse problem-solving experiences.
                </p>
                <p>
                    If I had to define myself in one sentence, it would be as a family-oriented individual,
                    a cherished daughter to my wonderful parents, a sports enthusiast and a <span>tech-obsessed</span>,
                    driven by the desire to achieve my dreams and make my parents proud.
                </p>
            </div>
            <div className="content">
                <ul className="aboutItems">
                    <li className="aboutItem">
                        <img src={cursor} alt="Cursor icon" />
                        <div className="aboutItemText">
                            <h3>Frontend Developer</h3>
                            <p>
                                Experienced in creating responsive, user-friendly websites with HTML, CSS, JavaScript, and React.
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={server} alt="Server icon" />
                        <div className="aboutItemText">
                            <h3>Data Structures Enthusiast</h3>
                            <p>
                                Solved 250+ coding problems in data structures, with strong skills in algorithms and data management.
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={ui} alt="UI icon" />
                        <div className="aboutItemText">
                            <h3>Design thinker</h3>
                            <p> 
                                Experienced in applying design thinking methodologies to solve problems creatively and effectively. 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <Loader type="ball-beat"/>
        </>
    );
};
export default About;