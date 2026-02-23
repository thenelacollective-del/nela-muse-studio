const Problem = () => {
  const problems = [
    {
      title: "Theory Heavy",
      description:
        "Curriculum is overwhelmingly classroom-based with little connection to live projects or real execution.",
    },
    {
      title: "No Site Access",
      description:
        "Students and even practicing architects rarely get structured access to buildings, offices, or factories.",
    },
    {
      title: "Isolated Professionals",
      description:
        "There is no curated community where architects can learn, network, and grow together beyond their firms.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
          The Problem
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-16 max-w-2xl">
          Architecture education stops at the classroom door.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((item, i) => (
            <div key={i} className="border-t border-border pt-8">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                0{i + 1}
              </span>
              <h3 className="font-serif text-xl mb-3 text-foreground">{item.title}</h3>
              <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
