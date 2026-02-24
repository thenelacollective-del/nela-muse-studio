import { Link } from "react-router-dom";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

const founders = [
  {
    name: "Arjun Mehta",
    role: "Co-Founder & Lead Architect",
    image: founder1,
    bio: "Arjun is a practicing architect with over a decade of experience designing cultural and institutional spaces across India. A graduate of CEPT University, he spent years leading studio tours informally before realising architecture education needed to break free from the classroom. His obsession with materiality, craft, and the stories buildings tell became the foundation of The Nela Collective.",
    quote: "Architecture isn't learned from textbooks — it's absorbed through walls, light, and the hands that built them.",
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & Community Director",
    image: founder2,
    bio: "Priya bridges the worlds of design, storytelling, and community building. With a background in architecture and arts management, she has curated exhibitions and workshops across Mumbai, Ahmedabad, and Jaipur. At The Nela Collective, she leads community partnerships, the sketching programme, and ensures every tour feels less like a trip and more like a conversation.",
    quote: "We don't just show people buildings. We help them see the city differently.",
  },
];

const Founders = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Nav bar */}
      <nav className="py-5 px-6 lg:px-12 flex items-center justify-between border-b border-border">
        <Link to="/" className="font-serif text-lg text-foreground tracking-wide">
          The Nela Collective
        </Link>
        <Link
          to="/"
          className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
            The People Behind It
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground max-w-2xl">
            Meet the founders.
          </h1>
        </div>
      </section>

      {/* Founders */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12 space-y-24">
          {founders.map((founder, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-20 items-start`}
            >
              <div className="lg:w-5/12">
                <img
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="lg:w-7/12 flex flex-col justify-center">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  {founder.role}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  {founder.name}
                </h2>
                <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  {founder.bio}
                </p>
                <blockquote className="border-l-2 border-primary pl-6">
                  <p className="font-serif text-lg text-foreground/80 italic">
                    "{founder.quote}"
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-dark text-primary-foreground text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Want to collaborate?
          </h2>
          <a
            href="mailto:info@thenelacollective.com"
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/80 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default Founders;
