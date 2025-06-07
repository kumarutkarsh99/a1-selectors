import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                    bg-white/30 backdrop-blur-lg rounded-full 
                    px-8 py-3 flex gap-6 font-semibold text-black 
                    justify-center overflow-x-auto whitespace-nowrap">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer nav-link">Home</Link>
        <Link to="clients" smooth={true} duration={500} className="cursor-pointer nav-link">About Us</Link>
        <Link to="services" smooth={true} duration={500} className="cursor-pointer nav-link">Our Services</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer nav-link">Job Seekers</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer nav-link">For Employer</Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer nav-link">Testimonials</Link>
        <Link to="footer" smooth={true} duration={500} className="cursor-pointer nav-link">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
