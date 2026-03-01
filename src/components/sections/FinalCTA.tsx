"use client";

import { useState } from "react";
import { CheckCircle, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import { CtaButton } from "@/components/ui/cta-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const REVENUE_OPTIONS = [
  { label: "Under $100K", value: "under_100k" },
  { label: "$100K–$200K", value: "100k_200k" },
  { label: "$200K–$500K", value: "200k_500k" },
  { label: "$500K–$1M", value: "500k_1m" },
  { label: "$1M+", value: "1m_plus" },
];

interface FinalCTAProps {
  headline?: string;
  subhead?: string;
}

export function FinalCTA({
  headline = "Let's Build Your Pipeline",
  subhead = "Tell us a little about your business. We'll reach out with a quick fit check to see if we're the right match.",
}: FinalCTAProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await fetch("https://script.google.com/macros/s/AKfycbw0ItO6XSLbietotq6jRgtyRxRonCsApzV1F0O9sY7jcq1kv0uYFKYGW3xM9tGNtNJR/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, phone, email, revenue: service }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
    }
  };

  return (
    <section id="final-cta" className="w-full bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <ContactCard
          title={headline}
          description={subhead}
          className="border-black/10 bg-white text-black"
          formSectionClassName="bg-gray-50 border-black/10"
          contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "mediasummit.agency@gmail.com",
            },
            {
              icon: PhoneIcon,
              label: "Phone",
              value: "(848) 238-6482",
            },
            {
              icon: MapPinIcon,
              label: "Serving",
              value: "Contractors Nationwide",
              className: "sm:col-span-2",
            },
          ]}
        >
          {submitted ? (
            <div className="flex w-full flex-col items-center py-8 text-center">
              <CheckCircle className="text-[#D4A843]" size={48} />
              <p className="mt-4 text-lg text-black">
                Got it. We&apos;ll shoot you a text within 24 hours to see if
                it&apos;s a fit. Talk soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label className="text-black/70">Name</Label>
                <Input
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-black/10 bg-white text-black placeholder:text-black/40"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-black/70">Company</Label>
                <Input
                  placeholder="Company Name"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="border-black/10 bg-white text-black placeholder:text-black/40"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-black/70">Phone</Label>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-black/10 bg-white text-black placeholder:text-black/40"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-black/70">Email</Label>
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-black/10 bg-white text-black placeholder:text-black/40"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-black/70">Yearly Revenue</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="w-full border-black/10 bg-white text-black data-[placeholder]:text-black/40">
                    <SelectValue placeholder="What's Your Yearly Revenue?" />
                  </SelectTrigger>
                  <SelectContent>
                    {REVENUE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-center pt-2">
                <CtaButton
                  type="submit"
                  hideArrows
                  pulse
                  className="text-lg px-12 py-4"
                >
                  Book My Call
                </CtaButton>
              </div>
            </form>
          )}
        </ContactCard>
      </div>
    </section>
  );
}
