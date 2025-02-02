import './index.scss';
import Loader from 'react-loaders';
//import amazonClone from '../../assets/images/amazonClone.png';
//import WeatherApp from '../../assets/images/WeatherApp.png';
import MernEstate from '../../assets/images/mernestate.png';
import NextGen from '../../assets/images/nextgen.jpeg';
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
                    <img src={NextGen} alt="Under Development" className='projectImg'/>
                    <div className='projectContent'>
                        <h3>Next-Gen Industrial Monitoring</h3>
                        <p>Integrating AI and blockchain to predict equipment failures and secure data, optimizing maintenanceefficiency and safety.</p>
                        <div className='skills'>
                            <h4>Skills</h4>
                            <ul>
                                <li>AI</li>
                                <li>ML</li>
                                <li>Block Chain</li>
                                <li>IoT</li>
                                <li>Web Dev</li>
                            </ul>
                        </div>
                        <a href="https://github.com/Rahamatunnisa1121/NextGen_Industrial_Monitoring" target="_blank">Source Code</a>
                    </div>
                </div>

                <div className='project'>
                    <img src={HerCraft} alt="HerCraft" className='projectImg'/>
                    <div className='projectContent'>
                        <h3>HerCraft</h3>
                        <p>A platform empowering women through a marketplace, education, and community support for skill development.
                        </p>
                        <div className='skills'>
                            <h4>Skills</h4>
                            <ul>
                                <li>UPI DeepLinking</li>
                                <li>ReactNative</li>
                                <li>Node, Express, MongoDB</li>
                            </ul>
                        </div>
                        <div className='links'>
                            <a href="https://github.com/Rahamatunnisa1121/HerCraft" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>

                <div className='project'>
                    <img src={MernEstate} alt="Mern estate" className='projectImg'/>
                    <div className='projectContent'>
                        <h3>Mern Estate</h3>
                        <p>
                        Developing a real estate platform featuring user authentication, interactive maps, and responsive design for seamless property transactions.</p>
                        <div className='skills'>
                        <h4>Skills</h4>
                            <ul>
                                <li>MERN Stack</li>
                                <li>Tailwind CSS</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                        <a href="https://github.com/Rahamatunnisa1121/MernEstate" target="_blank">Source Code</a>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-beat"/>
        </>
    );
}
export default Projects;