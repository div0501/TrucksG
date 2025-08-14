import Card from "@/components/Card";
import Button from "@/components/Button";
import { 
  Zap, FileText, MapPin, Shield, Users, Smartphone, 
  Clock, DollarSign, BarChart3, Bell, CheckCircle, ArrowRight 
} from "lucide-react";

export const metadata = { title: "Features – TrucksG" };

const featureCategories = [
  {
    title: "Core Features",
    description: "Essential tools for modern logistics management",
    features: [
      {
        icon: Zap,
        title: "Instant Quotes",
        description: "Get competitive freight quotes in seconds using our AI-powered pricing engine. Compare rates from verified transporters.",
        highlight: "Save up to 30% on freight costs"
      },
      {
        icon: FileText,
        title: "Paperless Documentation",
        description: "Digital invoices, e-way bills, and PODs. Automatic GST compliance and document generation.",
        highlight: "99% reduction in paperwork"
      },
      {
        icon: MapPin,
        title: "Real-time Tracking",
        description: "GPS-enabled shipment tracking with automated milestone updates and ETA predictions.",
        highlight: "Live location updates every 5 minutes"
      }
    ]
  },
  {
    title: "Business Tools",
    description: "Advanced features for growing businesses",
    features: [
      {
        icon: BarChart3,
        title: "Analytics & Reports",
        description: "Comprehensive dashboards with freight analytics, cost optimization insights, and performance metrics.",
        highlight: "Custom reports and data exports"
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description: "Multi-user access with role-based permissions, audit trails, and team communication tools.",
        highlight: "Unlimited team members"
      },
      {
        icon: Shield,
        title: "Security & Compliance",
        description: "Bank-grade security, encrypted data, and full regulatory compliance including GST and transport regulations.",
        highlight: "ISO 27001 certified infrastructure"
      }
    ]
  },
  {
    title: "User Experience",
    description: "Designed for efficiency and ease of use",
    features: [
      {
        icon: Smartphone,
        title: "Mobile First",
        description: "Native mobile apps for iOS and Android with offline capabilities and push notifications.",
        highlight: "Works offline for 24 hours"
      },
      {
        icon: Bell,
        title: "Smart Notifications",
        description: "Intelligent alerts for shipment updates, quote responses, and important milestones via SMS, email, and push.",
        highlight: "Customizable notification preferences"
      },
      {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock customer support with dedicated account managers for enterprise customers.",
        highlight: "Average response time: 2 minutes"
      }
    ]
  }
];

const benefits = [
  { icon: DollarSign, title: "30% Cost Savings", description: "on average freight costs" },
  { icon: Clock, title: "5x Faster", description: "quote generation" },
  { icon: CheckCircle, title: "99.9% Uptime", description: "guaranteed reliability" },
  { icon: Shield, title: "100% Secure", description: "encrypted data protection" }
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to move freight
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From instant quotes to real-time tracking, TrucksG provides all the tools 
            you need to streamline your logistics operations and grow your business.
          </p>
          <Button href="/register" size="lg" className="group">
            Start free trial
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="flex justify-center mb-3">
                    <Icon size={24} className="text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{benefit.title}</div>
                  <div className="text-sm text-gray-400">{benefit.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {category.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} hover variant="elevated" className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                          <Icon size={24} className="text-primary-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="bg-primary-50 rounded-lg p-3 border-l-4 border-primary-500">
                        <p className="text-sm font-medium text-primary-800">
                          {feature.highlight}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your logistics?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            Join thousands of businesses already using TrucksG to streamline 
            their freight operations and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/register" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Start free trial
            </Button>
            <Button 
              href="/contact" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Schedule demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
