"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="flex h-16 items-center justify-between px-6 w-full">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600">
            <span className="text-sm font-bold text-white">MT</span>
          </div>
          <span className="text-xl font-bold text-white">
            Good Job Muay Thai
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="#classes"
            className="text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors"
          >
            Classes
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#timetable"
            className="text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors"
          >
            Timetable
          </Link>
          <Link
            href="#membership"
            className="text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors"
          >
            Membership
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link href="/#contact">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Book Trial Class
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-gray-200 hover:text-teal-500 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur">
          <nav className="container px-6 py-4 space-y-4 mx-auto">
            <Link
              href="#classes"
              onClick={closeMobileMenu}
              className="block text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors py-2"
            >
              Classes
            </Link>
            <Link
              href="#about"
              onClick={closeMobileMenu}
              className="block text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors py-2"
            >
              About Us
            </Link>
            <Link
              href="#timetable"
              onClick={closeMobileMenu}
              className="block text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors py-2"
            >
              Timetable
            </Link>
            <Link
              href="#membership"
              onClick={closeMobileMenu}
              className="block text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors py-2"
            >
              Membership
            </Link>
            <Link
              href="#contact"
              onClick={closeMobileMenu}
              className="block text-sm font-medium text-gray-300 hover:text-teal-500 transition-colors py-2"
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-800">
              <Link href="#contact">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Book Trial Class
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
