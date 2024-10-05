import './index.scss';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import AnimatedLetters from '../AnimateLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
const Home=()=>{
    const [letterClass,setLetterClass]=useState('text-animate');
    const nameArray=" Rahamatunnisa Shaik,".split("");
    const jobArray="Web Developer".split("");
    const helloArray="Hello,".split("");
    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover');
        },5000);
    },[]);
    return (
        <>
        <div className="container Home-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={helloArray} idx={15} />
                    <br />
                    <span className={`${letterClass} _20`}>I</span> 
                    <span className={`${letterClass} _21`}>'m</span> 
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} idx={22} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} idx={42} />
                </h1>
                <h2>Frontend Developer | JavaScript Expert | React Developer |
                <br />Data Structure Enthusiast</h2>
                <Link to="/contact" className='contact-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="ball-beat"/>
        </>
    );
};
export default Home;