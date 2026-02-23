const Footer = () => {
  return (
    <footer className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
          Curated by Architects.<br />
          Led by Architects.<br />
          <span className="text-primary italic">Owned by Architects.</span>
        </h2>
        <p className="font-sans text-primary-foreground/50 text-sm tracking-wider uppercase mt-12 mb-2">
          The Nela Collective · FY 2026–27
        </p>
        <p className="font-sans text-primary-foreground/30 text-xs">
          Architectural Study Tours · Community · Craft
        </p>
      </div>
    </footer>
  );
};

export default Footer;
