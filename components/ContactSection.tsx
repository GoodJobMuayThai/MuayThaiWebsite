import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import FormsSection from "./FormsSection";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-zinc-950">
      <div className="px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Visit Our Gym
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Ready to start your Muay Thai journey? Come visit us for a tour
              and free trial class.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-teal-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">Location</h3>
                  <Link
                    href="https://maps.google.com/?q=7/75-77+Grange+Road+Welland+SA+5007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-500 transition-colors cursor-pointer"
                  >
                    7/75-77 Grange Road Welland, SA, 5007
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-teal-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">Hours</h3>
                  <p className="text-gray-400">
                    Mon-Fri: 6:00 AM - 6:45 PM
                    <br />
                    Sat: 6:00 AM - 9:00 AM
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-teal-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">Phone</h3>
                  <p className="text-gray-400">+61 411746407</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-teal-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-white">Email</h3>
                  <p className="text-gray-400">goodjobmuaythai@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Link
                  href="https://www.facebook.com/people/Good-Job-Muay-Thai/100081844877347/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiFacebook className="h-6 w-6 text-teal-500" />
                </Link>
                <Link
                  href="https://www.instagram.com/goodjobmuaythai/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiInstagram className="h-6 w-6 text-teal-500" />
                </Link>
              </div>
            </div>
          </div>

          <FormsSection />
        </div>
      </div>
    </section>
  );
}
