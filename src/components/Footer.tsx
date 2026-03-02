const Footer = () => {
  return (
    <footer className="py-24 lg:py-32 bg-forest-deep text-foreground">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Curated by Architects.<br />
          Led by Architects.<br />
          <span className="text-primary italic">Owned by Architects.</span>
        </h2>
        <p className="font-sans text-primary/50 text-sm tracking-wider uppercase mt-12 mb-2">
          The Nela Collective · FY 2026–27
        </p>
        <p className="font-sans text-foreground/30 text-xs">
          Education Through Exploration
        </p>
      </div>
    </footer>
  );
};

export default Footer;
