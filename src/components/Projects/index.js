import './index.scss';
import Loader from 'react-loaders';
import amazonClone from '../../assets/images/amazonClone.png';
import WeatherApp from '../../assets/images/WeatherApp.png';
import HerCraft from '../../assets/images/HerCraft.jpg';
import { useState,useEffect } from 'react';
import AnimatedLetters from '../AnimateLetters';
const Projects=()=>{
    const [letterClass,setLetterClass]=useState('text-animate');
    const ProjectsArray="Projects".split("");
    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover');
        },3000);
    },[]);
    return (
        <>
        <div className='projectpage'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={ProjectsArray} idx={15} />
            </h1>
            <div className='projects'>
                <div className='project'>
                    <img src={WeatherApp} alt="WeatherApp" className='projectImg'/>
                    <div className='projectContent'>
                        <h3>Weather App</h3>
                        <p>
                        A responsive weather app providing a 5-day forecast via city search or geolocation, 
                        adapting smoothly to all screen sizes.</p>
                        <div className='skills'>
                            <h4>Skills</h4>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>API Integration</li>
                            </ul>
                        </div>
                        <a href="https://www.github.com/Rahamatunnisa1121/WeatherApp">Source</a>
                    </div>
                </div>

                <div className='project'>
                    <img src={HerCraft} alt="HerCraft" className='projectImg'/>
                    <div className='projectContent'>
                        <h3>HerCraft</h3>
                        <p>A platform for women offering a marketplace, education, 
                            and community support for skill development and business growth.
                        </p>
                        <div className='skills'>
                            <h4>Skills</h4>
                            <ul>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                        <div className='links'>
                            <a href="https://github.com/Rahamatunnisa1121/HerCraft">Source</a>
                        </div>
                    </div>
                </div>

                <div className='project'>
                    <img src={amazonClone} alt="amazonClone" className='projectImg'/>
                    <div className='projectContent'>
                        <h3>Amazon Clone</h3>
                        <p>
                        This project is a front-end clone of the Amazon website, 
                        replicating its design and ensuring responsive, dynamic navigation.</p>
                        <div className='skills'>
                        <h4>Skills</h4>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>Responsive</li>
                            </ul>
                        </div>
                        <a href="https://www.github.com/Rahamatunnisa1121/AmazonClone">Source</a>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-beat"/>
        </>
    );
}
export default Projects;