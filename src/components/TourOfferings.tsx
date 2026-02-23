const tours = [
  {
    number: "01",
    title: "Sketching Revival",
    subtitle: "Art & Observation",
    description: "Connect-artists join every tour to teach on-site sketching, reviving skills architecture school once demanded.",
  },
  {
    number: "02",
    title: "Domestic Study Tours",
    subtitle: "Ahmedabad · Mumbai · Bangalore · Jaipur · Auroville",
    description: "3–7 day curated programs to India's most architecturally significant cities.",
  },
  {
    number: "03",
    title: "International Tours",
    subtitle: "Japan · Europe · Singapore",
    description: "Immersive global exposure to world-class architecture and urbanism.",
  },
  {
    number: "04",
    title: "College-Specific Tours",
    subtitle: "Faculty Coordinated · Certified",
    description: "Curriculum-aligned programs with institutional MoUs and certification.",
  },
  {
    number: "05",
    title: "Firm & Brand Collaborations",
    subtitle: "Sponsored · Team Learning",
    description: "Custom programs for architecture firms and material brand exposure tours.",
  },
];

const TourOfferings = () => {
  return (
    <section id="tours" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
          What We Offer
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-16">
          Five distinct tour formats.
        </h2>

        <div className="grid gap-0 divide-y divide-border">
          {tours.map((tour) => (
            <div
              key={tour.number}
              className="py-8 lg:py-10 grid grid-cols-12 gap-4 items-start group hover:bg-background/50 transition-colors px-4 -mx-4"
            >
              <span className="col-span-2 lg:col-span-1 font-sans text-xs tracking-widest text-primary pt-1">
                {tour.number}
              </span>
              <div className="col-span-10 lg:col-span-3">
                <h3 className="font-serif text-xl lg:text-2xl text-foreground">
                  {tour.title}
                </h3>
              </div>
              <p className="col-span-12 lg:col-span-3 font-sans text-sm text-primary/80 tracking-wide">
                {tour.subtitle}
              </p>
              <p className="col-span-12 lg:col-span-5 font-sans text-sm text-muted-foreground leading-relaxed">
                {tour.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourOfferings;
