"use client";

import { useState, useEffect, FormEvent } from "react";
import { Button } from "./ui/button";
import { Calendar, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function FormsSection() {
  const [activeTab, setActiveTab] = useState<"trial" | "enquiry">("trial");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const [trialForm, setTrialForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experienceLevel: "",
    preferredTime: "",
    healthConcerns: "",
  });

  const [enquiryForm, setEnquiryForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    source: "",
  });

  const handleTrialSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    console.log("key", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    try {
      const templateParams = {
        to_email: "goodjobmuaythai@gmail.com",
        from_name: `${trialForm.firstName} ${trialForm.lastName}`,
        from_email: trialForm.email,
        phone: trialForm.phone,
        experience_level: trialForm.experienceLevel,
        preferred_time: trialForm.preferredTime,
        health_concerns: trialForm.healthConcerns,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Replace with your EmailJS service ID
        process.env.NEXT_PUBLIC_FREE_TRIAL_BOOKING_TEMPLATE_ID!, // Replace with your EmailJS template ID
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitStatus("success");
      setTrialForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experienceLevel: "",
        preferredTime: "",
        healthConcerns: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEnquirySubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        to_email: "goodjobmuaythai@gmail.com",
        from_name: `${enquiryForm.firstName} ${enquiryForm.lastName}`,
        from_email: enquiryForm.email,
        phone: enquiryForm.phone,
        subject: enquiryForm.subject,
        message: enquiryForm.message,
        source: enquiryForm.source,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Replace with your EmailJS service ID
        process.env.NEXT_PUBLIC_GENERAL_ENQUIRY_TEMPLATE_ID!, // Replace with your EmailJS template ID
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitStatus("success");
      setEnquiryForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        source: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 flex flex-col">
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

      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-green-600 text-white rounded-md">
          {activeTab === "trial"
            ? "Free Trial submitted successfully! We'll get back to you soon."
            : "General Enquiry submitted successfully! We'll get back to you soon."}
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-600 text-white rounded-md">
          Failed to submit form. Please try again or contact us directly.
        </div>
      )}

      {activeTab === "trial" && (
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Book Your Free Trial
          </h3>
          <form
            onSubmit={handleTrialSubmit}
            className="space-y-4 flex-grow flex flex-col"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  value={trialForm.firstName}
                  onChange={(e) =>
                    setTrialForm({ ...trialForm, firstName: e.target.value })
                  }
                  required
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
                  value={trialForm.lastName}
                  onChange={(e) =>
                    setTrialForm({ ...trialForm, lastName: e.target.value })
                  }
                  required
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
                value={trialForm.email}
                onChange={(e) =>
                  setTrialForm({ ...trialForm, email: e.target.value })
                }
                required
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
                value={trialForm.phone}
                onChange={(e) =>
                  setTrialForm({ ...trialForm, phone: e.target.value })
                }
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                placeholder="+66 123 456 789"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Experience Level
              </label>
              <select
                value={trialForm.experienceLevel}
                onChange={(e) =>
                  setTrialForm({
                    ...trialForm,
                    experienceLevel: e.target.value,
                  })
                }
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
              >
                <option value="">Select experience level</option>
                <option value="Complete Beginner">Complete Beginner</option>
                <option value="Some Experience">Some Experience</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Preferred Class Time
              </label>
              <select
                value={trialForm.preferredTime}
                onChange={(e) =>
                  setTrialForm({ ...trialForm, preferredTime: e.target.value })
                }
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
              >
                <option value="">Select preferred time</option>
                <option value="6:30 AM - 7:30 AM">6:30 AM - 7:30 AM</option>
                <option value="5:15 PM - 6:00 PM">5:15 PM - 6:00 PM</option>
                <option value="6:00 PM - 6:45 PM">6:00 PM - 6:45 PM</option>
                <option value="7:00 AM - 8:00 AM (Saturday)">
                  7:00 AM - 8:00 AM (Saturday)
                </option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Any injuries or health concerns?
              </label>
              <textarea
                value={trialForm.healthConcerns}
                onChange={(e) =>
                  setTrialForm({ ...trialForm, healthConcerns: e.target.value })
                }
                rows={2}
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white resize-none"
                placeholder="Please let us know about any injuries or health concerns (optional)"
              ></textarea>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 text-white mt-auto disabled:opacity-50"
            >
              <Calendar className="h-4 w-4 mr-2" />
              {isSubmitting ? "Submitting..." : "Book Free Trial"}
            </Button>
          </form>
        </div>
      )}

      {activeTab === "enquiry" && (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">
            General Enquiry
          </h3>
          <form
            onSubmit={handleEnquirySubmit}
            className="space-y-4 flex flex-col"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  First Name
                </label>
                <input
                  type="text"
                  value={enquiryForm.firstName}
                  onChange={(e) =>
                    setEnquiryForm({
                      ...enquiryForm,
                      firstName: e.target.value,
                    })
                  }
                  required
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
                  value={enquiryForm.lastName}
                  onChange={(e) =>
                    setEnquiryForm({ ...enquiryForm, lastName: e.target.value })
                  }
                  required
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
                value={enquiryForm.email}
                onChange={(e) =>
                  setEnquiryForm({ ...enquiryForm, email: e.target.value })
                }
                required
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
                value={enquiryForm.phone}
                onChange={(e) =>
                  setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
                placeholder="+66 123 456 789"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Subject
              </label>
              <select
                value={enquiryForm.subject}
                onChange={(e) =>
                  setEnquiryForm({ ...enquiryForm, subject: e.target.value })
                }
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
              >
                <option value="">Select subject</option>
                <option value="General Information">General Information</option>
                <option value="Membership Enquiry">Membership Enquiry</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Kids Classes">Kids Classes</option>
                <option value="Facilities & Equipment">
                  Facilities & Equipment
                </option>
                <option value="Group Bookings">Group Bookings</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Message
              </label>
              <textarea
                value={enquiryForm.message}
                onChange={(e) =>
                  setEnquiryForm({ ...enquiryForm, message: e.target.value })
                }
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white resize-none"
                placeholder="Tell us about your enquiry..."
              ></textarea>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                How did you hear about us?
              </label>
              <select
                value={enquiryForm.source}
                onChange={(e) =>
                  setEnquiryForm({ ...enquiryForm, source: e.target.value })
                }
                required
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white"
              >
                <option value="">Select source</option>
                <option value="Google Search">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend/Family Referral">
                  Friend/Family Referral
                </option>
                <option value="Walking Past">Walking Past</option>
                <option value="Online Advertisement">
                  Online Advertisement
                </option>
                <option value="Local Directory">Local Directory</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 text-white mt-auto disabled:opacity-50"
            >
              <Mail className="h-4 w-4 mr-2" />
              {isSubmitting ? "Submitting..." : "Send Enquiry"}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
