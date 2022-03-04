import { Link } from 'react-router-dom'
import Contact from './Contact';

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <p className="small-p my-1">This page was made by Oziel Lozano.</p>
      <Link to="/project/contact">Contact me.</Link>
    </footer>
  );
}
 
export default Footer;
