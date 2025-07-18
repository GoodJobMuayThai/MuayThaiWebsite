import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10" />
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet="/hero_img2.jpg" />
        <source media="(max-width: 767px)" srcSet="/hero_img.jpg" />
        <img
          src="/hero_img.jpg"
          alt="Muay Thai training"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </picture>
      <div className="relative z-20 text-center text-white max-w-6xl px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">
          UNLEASH YOUR
          <span className="block text-red-500 mt-2">INNER WARRIOR</span>
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Master the Art of Eight Limbs at Adelaide's Best Muay Thai Gym
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-xl px-12 py-4 h-auto"
            >
              Start Your Journey
            </Button>
          </Link>
          <Link href="/#classes">
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-4 h-auto"
            >
              View Our Classes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
