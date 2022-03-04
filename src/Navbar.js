import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='nav-bg'>
        <nav className='nav'>
        <h1>Oziel Lozano</h1>
        <div className='links'>
          <Link to="/project">Home</Link>
          <Link to="/project/contact">Contact</Link>
        </div>
      </nav>
      </div>
  );
}
 
export default Navbar;
