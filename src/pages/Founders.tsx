import { Link } from "react-router-dom";
import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";

const founders = [
  {
    name: "Arjun Mehta",
    role: "Co-Founder & Lead Curator",
    image: founder1,
    bio: "Arjun is a practicing architect with over a decade of experience in institutional and residential design. His belief that architecture is best learned through immersion — not textbooks — led him to create The Nela Collective. He curates every tour itinerary, ensuring each stop offers genuine professional insight.",
    quote: "Architecture lives in the details you can only see on site.",
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & Community Director",
    image: founder2,
    bio: "Priya brings a background in urban design and community building. She oversees The Nela Collective's growing network of architects, students, and design enthusiasts. Her vision is to create India's most connected architectural community — one that learns, sketches, and builds together.",
    quote: "We don't just visit buildings. We build connections.",
  },
];

const Founders = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-5 px-6 lg:px-12 flex items-center justify-between bg-background/80 backdrop-blur-sm border-b border-border">
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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 container mx-auto px-6 lg:px-12">
        <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
          The Founders
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-4">
          Meet the people behind<br />
          <span className="text-primary italic">the movement.</span>
        </h1>
        <p className="font-sans text-muted-foreground max-w-lg text-lg">
          Education Through Exploration — led by architects who believe the best classroom is a building site.
        </p>
      </section>

      {/* Founders */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12 space-y-20 lg:space-y-32">
          {founders.map((founder, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-20 items-center`}
            >
              <div className="lg:w-5/12">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="lg:w-7/12">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary block mb-2">
                  0{i + 1}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-1">
                  {founder.name}
                </h2>
                <p className="font-sans text-sm text-primary tracking-wider uppercase mb-6">
                  {founder.role}
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  {founder.bio}
                </p>
                <blockquote className="border-l-2 border-primary/40 pl-6">
                  <p className="font-serif text-xl text-foreground/80 italic">
                    "{founder.quote}"
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest-deep text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Want to connect?
          </h2>
          <a
            href="mailto:info@thenelacollective.com"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 font-sans text-sm tracking-wider uppercase hover:bg-gold-light transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default Founders;
