"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/register", label: "Register" },
    { href: "/contact", label: "Contact" }
  ];

  const NavLink = ({ href, label, onClick }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`
          relative px-3 py-2 text-sm font-medium transition-all duration-200 ease-out
          ${isActive 
            ? "text-gray-900" 
            : "text-gray-600 hover:text-gray-900"
          }
        `}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
        {isActive && (
          <span 
            className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 rounded-full"
            aria-hidden="true"
          />
        )}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group"
            aria-label="TrucksG Home"
          >
            <Image
              src="/images/trucksg-logo.svg"
              alt="TrucksG Logo"
              width={140}
              height={56}
              className="h-10 w-auto group-hover:opacity-90 transition-opacity duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex">
            <Button href="/register" size="md">
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden border-t border-gray-200 py-4 space-y-1"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <NavLink 
                  key={item.href} 
                  {...item} 
                  onClick={() => setMobileMenuOpen(false)}
                />
              ))}
            </nav>
            <div className="pt-4 border-t border-gray-200 mt-4">
              <Button 
                href="/register" 
                size="md" 
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
