import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600">
                <span className="text-sm font-bold">MT</span>
              </div>
              <span className="text-xl font-bold">Good Job Muay Thai</span>
            </div>
            <p className="text-gray-400">Adelaide&apos;s Best Muay Thai Gym</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/#classes"
                  className="hover:text-white transition-colors"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/#timetable"
                  className="hover:text-white transition-colors"
                >
                  Timetable
                </Link>
              </li>
              <li>
                <Link
                  href="/#membership"
                  className="hover:text-white transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Beginner Classes</li>
              <li>Intermediate Classes</li>
              <li>Clinching Classes</li>
              <li>Pads Training</li>
              <li>Personal Training</li>
              <li>Kids Classes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 ">
              <li className="flex items-center gap-1">
                <MapPin className="h-4 w-4 mr-2" />
                7/75-77 Grange Road Welland, SA, 5007
              </li>
              <li className="flex items-center gap-1">
                <Phone className="h-4 w-4 mr-2" />
                +61 411746407
              </li>
              <li className="flex items-center gap-1">
                <Mail className="h-4 w-4 mr-2" />
                goodjobmuaythai@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 Good Job Muay Thai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
