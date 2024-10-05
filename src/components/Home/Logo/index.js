import './index.scss';
import hero from '../../../assets/images/heroImage.avif';
const Logo=()=>{
    return (
        <img className='hero' src={hero} alt="hero" />
    );
};
export default Logo;