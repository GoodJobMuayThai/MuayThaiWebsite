"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar, Mail } from "lucide-react";

export default function FormsSection() {
  const [activeTab, setActiveTab] = useState<"trial" | "enquiry">("trial");

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 h-[820px] flex flex-col">
      {/* Tab Navigation */}
      <div className="flex mb-6 bg-gray-700 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("trial")}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
            activeTab === "trial"
              ? "bg-red-600 text-white"
              : "text-gray-300 hover:text-white hover:bg-gray-600"
          }`}
        >
          <Calendar className="h-4 w-4 inline mr-2" />
          Free Trial
        </button>
        <button
          onClick={() => setActiveTab("enquiry")}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
            activeTab === "enquiry"
              ? "bg-red-600 text-white"
              : "text-gray-300 hover:text-white hover:bg-gray-600"
          }`}
        >
          <Mail className="h-4 w-4 inline mr-2" />
          General Enquiry
        </button>
      </div>

      {/* Free Trial Form */}
      {activeTab === "trial" && (
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Book Your Free Trial
          </h3>
          <form className="space-y-4 flex-grow flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                placeholder="+66 123 456 789"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Experience Level
              </label>
              <select className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white">
                <option>Complete Beginner</option>
                <option>Some Experience</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Preferred Class Time
              </label>
              <select className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white">
                <option>Morning (6:00 AM - 12:00 PM)</option>
                <option>Afternoon (12:00 PM - 6:00 PM)</option>
                <option>Evening (6:00 PM - 10:00 PM)</option>
                <option>Weekend</option>
                <option>Flexible</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Any injuries or health concerns?
              </label>
              <textarea
                rows={2}
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white resize-none"
                placeholder="Please let us know about any injuries or health concerns (optional)"
              ></textarea>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-auto">
              <Calendar className="h-4 w-4 mr-2" />
              Book Free Trial
            </Button>
          </form>
        </div>
      )}

      {/* General Enquiry Form */}
      {activeTab === "enquiry" && (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">
            General Enquiries
          </h3>
          <form className="space-y-4 flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Phone (Optional)
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                placeholder="+66 123 456 789"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Subject
              </label>
              <select className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white">
                <option>General Information</option>
                <option>Membership Enquiry</option>
                <option>Personal Training</option>
                <option>Kids Classes</option>
                <option>Corporate Training</option>
                <option>Facilities & Equipment</option>
                <option>Group Bookings</option>
                <option>Competition Training</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white resize-none"
                placeholder="Tell us about your enquiry..."
              ></textarea>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                How did you hear about us?
              </label>
              <select className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white">
                <option>Google Search</option>
                <option>Social Media</option>
                <option>Friend/Family Referral</option>
                <option>Walking Past</option>
                <option>Online Advertisement</option>
                <option>Local Directory</option>
                <option>Other</option>
              </select>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-auto">
              <Mail className="h-4 w-4 mr-2" />
              Send Enquiry
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
