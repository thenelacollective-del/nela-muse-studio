import tourGroupImage from "@/assets/tour-group.jpg";
import sketchingImage from "@/assets/sketching.jpg";

const pillars = [
  {
    number: "01",
    title: "Tours",
    description:
      "Curated study tours to iconic buildings, live sites & architecture offices — led by architects, not guides.",
    image: tourGroupImage,
  },
  {
    number: "02",
    title: "Community",
    description:
      "A platform where practicing architects, students, and design firms connect, learn, and collaborate.",
    image: null,
  },
  {
    number: "03",
    title: "Craft",
    description:
      "Reviving sketching and the art in architecture through exhibitions, on-site workshops, and a branded sketchbook.",
    image: sketchingImage,
  },
];

const WhatWeAre = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
          What We Are
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4 max-w-xl">
          Not a travel company.
        </h2>
        <p className="font-serif text-3xl md:text-5xl text-primary italic mb-16">
          An architectural movement.
        </p>

        <div className="space-y-16">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
            >
              {pillar.image ? (
                <div className="lg:w-1/2">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              ) : (
                <div className="lg:w-1/2 bg-card aspect-[4/3] flex items-center justify-center">
                  <span className="font-serif text-8xl text-primary/20">{pillar.number}</span>
                </div>
              )}
              <div className="lg:w-1/2">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-2">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4 tracking-wide uppercase">
                  {pillar.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-md">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAre;
