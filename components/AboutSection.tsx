import { Card } from "@/components/ui/card";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Story</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From humble beginnings to Adelaide&apos;s most respected training
            ground
          </p>
        </div>

        {/* Gym Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="overflow-hidden bg-gray-700 border-gray-600">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/about_us.jpg"
                  alt="Good Job Muay Thai gym interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  The Good Job Legacy
                </h3>
                <p className="text-gray-400 mb-4">
                  Good Job Muay Thai is a family owned and operated gym based in
                  Adelaide established in 2025.
                </p>
                <p className="text-gray-400 mb-4">
                  Founded by owner and head coach Job, our gym reflects
                  Job&apos;s lifelong dedication to Thailand&apos;s national
                  sport. Starting his Muay Thai journey at just 8 years old, Job
                  brings over 25 years&apos; experience in the industry,
                  including more than 100 professional fights and over 8 years
                  coaching in both Australia and Thailand. His passion lies in
                  sharing his knowledge and love for Muay Thai with students of
                  all backgrounds.
                </p>
                <p className="text-gray-400 mb-4">
                  At Good Job Muay Thai, we welcome everyone - from beginners
                  looking to build fitness and confidence to experienced
                  fighters honing their skills. Our classes cater to all levels,
                  including fundamentals, intermediate, advanced/fighter, and
                  kid&apos;s classes. We also offer personal training and
                  small-group private sessions tailored to individual goals.
                </p>
                <p className="text-gray-400">
                  Join us and experience authentic Muay Thai in a supportive,
                  family-friendly environment.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Follow Our Journey
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Stay connected with our community and see daily training highlights,
            student achievements, and gym updates
          </p>
          <div className="flex flex-col items-center md:flex-row justify-center gap-6">
            <Link
              href="https://www.instagram.com/goodjobmuaythai/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-64 flex justify-center gap-3 bg-red-600 hover:bg-red-700 text-white transition-colors px-6 py-3 rounded-lg group"
            >
              <SiInstagram
                className="h-6 w-6 text-gray-300 group-hover:text-white"
                size={24}
              />
              <span className="text-gray-300 group-hover:text-white font-medium">
                @goodjobmuaythai
              </span>
            </Link>
            <Link
              href="https://www.facebook.com/people/Good-Job-Muay-Thai/100081844877347/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-64 flex justify-center gap-3 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-lg group"
            >
              <SiFacebook
                className="h-6 w-6 text-gray-300 group-hover:text-white"
                size={24}
              />
              <span className="text-gray-300 group-hover:text-white font-medium">
                Good Job Muay Thai
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
