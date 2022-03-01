import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='nav'>
        <h1>Oziel Lozano</h1>
        <div className='links'>
          <a>Home</a>
          <a>Contact</a>
        </div>
      </nav>
  );
}
 
export default Navbar;
