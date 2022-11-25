import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => (
    <div className='flex-container'>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/Contact">Contact</Link></div>
        <div><Link to="/About">About</Link></div>
        <div><Link to="/SignUp">SignUp</Link></div>
  </div>
)

export default NavBar;