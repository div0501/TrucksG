"use client";
import Card from "./Card";
import Button from "./Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-primary-50/30 min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-600/10" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium border border-primary-200"
              >
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                Trusted by 5,000+ logistics professionals
              </motion.div>

              {/* Headlines */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
              >
                Move freight.
                <br />
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Faster. Smarter.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed"
              >
                Connect shippers and transporters with instant quotes, paperless documentation, 
                and real-time tracking. Transform your logistics operations today.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/register" size="lg" className="group">
                Start free trial
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                href="#demo" 
                variant="ghost" 
                size="lg"
                className="group text-gray-700 hover:text-gray-900"
              >
                <Play size={16} className="transition-transform group-hover:scale-110" />
                Watch demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-6 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">₹50Cr+</div>
                <div className="text-sm text-gray-600">Freight moved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Illustration */}
          <motion.div
            className="relative h-80 lg:h-96"
            variants={itemVariants}
            aria-hidden="true"
          >
            <Card variant="elevated" className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white to-gray-50">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-grid-pattern" style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px"
                }} />
              </div>

              {/* Road */}
              <div className="absolute bottom-16 left-0 right-0 h-12 bg-gray-300 rounded-sm">
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-white opacity-80" />
                <div className="absolute inset-x-0 top-1/2 h-0.5">
                  <div 
                    className="w-full h-full bg-repeat-x animate-pulse"
                    style={{ 
                      backgroundImage: "linear-gradient(to right, #374151 40%, transparent 60%)", 
                      backgroundSize: "30px 2px" 
                    }} 
                  />
                </div>
              </div>

              {/* Animated Truck */}
              <motion.div
                className="absolute bottom-20 left-0"
                animate={prefersReducedMotion ? {} : { x: [-100, 400, -100] }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 8,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "linear",
                  repeatDelay: 1
                }}
              >
                <div className="flex items-end drop-shadow-lg">
                  {/* Truck Cabin */}
                  <div className="w-16 h-12 bg-primary-600 rounded-l-lg rounded-tr-lg shadow-md" />
                  {/* Trailer */}
                  <div className="w-32 h-16 bg-gray-800 rounded-r-md -ml-2 shadow-lg" />
                </div>
                {/* Wheels */}
                <div className="flex gap-8 mt-1 ml-2">
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-400"
                    animate={prefersReducedMotion ? {} : { rotate: 360 }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-400"
                    animate={prefersReducedMotion ? {} : { rotate: 360 }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-8 right-8 bg-green-100 rounded-lg p-3 shadow-sm"
                animate={prefersReducedMotion ? {} : { y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs font-semibold text-green-800">Live Tracking</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div className="text-xs text-green-600">On Route</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-20 left-8 bg-blue-100 rounded-lg p-3 shadow-sm"
                animate={prefersReducedMotion ? {} : { y: [2, -2, 2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-xs font-semibold text-blue-800">Instant Quote</div>
                <div className="text-lg font-bold text-blue-900">₹12,450</div>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
