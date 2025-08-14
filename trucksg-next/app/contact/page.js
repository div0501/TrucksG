import Card from "@/components/Card";

export const metadata = { title: "Contact – TrucksG" };

export default function ContactPage(){
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <Card>
          <div className="grid sm:grid-cols-2 gap-6 text-sm" style={{ color: "var(--fg-muted)" }}>
            <div className="flex items-center gap-2">support@trucksg.com</div>
            <div className="flex items-center gap-2">+91-XXXXXXXXXX</div>
          </div>
        </Card>
      </div>
    </section>
  );
}
