import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Zap,
  Dumbbell,
  Users,
  BicepsFlexed,
  Timer,
  Trophy,
  Clock,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function ClassesSection() {
  return (
    <section id="classes" className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Training Programs
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From beginners to champions, we have the perfect program for your
            Muay Thai journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-md hover:shadow-white/30 bg-gray-800 border-gray-700">
            <div className="relative h-48">
              <Image
                src="/beginner.jpg"
                alt="Beginner Muay Thai"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-green-600">
                Beginner
              </Badge>
            </div>
            <CardHeader className="mb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Target className="h-5 w-5 text-red-500" />
                Fundamentals
              </CardTitle>
              <CardDescription className="text-gray-400 h-4">
                Perfect for newcomers to learn basic techniques and conditioning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  45 minutes
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-white">
                  What You'll Learn:
                </h4>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-outside pl-4">
                  <li>
                    Perfect starting point for anyone new to Muay Thai or
                    looking to build a strong foundation
                  </li>
                  <li>
                    Learn essential techniques: stance, footwork, punches,
                    kicks, knees, and elbows
                  </li>
                  <li>
                    Supportive and friendly environment led by experienced
                    coaches
                  </li>
                  <li>
                    Focus on developing correct form, balance, and coordination
                  </li>
                  <li>Improve fitness, strength, and confidence</li>
                  <li>
                    Suitable for training for fun, fitness, or future
                    competition
                  </li>
                  <li>No experience necessary - just bring your enthusiasm!</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-white/30 bg-gray-800 border-gray-700">
            <div className="relative h-48">
              <Image
                src="/intermediate.jpg"
                alt="Intermediate Muay Thai"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-[25%_5%]"
              />
              <Badge className="absolute top-4 left-4 bg-orange-600">
                Intermediate
              </Badge>
            </div>
            <CardHeader className="mb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Zap className="h-5 w-5 text-red-500" />
                Intermediate
              </CardTitle>
              <CardDescription className="text-gray-400 h-4">
                Refining your techniques and light sparring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  45 minutes
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-white">
                  What You'll Learn:
                </h4>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-outside pl-4">
                  <li>
                    Designed for students who have built a solid foundation and
                    are ready to advance
                  </li>
                  <li>
                    Focus on refining technique, improving timing and developing
                    combinations
                  </li>
                  <li>Learn defence and ringcraft skills</li>
                  <li>
                    Apply skills with controlled partner drills, pad work and
                    light sparring
                  </li>
                  <li>Build confidence and adaptability</li>
                  <li>
                    Challenge yourself to sharpen technique and boost fitness
                  </li>
                  <li>
                    Suitable for those who have completed fundamentals or have
                    previous experience
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-white/30 bg-gray-800 border-gray-700">
            <div className="relative h-48">
              <Image
                src="/all_levels.jpg"
                alt="All levels training"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-blue-600">
                All Levels
              </Badge>
            </div>
            <CardHeader className="mb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Dumbbell className="h-5 w-5 text-red-500" />
                All Levels
              </CardTitle>
              <CardDescription className="text-gray-400 h-4">
                Training for everyone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  60 minutes
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-white">
                  What You'll Learn:
                </h4>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-outside pl-4">
                  <li>
                    Brings everyone together - from complete beginners to
                    experienced practitioners
                  </li>
                  <li>
                    Focus on building fitness, sharpening technique and
                    developing practical skills
                  </li>
                  <li>
                    Training through pad work, partner drills and conditioning
                    exercises
                  </li>
                  <li>
                    Options to scale and challenge yourself at your own pace
                  </li>
                  <li>
                    Experienced coaches ensure each student gets the most out of
                    every session
                  </li>
                  <li>
                    Great way to train, improve and be part of a welcoming Muay
                    Thai community
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-white/30 bg-gray-800 border-gray-700">
            <div className="relative h-48">
              <Image
                src="/kids_class.jpg"
                alt="Kids Muay Thai"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-green-500">Kids</Badge>
            </div>
            <CardHeader className="mb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Users className="h-5 w-5 text-red-500" />
                Kids Program
              </CardTitle>
              <CardDescription className="text-gray-400 h-4">
                Fun and safe Muay Thai training for children aged 6-14
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  45 minutes
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-white">
                  What You'll Learn:
                </h4>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-outside pl-4">
                  <li>
                    Fun, engaging and structured program for children aged 6 to
                    14
                  </li>
                  <li>
                    Classes run during school term with breaks over holidays
                  </li>
                  <li>Build confidence, discipline, fitness and respect</li>
                  <li>
                    Learn authentic Muay Thai skills in a safe and supportive
                    environment
                  </li>
                  <li>
                    Develop technique, coordination and focus through
                    age-appropriate drills
                  </li>
                  <li>
                    Grading day at end of term to earn coloured Thai armbands
                    (Pra Jiad)
                  </li>
                  <li>
                    Great way to stay active, make friends and be part of a
                    positive community
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-white/30 bg-gray-800 border-gray-700">
            <div className="relative h-48">
              <Image
                src="/clinch.jpg"
                alt="Clinching"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-[25%_5%]"
              />
              <Badge className="absolute top-4 left-4 bg-purple-600">
                Clinching
              </Badge>
            </div>
            <CardHeader className="mb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <BicepsFlexed className="h-5 w-5 text-red-500" />
                Clinch class
              </CardTitle>
              <CardDescription className="text-gray-400 h-4">
                Learn clinching and sweeps techniques to add to your arsenal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  45 minutes
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-white">
                  What You'll Learn:
                </h4>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-outside pl-4">
                  <li>
                    Master one of the most technical and powerful aspects of
                    Muay Thai
                  </li>
                  <li>Suitable for all levels</li>
                  <li>
                    Focus on developing effective clinch positioning, balance,
                    control and timing
                  </li>
                  <li>
                    Learn to deliver knees, off-balance opponents, defend and
                    counter
                  </li>
                  <li>
                    Build strength, endurance and awareness in close range
                  </li>
                  <li>
                    Taught by experienced coaches with authentic clinch
                    experience from Thailand
                  </li>
                  <li>
                    Build confidence and skill whether competing or expanding
                    knowledge
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-white/30 bg-gray-800 border-gray-700">
            <div className="relative h-48">
              <Image
                src="/pad_training.jpg"
                alt="Pad Training"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-yellow-600">
                Pads
              </Badge>
            </div>
            <CardHeader className="mb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Timer className="h-5 w-5 text-red-500" />
                Pads
              </CardTitle>
              <CardDescription className="text-gray-400 h-4">
                One-on-one pad training with our expert instructors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />3 X 3 minutes / 5 X 3 minutes
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-white">
                  What You'll Get:
                </h4>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-outside pl-4">
                  <li>
                    Pads included in every gym membership - unique to South
                    Australia!
                  </li>
                  <li>
                    All members get <strong>3 X 3 minute pad rounds</strong>{" "}
                    daily with experienced trainers
                  </li>
                  <li>
                    Fighters with booked fights get{" "}
                    <strong>5 X 3 minute pad rounds</strong> in lead-up
                  </li>
                  <li>Perfect technique, build power, or push conditioning</li>
                  <li>
                    Personalised feedback and improvement with every session
                  </li>
                  <li>
                    Authentic, high-quality training as part of membership daily
                  </li>
                  <li>Refer to timetable for available hours</li>
                </ul>
                <div className="mt-4 p-3 bg-gray-600 rounded-lg">
                  <h5 className="text-xs font-semibold text-gray-300 mb-2">
                    Terms & Conditions:
                  </h5>
                  <ul className="text-xs text-gray-400 space-y-1 list-disc pl-4">
                    <li>Refer to timetable for available hours</li>
                    <li>Subject to trainer availability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-white/30 bg-gray-800 border-gray-700">
            <div className="relative h-48">
              <Image
                src="/personal_training.jpg"
                alt="Private Training"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-[25%_23%]"
              />
              <Badge className="absolute top-4 left-4 bg-yellow-600">
                Personal Training
              </Badge>
            </div>
            <CardHeader className="mb-2">
              <CardTitle className="flex items-center gap-2 text-white">
                <Trophy className="h-5 w-5 text-red-500" />
                Personal Training
              </CardTitle>
              <CardDescription className="text-gray-400 h-4">
                One-on-one personalized training with our expert instructors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  30 to 90 minutes
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-white">
                  What You'll Get:
                </h4>
                <ul className="text-sm text-gray-400 space-y-1 list-disc list-outside pl-4">
                  <li>
                    Personalised one-on-one Muay Thai sessions tailored to your
                    goals
                  </li>
                  <li>Customised to your fitness level and experience</li>
                  <li>
                    Sharpen technique, build confidence, improve fitness or
                    prepare for competition
                  </li>
                  <li>Experienced trainers guide you every step of the way</li>
                  <li>
                    Each session designed to maximise progress with focused
                    attention
                  </li>
                  <li>Includes pad work, drills and conditioning</li>
                  <li>Ideal for beginners through to advanced fighters</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Program Benefits */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">
            Why Choose Our Programs?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="font-semibold mb-2 text-white">
                Structured Learning
              </h4>
              <p className="text-sm text-gray-400">
                Progressive curriculum designed for optimal skill development
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
                Learn from certified trainers and former champions
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="font-semibold mb-2 text-white">
                Safe Environment
              </h4>
              <p className="text-sm text-gray-400">
                Controlled training with emphasis on proper technique and safety
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-red-500" />
              </div>
              <h4 className="font-semibold mb-2 text-white">Proven Results</h4>
              <p className="text-sm text-gray-400">
                Track record of developing successful fighters and fit
                individuals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
