import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern architectural building at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <p className="font-sans text-sm tracking-[0.35em] uppercase text-primary-foreground/70 mb-4 animate-fade-up">
          Architectural Study Tours · Community · Craft
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          The Nela<br />Collective
        </h1>
        <p className="font-sans text-lg md:text-xl text-primary-foreground/80 max-w-lg mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Structured professional exposure curated by Architects, for Architects.
        </p>
        <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <a
            href="#tours"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 font-sans text-sm tracking-wider uppercase hover:bg-terracotta-light transition-colors"
          >
            Explore Tours
          </a>
          <a
            href="#about"
            className="inline-block border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 font-sans text-sm tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
