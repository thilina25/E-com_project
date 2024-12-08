import './Navbar.css'
import navlogo from '../../assets/navlogo.png'
import navProfile from '../../assets/people.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} alt="" />
    </div>
  )
}

export default Navbar