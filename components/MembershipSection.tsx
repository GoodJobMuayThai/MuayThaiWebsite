import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Shield,
  Users,
  Clock,
  Target,
  Trophy,
} from "lucide-react";
import Link from "next/link";

export default function MembershipSection() {
  return (
    <section id="membership" className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Membership Plans
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your training goals and lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Silver */}
          <Card className="relative flex flex-col bg-gray-700 border-gray-600 h-full">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-600 text-white">Great Value</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-white">Silver</CardTitle>
              <CardDescription className="text-gray-400">
                Short-term commitment
              </CardDescription>
              <div className="text-2xl font-bold text-white">
                $55<span className="text-sm font-normal">/week</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">
                    6 month lock-in contract
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">All Classes Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Equipment Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Pads Training</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-red-600/20 border border-red-600/30 rounded-lg h-[110px]">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-4 w-4 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">
                    SIGN UP BONUS OFFER
                  </span>
                </div>
                <p className="text-white text-sm font-medium">
                  Free gym merchandise package
                </p>
                <p className="text-gray-300 text-xs">
                  1 Free pair of hand wraps
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Gold */}
          <Card className="relative flex flex-col bg-gray-700 border-gray-600 h-full">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-green-600 text-white">Best Deal</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-white">Gold</CardTitle>
              <CardDescription className="text-gray-400">
                Serious training commitment
              </CardDescription>
              <div className="text-2xl font-bold text-white">
                $49<span className="text-sm font-normal">/week</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">
                    12 month lock-in contract
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">All Classes Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Equipment Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Pads Training</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-red-600/20 border border-red-600/30 rounded-lg h-[110px]">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-4 w-4 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">
                    SIGN UP BONUS OFFER
                  </span>
                </div>
                <p className="text-white text-sm font-medium">
                  Free gym merchandise package
                </p>
                <p className="text-gray-300 text-xs">
                  1 Free pair of hand wraps
                </p>
                <p className="text-gray-300 text-xs">
                  1 Free Good Job Muay Thai short
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Hybrid */}
          <Card className="relative flex flex-col border-red-600 border-2 bg-gray-700 h-full">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-red-600 text-white">Most Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-white">Hybrid</CardTitle>
              <CardDescription className="text-gray-400">
                Maximum savings & benefits
              </CardDescription>
              <div className="text-2xl font-bold text-white">
                $70<span className="text-sm font-normal">/week</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">
                    6 month lock-in contract
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">All Classes Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Equipment Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Pads Training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">
                    Access to{" "}
                    <a href="https://real-gym.com.au/" className="text-red-400">
                      Real Gym
                    </a>{" "}
                    classes & equipments
                  </span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-red-600/20 border border-red-600/30 rounded-lg h-[110px]">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-4 w-4 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">
                    SIGN UP BONUS OFFER
                  </span>
                </div>
                <p className="text-white text-sm font-medium">
                  Free gym merchandise package
                </p>
                <p className="text-gray-300 text-xs">
                  1 Free pair of hand wraps
                </p>
                <p className="text-gray-300 text-xs">
                  1 Free Good Job Muay Thai short
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Student/ FIFO workers */}
          <Card className="relative flex flex-col bg-gray-700 border-gray-600 h-full">
          <CardHeader>
              <CardTitle className="text-xl text-white">Students/ FIFO workers</CardTitle>
              <CardDescription className="text-gray-400">
                Flexible plan for students and FIFO workers
              </CardDescription>
              <div className="text-2xl font-bold text-white">
                $35<span className="text-sm font-normal">/week</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">
                    3 month initial lock-in contract, monthly thereafter
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">All Classes Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Equipment Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Pads Training</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-red-600/20 border border-red-600/30 rounded-lg h-[110px]">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-4 w-4 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">
                    SIGN UP BONUS OFFER
                  </span>
                </div>
                <p className="text-white text-sm font-medium">
                  Free gym merchandise package
                </p>
                <p className="text-gray-300 text-xs">
                  1 Free pair of hand wraps
                </p>
                <p className="text-gray-300 text-xs">
                  1 Free Good Job Muay Thai short
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Kids Plan */}
          <Card className="relative flex flex-col bg-gray-700 border-gray-600 h-full">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-green-500 text-white">Kids Program</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-white">Kids Classes</CardTitle>
              <CardDescription className="text-gray-400">
                Ages 6-14 years old
              </CardDescription>
              <div className="text-lg font-bold text-white">
                Contact for Pricing
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <ul className="space-y-2 text-sm pl-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">
                    Age-appropriate training
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">
                    Focus on discipline & respect
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">
                    Safe learning environment
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Character development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Fun & engaging classes</span>
                </li>
              </ul>
              <Link href="/#contact">
                <Button
                  className="w-full mt-4"
                  variant="outline"
                >
                  Inquire Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Drop-In Casual */}
          <Card className="relative flex flex-col bg-gray-700 border-gray-600 h-full overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-xl text-white">Casual Pass</CardTitle>
              <CardDescription className="text-gray-400">
                Drop-in casual pass
              </CardDescription>
              <div className="flex gap-2">
                <div className="text-2xl font-bold text-white">
                  $28
                  <span className="text-sm font-normal">/class (Adults)</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  $22<span className="text-sm font-normal">/class (Kids)</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Single class access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Equipment Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Beginner friendly</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 10 Class Pass */}
          <Card className="relative flex flex-col bg-gray-700 border-gray-600 h-full overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                10 Class Pass
              </CardTitle>
              <CardDescription className="text-gray-400">
                Perfect for trying us out
              </CardDescription>
              <div className="text-2xl font-bold text-white">$250</div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">
                    Access to any 10 classes
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Equipment Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Beginner friendly</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-gray-600 rounded-lg">
                <h5 className="text-xs font-semibold text-gray-300 mb-2">
                  Terms & Conditions:
                </h5>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Must be redeemed within 6 months of purchase date</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Membership Benefits */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">
            All Memberships Include
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="font-semibold mb-2 text-white">
                Equipment Provided
              </h4>
              <p className="text-sm text-gray-400">
                Pads and protective gear included in all classes
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="font-semibold mb-2 text-white">
                Expert Instruction
              </h4>
              <p className="text-sm text-gray-400">
                Certified trainers and former champions
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="font-semibold mb-2 text-white">
                Flexible Schedule
              </h4>
              <p className="text-sm text-gray-400">
                Multiple class times throughout the week
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="font-semibold mb-2 text-white">
                Progress Tracking
              </h4>
              <p className="text-sm text-gray-400">
                Regular assessments and skill development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
