import Card from "@/components/Card";
c
export const metadata = { title: "About – TrucksG" };

export default function AboutPage(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">About TrucksG</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card><p style={{ color: "var(--fg-muted)" }}>We digitize road freight: fast RFQs, transparent quotes, and live timelines.</p></Card>
          <Card><p style={{ color: "var(--fg-muted)" }}>Built by operators who care about speed, clarity, and scale.</p></Card>
        </div>
      </div>
    </section>
  );
}
