import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Users,
  Phone,
  Mail,
  Target,
  Clock,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function PersonalTrainingSection() {
  return (
    <section id="personalTraining" className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-white">
            Personal Training
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            One-on-one and small group training sessions tailored to your
            specific goals and schedule
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* 1-on-1 Training */}
          <Card className="bg-gray-700 border-gray-600 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Users className="h-5 w-5 text-red-500" />
                1-on-1 Training
              </CardTitle>
              <CardDescription className="text-gray-400">
                Individual focused sessions
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-3 h-[108px]">
                <div className="flex justify-between items-center p-3 bg-gray-600 rounded-lg">
                  <span className="text-gray-300">30 minutes</span>
                  <span className="font-bold text-white">$50</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-600 rounded-lg">
                  <span className="text-gray-300">60 minutes</span>
                  <span className="font-bold text-white">$90</span>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Personalized curriculum</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Flexible scheduling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Rapid skill development</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Semi-Private (2-3 people) */}
          <Card className="bg-gray-700 border-gray-600 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Users className="h-5 w-5 text-red-500" />
                Semi-Private
              </CardTitle>
              <CardDescription className="text-gray-400">
                2-3 people per session
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-3 h-[108px]">
                <div className="flex justify-between items-center p-3 bg-gray-600 rounded-lg">
                  <span className="text-gray-300">60 minutes (2-on-1)</span>
                  <span className="font-bold text-white">$120</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-600 rounded-lg">
                  <span className="text-gray-300">60 minutes (3-on-1)</span>
                  <span className="font-bold text-white">$135</span>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Small group attention</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Partner training drills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Cost-effective option</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Small Group (4-6 people) */}
          <Card className="bg-gray-700 border-gray-600 flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center gap-2">
                <Users className="h-5 w-5 text-red-500" />
                Private Small Group
              </CardTitle>
              <CardDescription className="text-gray-400">
                4+ people per session
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-3 h-auto md:h-[108px]">
                <div className="flex justify-between items-center p-3 bg-gray-600 rounded-lg">
                  <span className="text-gray-300">90 minutes</span>
                  <span className="font-bold text-white">$25/pp</span>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Group dynamics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Team building exercises</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Personal Training Benefits */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-bold mb-6 text-white">
            Personal Training Benefits
          </h4>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-red-500" />
              </div>
              <h5 className="font-semibold mb-2 text-white">
                Customized Training
              </h5>
              <p className="text-sm text-gray-400">
                Tailored to your specific goals and skill level
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-500" />
              </div>
              <h5 className="font-semibold mb-2 text-white">
                Flexible Scheduling
              </h5>
              <p className="text-sm text-gray-400">
                Book sessions that fit your busy lifestyle
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-red-500" />
              </div>
              <h5 className="font-semibold mb-2 text-white">Faster Progress</h5>
              <p className="text-sm text-gray-400">
                Accelerated learning with focused attention
              </p>
            </div>
          </div>
        </div>

        {/* Personal Training CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gray-700 border-gray-600 p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold mb-4 text-white">
              Ready to Start Personal Training?
            </h4>
            <p className="text-gray-400 mb-6">
              Contact us to discuss your goals and schedule your first session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="sms:+61497639213?body=Hi! I'm interested in booking a personal training session">
                <Button className="bg-red-600 hover:bg-red-700 text-white w-[150px]">
                  <Phone className="h-4 w-4 mr-2" />
                  Send SMS
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  className="w-[150px]"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Inquiry
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
