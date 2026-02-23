import ahmedabadImage from "@/assets/ahmedabad.jpg";

const days = [
  {
    day: "Day 1",
    title: "Modern Indian Architecture",
    activity: "Arrival + orientation. Key modern works.",
    outcome: "Brick as structure, climatic responses, architectural vocabulary.",
  },
  {
    day: "Day 2",
    title: "Institutional Architecture",
    activity: "Institutional campuses & academic buildings.",
    outcome: "Campus planning, monumentality vs human scale, exposed concrete.",
  },
  {
    day: "Day 3",
    title: "Practice & Construction",
    activity: "Architecture office visit + site / factory.",
    outcome: "Design workflow, BOQ logic, execution challenges, detailing vs cost.",
  },
  {
    day: "Day 4",
    title: "Urban Fabric & Reflection",
    activity: "Heritage walks + urban fabric study.",
    outcome: "Urban context, integration of old & new, design reflection.",
  },
];

const SampleTour = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
              Sample Tour
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Ahmedabad — Modern Indian Architecture & Constructability
            </h2>
            <img
              src={ahmedabadImage}
              alt="Architecture in Ahmedabad"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="space-y-8 lg:pt-16">
            {days.map((day, i) => (
              <div key={i} className="border-l-2 border-primary/30 pl-6">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary block mb-1">
                  {day.day}
                </span>
                <h3 className="font-serif text-lg text-foreground mb-2">{day.title}</h3>
                <p className="font-sans text-sm text-muted-foreground mb-1">
                  {day.activity}
                </p>
                <p className="font-sans text-xs text-primary/70 italic">
                  Learning: {day.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleTour;
