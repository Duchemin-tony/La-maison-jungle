import logo from '../assets/Logo_La_maison_jungle.png'
import '../styles/Banner.css'


function Banner() {
    const title = "La maison jungle"
    return (
        <div className="lmj-banner">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
            <h1 className="lmj-title">{title}</h1>
        </div>
    )
}

export default Banner