"use client";
import { useState } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Field from "@/components/Field";
import { CheckCircle, AlertCircle, Truck, Package, Users, Shield } from "lucide-react";

const roleOptions = [
  {
    id: "Shipper",
    label: "Shipper",
    description: "I need to ship goods",
    icon: Package
  },
  {
    id: "Transporter", 
    label: "Transporter",
    description: "I provide transport services",
    icon: Truck
  }
];

const benefits = [
  {
    icon: Users,
    title: "Join 5,000+ logistics professionals",
    description: "Connect with verified shippers and transporters across India"
  },
  {
    icon: Shield,
    title: "Secure & verified platform", 
    description: "All users undergo verification for trust and security"
  },
  {
    icon: CheckCircle,
    title: "Start immediately",
    description: "Begin posting loads or finding freight within minutes"
  }
];

export default function RegisterPage() {
  const [role, setRole] = useState("Shipper");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.get('name')?.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    const email = formData.get('email')?.trim();
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    const phone = formData.get('phone')?.trim();
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-()]{10,}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    return newErrors;
  };

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setToast(null);
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }
    
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setToast({ 
          type: "success", 
          msg: "Registration successful! We'll contact you within 24 hours." 
        });
        e.currentTarget.reset();
        setRole("Shipper");
      } else {
        const errorData = await response.json();
        setToast({ 
          type: "error", 
          msg: errorData.message || "Registration failed. Please try again." 
        });
      }
    } catch (error) {
      setToast({ 
        type: "error", 
        msg: "Network error. Please check your connection and try again." 
      });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 5000);
    }
  }

  const Toast = ({ type, msg }) => (
    <div 
      className={`
        flex items-center gap-3 p-4 rounded-lg border
        ${type === 'success' 
          ? 'bg-green-50 border-green-200 text-green-800' 
          : 'bg-red-50 border-red-200 text-red-800'
        }
      `}
      role="alert"
    >
      {type === 'success' ? (
        <CheckCircle size={20} className="flex-shrink-0" />
      ) : (
        <AlertCircle size={20} className="flex-shrink-0" />
      )}
      <span className="text-sm font-medium">{msg}</span>
    </div>
  );

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join TrucksG
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start moving freight smarter. Connect with trusted partners and 
            streamline your logistics operations today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* Role Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                I am a <span className="text-red-500">*</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                {roleOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setRole(option.id)}
                      className={`
                        p-4 rounded-lg border-2 text-left transition-all duration-200 ease-out
                        ${role === option.id
                          ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Icon 
                          size={20} 
                          className={role === option.id ? 'text-primary-600' : 'text-gray-400'}
                        />
                        <div>
                          <div className={`font-medium ${role === option.id ? 'text-primary-900' : 'text-gray-900'}`}>
                            {option.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {option.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Registration Form */}
            <Card>
              <form onSubmit={submitForm} className="space-y-6" noValidate>
                <input type="hidden" name="role" value={role} />
                
                <Field
                  name="name"
                  label="Full Name"
                  placeholder="Enter your full name"
                  required
                  error={errors.name}
                />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="you@company.com"
                    required
                    error={errors.email}
                  />
                  <Field
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    placeholder="+91 98765 43210"
                    required
                    error={errors.phone}
                  />
                </div>
                
                <Field
                  name="company"
                  label="Company Name"
                  placeholder="Your company name (optional)"
                  helpText="Help others identify your business"
                />
                
                <Button 
                  type="submit" 
                  disabled={loading}
                  loading={loading}
                  size="lg"
                  className="w-full"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
                
                {toast && <Toast type={toast.type} msg={toast.msg} />}
                
                <p className="text-xs text-gray-500 text-center">
                  By registering, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Why choose TrucksG?
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Icon size={20} className="text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900 mb-1">5,000+</div>
                <div className="text-sm text-primary-700">Active users</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
