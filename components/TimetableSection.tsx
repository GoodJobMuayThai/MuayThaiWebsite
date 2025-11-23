import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

export default function TimetableSection() {
  return (
    <section id="timetable" className="py-20 bg-zinc-950">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Weekly Class Schedule
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Each day offers unique training opportunities - find your perfect
            class time
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monday */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-teal-500" />
                  Monday
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 AM - 9:00 AM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:30 AM - 7:30 AM
                      </div>
                      <div className="text-sm text-gray-400">
                        Muay Thai All Levels
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-blue-600/20 text-blue-400 border-blue-600"
                    >
                      All Levels
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        9:00 AM - 3:30 PM
                      </div>
                      <div className="text-sm text-gray-400">
                        Personal Training
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-gray-600 text-gray-300"
                    >
                      Personal Training
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        3:30 PM - 7:30 PM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        4:00 PM - 4:45 PM
                      </div>
                      <div className="text-sm text-gray-400">Kids Class</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-500/20 text-green-300 border-green-500"
                    >
                      Kids
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        5:15 PM - 6:00 PM
                      </div>
                      <div className="text-sm text-gray-400">Fundamentals</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-600/20 text-green-400 border-green-600"
                    >
                      Fundamentals
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 PM - 6:45 PM
                      </div>
                      <div className="text-sm text-gray-400">Intermediate</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-teal-600/20 text-teal-400 border-teal-600"
                    >
                      Intermediate
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tuesday */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-teal-500" />
                  Tuesday
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 AM - 9:00 AM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:30 AM - 7:30 AM
                      </div>
                      <div className="text-sm text-gray-400">
                        Muay Thai All Levels
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-blue-600/20 text-blue-400 border-blue-600"
                    >
                      All Levels
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        9:00 AM - 3:30 PM
                      </div>
                      <div className="text-sm text-gray-400">
                        Personal Training
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-gray-600 text-gray-300"
                    >
                      Personal Training
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        3:30 PM - 7:30 PM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        4:00 PM - 4:45 PM
                      </div>
                      <div className="text-sm text-gray-400">Kids Class</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-500/20 text-green-300 border-green-500"
                    >
                      Kids
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        5:15 PM - 6:00 PM
                      </div>
                      <div className="text-sm text-gray-400">Intermediate</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-teal-600/20 text-teal-400 border-teal-600"
                    >
                      Intermediate
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 PM - 6:45 PM
                      </div>
                      <div className="text-sm text-gray-400">Fundamentals</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-600/20 text-green-400 border-green-600"
                    >
                      Fundamentals
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wednesday */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-teal-500" />
                  Wednesday
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 AM - 9:00 AM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:30 AM - 7:30 AM
                      </div>
                      <div className="text-sm text-gray-400">
                        Muay Thai All Levels
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-blue-600/20 text-blue-400 border-blue-600"
                    >
                      All Levels
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        9:00 AM - 3:30 PM
                      </div>
                      <div className="text-sm text-gray-400">
                        Personal Training
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-gray-600 text-gray-300"
                    >
                      Personal Training
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        3:30 PM - 7:30 PM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        4:30 PM - 5:30 PM
                      </div>
                      <div className="text-sm text-gray-400">Muay Thai All Levels</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-blue-600/20 text-blue-400 border-blue-600"
                    >
                      All Levels
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 PM - 6:45 PM
                      </div>
                      <div className="text-sm text-gray-400">Clinching</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-purple-600/20 text-purple-400 border-purple-600"
                    >
                      Clinching
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thursday */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-teal-500" />
                  Thursday
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 AM - 9:00 AM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:30 AM - 7:30 AM
                      </div>
                      <div className="text-sm text-gray-400">
                        Muay Thai All Levels
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-blue-600/20 text-blue-400 border-blue-600"
                    >
                      All Levels
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        9:00 AM - 3:30 PM
                      </div>
                      <div className="text-sm text-gray-400">
                        Personal Training
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-gray-600 text-gray-300"
                    >
                      Personal Training
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        3:30 PM - 7:30 PM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        4:00 PM - 4:45 PM
                      </div>
                      <div className="text-sm text-gray-400">Kids Class</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-500/20 text-green-300 border-green-500"
                    >
                      Kids
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        5:15 PM - 6:00 PM
                      </div>
                      <div className="text-sm text-gray-400">Intermediate</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-teal-600/20 text-teal-400 border-teal-600"
                    >
                      Intermediate
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 PM - 6:45 PM
                      </div>
                      <div className="text-sm text-gray-400">Fundamentals</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-600/20 text-green-400 border-green-600"
                    >
                      Fundamentals
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Friday */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-teal-500" />
                  Friday
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 AM - 9:00 AM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:30 AM - 7:30 AM
                      </div>
                      <div className="text-sm text-gray-400">
                        Muay Thai All Levels
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-blue-600/20 text-blue-400 border-blue-600"
                    >
                      All Levels
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        9:00 AM - 3:30 PM
                      </div>
                      <div className="text-sm text-gray-400">
                        Personal Training
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-gray-600 text-gray-300"
                    >
                      Personal Training
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        3:30 PM - 7:30 PM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        5:15 PM - 6:00 PM
                      </div>
                      <div className="text-sm text-gray-400">Fundamentals</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-green-600/20 text-green-400 border-green-600"
                    >
                      Fundamentals
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        6:00 PM - 6:45 PM
                      </div>
                      <div className="text-sm text-gray-400">Intermediate</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-teal-600/20 text-teal-400 border-teal-600"
                    >
                      Intermediate
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saturday */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-teal-500" />
                  Saturday
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        7:00 AM - 8:00 AM
                      </div>
                      <div className="text-sm text-gray-400">Pads Training</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-orange-600/20 text-orange-400 border-orange-600"
                    >
                      Pads
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">
                        8:00 AM - 9:00 AM
                      </div>
                      <div className="text-sm text-gray-400">
                        Muay Thai All Levels
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-blue-600/20 text-blue-400 border-blue-600"
                    >
                      All Levels
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sunday Closed Notice */}
          <div className="mt-8">
            <Card className="bg-gray-800/50 border-dashed border-gray-600">
              <CardContent className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Sunday - Rest Day
                </h3>
                <p className="text-gray-400">
                  Our gym is closed on Sundays to allow our trainers and
                  students to rest and recover.
                  <br />
                  Use this day for active recovery, stretching, or spending time
                  with family.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Schedule Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <Clock className="h-8 w-8 text-teal-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-white">
                Flexible Make-ups
              </h3>
              <p className="text-sm text-gray-400">
                Missed your regular class? Join any class of the same level
                throughout the week.
              </p>
            </Card>

            <Card className="text-center p-6 bg-gray-800 border-gray-700">
              <Users className="h-8 w-8 text-teal-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 text-white">
                Private Sessions
              </h3>
              <p className="text-sm text-gray-400">
                Book one-on-one training sessions available Monday-Saturday by
                appointment.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
