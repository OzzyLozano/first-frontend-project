import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='nav-bg'>
        <nav className='nav'>
        <h1>Oziel Lozano</h1>
        <div className='links'>
          <a>Home</a>
          <a>Contact</a>
          <a>About me</a>
        </div>
      </nav>
      </div>
  );
}
 
export default Navbar;
