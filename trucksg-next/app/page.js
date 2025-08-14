import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import { Clock, FileText, MapPin, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant quotes",
    description: "Get competitive freight quotes in seconds, not hours. AI-powered pricing optimization."
  },
  {
    icon: FileText,
    title: "Paperless docs",
    description: "Digital invoices, e-way bills, and compliance tracking. Reduce paperwork by 90%."
  },
  {
    icon: MapPin,
    title: "Visual tracking",
    description: "Real-time shipment tracking with GPS precision and automated milestone updates."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate routine tasks and focus on growing your business."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-grade security with full GST and regulatory compliance."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multi-user access with role-based permissions and audit trails."
  }
];

export default function Page() {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to move freight
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined logistics management designed for modern businesses. 
              Reduce costs, improve efficiency, and delight your customers.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} hover className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                      <Icon size={24} className="text-primary-600" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built for MSMEs & enterprises
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're shipping 10 packages or 10,000, TrucksG scales with your business. 
                One platform for all your logistics needs.
              </p>
              
              <div className="space-y-6 mb-8">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Icon size={16} className="text-primary-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/register" size="lg">
                  Get started free
                </Button>
                <Button href="/features" variant="outline" size="lg">
                  See all features
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card variant="elevated" padding="lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Dashboard Overview</h4>
                      <p className="text-sm text-gray-500">Real-time freight insights</p>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900">47</div>
                      <div className="text-xs text-gray-500">Active shipments</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900">₹2.4L</div>
                      <div className="text-xs text-gray-500">Monthly savings</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="flex-1 text-sm text-gray-600">
                          Shipment #{1000 + i} • In Transit
                        </div>
                        <div className="text-xs text-gray-400">2h ago</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
