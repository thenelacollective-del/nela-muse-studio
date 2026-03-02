import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 px-6 lg:px-12 flex items-center justify-between bg-gradient-to-b from-foreground/30 to-transparent">
      <Link to="/" className="font-serif text-lg tracking-wide text-white">
        The Nela Collective
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="font-sans text-xs tracking-[0.2em] uppercase transition-colors text-white">
          About
        </a>
        <a href="#tours" className="font-sans text-xs tracking-[0.2em] uppercase transition-colors text-white">
          Tours
        </a>
        


        <a className="font-sans text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground px-5 py-2 hover:bg-gold-light transition-colors" href="mailto:info@thenelacollective.com">
          Get in Touch
        </a>
      </div>
    </nav>);

};

export default Navbar;