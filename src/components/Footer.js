import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import logo from './logo.png'

const Footer = () => {

    const location = useLocation()
    return (
        <footer>
            <p>Copyright &copy; 2021 </p>
            {location.pathname === '/' && <Link to="about">About</Link>}
            <p><img src={logo} alt="Logo" /></p>
        </footer>
    )
}

export default Footer
