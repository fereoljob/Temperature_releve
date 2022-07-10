import logo from '../assets/logo.png'
import '../styles/Banner.css'
const Banner = ()=>{
    return (
        <div className='Banner'>
            <img src={logo} alt='Position gironde carte europe' className='logo'/>
            <h1 className='title'>La Gironde</h1>
        </div>
    )
}
export default Banner