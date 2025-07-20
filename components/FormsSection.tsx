"use client";

import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Calendar, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

type TrialFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experienceLevel: string;
  preferredTime: string;
  healthConcerns: string;
};

type EnquiryFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  source: string;
};

// Validation schemas
const trialSchema = {
  firstName: {
    required: "First name is required",
    minLength: {
      value: 2,
      message: "First name must be at least 2 characters",
    },
    pattern: {
      value: /^[a-zA-Z\s'-]+$/,
      message: "First name can only contain letters",
    },
  },
  lastName: {
    required: "Last name is required",
    minLength: { value: 2, message: "Last name must be at least 2 characters" },
    pattern: {
      value: /^[a-zA-Z\s'-]+$/,
      message: "Last name can only contain letters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  },
  phone: {
    required: "Phone number is required",
    pattern: {
      value: /^(\+61|0)[2-478](?:[ -]?[0-9]){8}$/,
      message: "Please enter a valid Australian phone number",
    },
  },
  experienceLevel: { required: "Please select your experience level" },
  preferredTime: { required: "Please select your preferred class time" },
};

const enquirySchema = {
  firstName: {
    required: "First name is required",
    minLength: {
      value: 2,
      message: "First name must be at least 2 characters",
    },
    pattern: {
      value: /^[a-zA-Z\s'-]+$/,
      message: "First name can only contain letters",
    },
  },
  lastName: {
    required: "Last name is required",
    minLength: { value: 2, message: "Last name must be at least 2 characters" },
    pattern: {
      value: /^[a-zA-Z\s'-]+$/,
      message: "Last name can only contain letters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  },
  phone: {
    pattern: {
      value: /^(\+61|0)[2-478](?:[ -]?[0-9]){8}$/,
      message: "Please enter a valid Australian phone number",
    },
  },
  subject: { required: "Subject is required" },
  message: { required: "Message is required" },
  source: { required: "Source is required" },
};

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, "");
};

export default function FormsSection() {
  const [activeTab, setActiveTab] = useState<"trial" | "enquiry">("trial");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // React Hook Form setup
  const trialForm = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      experienceLevel: "",
      preferredTime: "",
      healthConcerns: "",
    },
  });

  const enquiryForm = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      source: "",
    },
  });

  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleTrialSubmit: SubmitHandler<TrialFormInputs> = async (data: TrialFormInputs) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        to_email: "goodjobmuaythai@gmail.com",
        from_name: `${sanitizeInput(data.firstName)} ${sanitizeInput(
          data.lastName
        )}`,
        from_email: data.email.trim(),
        phone: sanitizeInput(data.phone),
        experience_level: sanitizeInput(data.experienceLevel),
        preferred_time: sanitizeInput(data.preferredTime),
        health_concerns: sanitizeInput(data.healthConcerns),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_FREE_TRIAL_BOOKING_TEMPLATE_ID!,
        templateParams,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );

      setSubmitStatus("success");
      trialForm.reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEnquirySubmit: SubmitHandler<EnquiryFormInputs> = async (data: EnquiryFormInputs) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        to_email: "goodjobmuaythai@gmail.com",
        from_name: `${sanitizeInput(data.firstName)} ${sanitizeInput(
          data.lastName
        )}`,
        from_email: data.email.toLowerCase().trim(),
        phone: sanitizeInput(data.phone),
        subject: sanitizeInput(data.subject),
        message: sanitizeInput(data.message),
        source: sanitizeInput(data.source),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_GENERAL_ENQUIRY_TEMPLATE_ID!,
        templateParams,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );

      setSubmitStatus("success");
      enquiryForm.reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldClassName = (hasError: boolean, hasValue: boolean): string => {
    const baseClasses =
      "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 bg-gray-700 text-white";
    if (hasError) return `${baseClasses} border-red-500 focus:ring-red-500`;
    if (hasValue) return `${baseClasses} border-green-500 focus:ring-green-500`;
    return `${baseClasses} border-gray-600 focus:ring-red-600`;
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 flex flex-col">
      <div className="flex mb-6 bg-gray-700 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("trial")}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
            activeTab === "trial"
              ? "bg-teal-600 text-white"
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
              ? "bg-teal-600 text-white"
              : "text-gray-300 hover:text-white hover:bg-gray-600"
          }`}
        >
          <Mail className="h-4 w-4 inline mr-2" />
          General Enquiry
        </button>
      </div>

      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-teal-600 text-white rounded-md">
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
            onSubmit={trialForm.handleSubmit(handleTrialSubmit)}
            className="space-y-4 flex-grow flex flex-col"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  First Name *
                </label>
                <input
                  {...trialForm.register("firstName", trialSchema.firstName)}
                  type="text"
                  maxLength={50}
                  className={getFieldClassName(
                    !!trialForm.formState.errors.firstName,
                    !!trialForm.watch("firstName")
                  )}
                  placeholder="John"
                />
                {trialForm.formState.errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">
                    {trialForm.formState.errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  Last Name *
                </label>
                <input
                  {...trialForm.register("lastName", trialSchema.lastName)}
                  type="text"
                  maxLength={50}
                  className={getFieldClassName(
                    !!trialForm.formState.errors.lastName,
                    !!trialForm.watch("lastName")
                  )}
                  placeholder="Doe"
                />
                {trialForm.formState.errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">
                    {trialForm.formState.errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Email *
              </label>
              <input
                {...trialForm.register("email", trialSchema.email)}
                type="email"
                maxLength={100}
                className={getFieldClassName(
                  !!trialForm.formState.errors.email,
                  !!trialForm.watch("email")
                )}
                placeholder="john@example.com"
              />
              {trialForm.formState.errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {trialForm.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Phone *
              </label>
              <input
                {...trialForm.register("phone", trialSchema.phone)}
                type="tel"
                maxLength={20}
                className={getFieldClassName(
                  !!trialForm.formState.errors.phone,
                  !!trialForm.watch("phone")
                )}
                placeholder="+61 411 746 407"
              />
              {trialForm.formState.errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {trialForm.formState.errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Experience Level *
              </label>
              <select
                {...trialForm.register(
                  "experienceLevel",
                  trialSchema.experienceLevel
                )}
                className={getFieldClassName(
                  !!trialForm.formState.errors.experienceLevel,
                  !!trialForm.watch("experienceLevel")
                )}
              >
                <option value="">Select experience level</option>
                <option value="Complete Beginner">Complete Beginner</option>
                <option value="Some Martial Arts Experience">
                  Some Martial Arts Experience
                </option>
                <option value="Experienced in Other Combat Sports">
                  Experienced in Other Combat Sports
                </option>
                <option value="Some Muay Thai Experience">
                  Some Muay Thai Experience
                </option>
              </select>
              {trialForm.formState.errors.experienceLevel && (
                <p className="text-red-400 text-sm mt-1">
                  {trialForm.formState.errors.experienceLevel.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Preferred Class Time *
              </label>
              <select
                {...trialForm.register(
                  "preferredTime",
                  trialSchema.preferredTime
                )}
                className={getFieldClassName(
                  !!trialForm.formState.errors.preferredTime,
                  !!trialForm.watch("preferredTime")
                )}
              >
                <option value="">Select preferred time</option>
                <option value="6:30 AM - 7:30 AM">6:30 AM - 7:30 AM</option>
                <option value="5:15 PM - 6:00 PM">5:15 PM - 6:00 PM</option>
                <option value="6:00 PM - 6:45 PM">6:00 PM - 6:45 PM</option>
                <option value="7:00 AM - 8:00 AM (Saturday)">
                  7:00 AM - 8:00 AM (Saturday)
                </option>
              </select>
              {trialForm.formState.errors.preferredTime && (
                <p className="text-red-400 text-sm mt-1">
                  {trialForm.formState.errors.preferredTime.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Any injuries or health concerns?
              </label>
              <textarea
                {...trialForm.register("healthConcerns")}
                rows={3}
                maxLength={500}
                className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-700 text-white resize-none"
                placeholder="Please let us know about any injuries or health concerns (optional)"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-auto disabled:opacity-50"
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
            onSubmit={enquiryForm.handleSubmit(handleEnquirySubmit)}
            className="space-y-4 flex flex-col"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  First Name *
                </label>
                <input
                  {...enquiryForm.register(
                    "firstName",
                    enquirySchema.firstName
                  )}
                  type="text"
                  maxLength={50}
                  className={getFieldClassName(
                    !!enquiryForm.formState.errors.firstName,
                    !!enquiryForm.watch("firstName")
                  )}
                  placeholder="John"
                />
                {enquiryForm.formState.errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">
                    {enquiryForm.formState.errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-300">
                  Last Name *
                </label>
                <input
                  {...enquiryForm.register("lastName", enquirySchema.lastName)}
                  type="text"
                  maxLength={50}
                  className={getFieldClassName(
                    !!enquiryForm.formState.errors.lastName,
                    !!enquiryForm.watch("lastName")
                  )}
                  placeholder="Doe"
                />
                {enquiryForm.formState.errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">
                    {enquiryForm.formState.errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Email *
              </label>
              <input
                {...enquiryForm.register("email", enquirySchema.email)}
                type="email"
                maxLength={100}
                className={getFieldClassName(
                  !!enquiryForm.formState.errors.email,
                  !!enquiryForm.watch("email")
                )}
                placeholder="john@example.com"
              />
              {enquiryForm.formState.errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {enquiryForm.formState.errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Phone (Optional)
              </label>
              <input
                {...enquiryForm.register("phone", enquirySchema.phone)}
                type="tel"
                maxLength={20}
                className={getFieldClassName(
                  !!enquiryForm.formState.errors.phone,
                  !!enquiryForm.watch("phone")
                )}
                placeholder="+61 411 746 407"
              />
              {enquiryForm.formState.errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {enquiryForm.formState.errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Subject *
              </label>
              <select
                {...enquiryForm.register("subject", enquirySchema.subject)}
                className={getFieldClassName(
                  !!enquiryForm.formState.errors.subject,
                  !!enquiryForm.watch("subject")
                )}
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
              {enquiryForm.formState.errors.subject && (
                <p className="text-red-400 text-sm mt-1">
                  {enquiryForm.formState.errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                Message *
              </label>
              <textarea
                {...enquiryForm.register("message", enquirySchema.message)}
                rows={4}
                maxLength={1000}
                className={getFieldClassName(
                  !!enquiryForm.formState.errors.message,
                  !!enquiryForm.watch("message")
                )}
                placeholder="Tell us about your enquiry..."
              />
              {enquiryForm.formState.errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {enquiryForm.formState.errors.message.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-300">
                How did you hear about us? *
              </label>
              <select
                {...enquiryForm.register("source", enquirySchema.source)}
                className={getFieldClassName(
                  !!enquiryForm.formState.errors.source,
                  !!enquiryForm.watch("source")
                )}
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
              {enquiryForm.formState.errors.source && (
                <p className="text-red-400 text-sm mt-1">
                  {enquiryForm.formState.errors.source.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-auto disabled:opacity-50"
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
