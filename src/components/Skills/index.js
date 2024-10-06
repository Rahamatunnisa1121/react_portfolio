import './index.scss';
import Loader from 'react-loaders';
import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimateLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faHtml5, faJava, faJsSquare,faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faReact} from '@fortawesome/free-brands-svg-icons/faReact';
const Skills=()=>{
    const [letterClass,setLetterClass]=useState('text-animate');
    const skillArray="Skills & Experience".split("");
    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover');
        },3000);
    },[]);
    return (
        <>
        <div className="container skills-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={skillArray} idx={15} />
                </h1>
                <p>
                    I am a dedicated Computer Science student with proficiency in <span>C++</span>, <span>Python</span>, <span>JavaScript</span>,
                    <span> Java</span>, and <span>SQL</span>, and expertise in <span>HTML5</span>, <span>CSS3</span>, <span>ReactJS</span> and <span>NodeJS</span>. 
                </p>
                <p>
                    I am skilled in using developer tools like <span>VS Code</span>, <span>Jupyter</span> and <span>PyCharm</span> and have a solid grasp 
                    of <span>data structures</span>, <span>algorithms</span>, and <span>database management</span>.
                </p>
                <p>
                    My practical experience includes internships in front-end development, AI, and cloud computing,
                    where I worked on creating a responsive e-commerce site, deploying AI models,
                    and building Android applications.
                </p>
                <p>
                   Visit my <a href="https://www.linkedin.com/in/rahamatunnisa-shaik-0a8a97258" target="_blank"
                   rel="noopener noreferrer">Linkedin</a> profile for more details. 
                   Also you can checkout my resume on this <a href="https://drive.google.com/file/d/1Rv9OUF3H3QYhOUdeez-_T4aZX6YaOcQ7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                   link</a>.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5}/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3}/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare}/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact}/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJava} />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs }/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-beat"/>
        </>
    );
};
export default Skills;