const items = [
  {
    title: "Sketching Revival",
    description:
      "Connect-artists join every tour to teach on-site sketching. We revive the art and observation skills that architecture school once demanded.",
  },
  {
    title: "Exhibitions & Buzz",
    description:
      "Curate sketching exhibitions from tour artwork. Create community buzz, press moments, and brand visibility beyond the tour itself.",
  },
  {
    title: "The Nela Sketchbook",
    description:
      "A co-designed, branded sketchbook in collaboration with graphic designers. Sold during tours and online. A merchandise anchor.",
  },
  {
    title: "Industry Bridge",
    description:
      "The Nela Collective connects architects, vendors, colleges, and clients — becoming the connective tissue of India's design community.",
  },
];

const BeyondTheTour = () => {
  return (
    <section className="py-24 lg:py-32 bg-warm-dark text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
          Beyond the Tour
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-16 max-w-xl">
          A community with a voice in architecture.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-primary-foreground/10 p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-serif text-xl text-primary-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondTheTour;
