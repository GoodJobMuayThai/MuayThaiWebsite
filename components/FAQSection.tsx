import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions
            about training at Good Job Muay Thai.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">What is Muay Thai?</h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                Muay Thai is a traditional martial art from Thailand, also known
                as 'The Art of Eight Limbs." It uses punches, kicks, elbows and
                knee strikes making it a powerful and dynamic form of
                self-defence.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                What are the benefits of Muay Thai?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                Muay Thai offers a powerful combination of physical and mental
                benefits. It&apos;s a full-body workout that builds strength,
                fitness, endurance and flexibility. The training helps improve
                coordination, balance and agility while teaching practical self-
                defence skills.
              </p>
              <p className="text-gray-300">
                Beyond the physical, Muay Thai boosts confidence, focus and
                discipline. It&apos;s a great way to relieve stress, stay
                motivated and support your overall health and wellbeing- all in
                a fun, supportive environment that&apos;s suitable for all ages
                and fitness levels.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                Do I need experience to join?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                No experience? No problem! Our classes cater to all levels, from
                complete beginners to advanced fighters. If you have no Muay
                Thai experience, our Fundamentals class is for you! Our trainers
                will help you progress at your own pace.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                What should I bring to my first class?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                We recommend comfortable work out clothes (like shorts and a
                t-shirt), a water bottle and a towel. If you have your own hand
                wraps, gloves or shin guards, bring them too &#45; otherwise we
                have gear you can borrow or purchase at the gym.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                Is Muay Thai safe for kids?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                Yes! Our kids classes a designed to be fun, safe and
                age-appropriate. We focus on building confidence, discipline and
                fitness in a supportive environment.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                Can I do Muay Thai just for fitness, not fighting?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                Absolutely. Many of our members train for fitness, stress relief
                and personal goals- not competition. You&apos;ll improve
                strength, cardio and flexibility while learning valuable skills.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                What if my goal is to compete in a Muay Thai fight?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                If your goal is to step into the ring, we&apos;re here to
                support you every step of the way. Our experienced trainers can
                guide you through a structured training program that focuses on
                technique, conditioning, sparring and fight strategy. We&apos;ll
                help you build the skills, fitness and confidence needed to
                compete safely and successfully. When you&apos;re ready, we can
                assist with match preparation and connect you with fight
                opportunities that suit your level. Whether you&apos;re aiming
                for your first amateur bout or something more, we&apos;re
                committed to helping you achieve your goals.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                How often should I train?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                It depends on your goals! Beginners often start with 2-3
                sessions per week. As you build fitness and skill, you can train
                more often. Our trainers can help you plan your schedule, but at
                the end of the day it&apos;s completely up to you.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                What included in my membership?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                Our memberships include unlimited access to all Muay Thai
                classes, open gym and daily pad rounds with an experienced
                trainer (3 x 3-minute rounds). Our{" "}
                <strong>Hybrid membership</strong> not only includes all the
                above, but full access to Real Gym classes and their equipment.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">Do I have to spar?</h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                No- sparring is optional. If and when you're ready, our trainers
                can guide you safely into controlled sparring. You can train for
                fitness and skill without ever sparring.
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                How do I sign up or book a trial class?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                You can book a free trial by clicking{" "}
                <Link href="/#contact" className="text-teal-500">
                  HERE
                </Link>
                , call us directly or drop into the gym. If you have completed a
                trial class and you are wanting to continue you can choose a
                membership option and we will guide you through signing up with
                us at the gym. We have multiple membership options that you can
                view{" "}
                <Link href="/#membership" className="text-teal-500">
                  HERE
                </Link>
              </p>
            </div>
          </details>

          <details className="group bg-background rounded-lg border bg-gray-700 border-gray-600">
            <summary className="flex justify-between items-center p-6">
              <h3 className="text-lg font-semibold">
                What age groups do you cater for?
              </h3>
              <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-300">
                We offer classes for kids (6-14 years), teens and adults. Each
                class is tailored to the age and experience level of the group.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
