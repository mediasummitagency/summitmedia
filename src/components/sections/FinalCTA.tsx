"use client";

import { useState } from "react";
import { CheckCircle, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  headline?: string;
  subhead?: string;
  serviceOptions?: string[];
}

export function FinalCTA({
  headline = "Let's Build Your Pipeline",
  subhead = "Tell us a little about your business. We'll reach out with a quick fit check to see if we're the right match.",
  serviceOptions = [
    "Painting",
    "Flooring",
    "Roofing",
    "HVAC",
    "Plumbing",
    "Electrical",
    "Landscaping",
    "Other",
  ],
}: FinalCTAProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(JSON.stringify({ name, company, phone, service }));
    // TODO: POST to Zapier webhook URL here
    setSubmitted(true);
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
              value: "hello@summitmedia.com",
            },
            {
              icon: PhoneIcon,
              label: "Phone",
              value: "(555) 123-4567",
            },
            {
              icon: MapPinIcon,
              label: "Serving",
              value: "Contractors Nationwide",
              className: "col-span-2",
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
                <Label className="text-black/70">Service</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="w-full border-black/10 bg-white text-black data-[placeholder]:text-black/40">
                    <SelectValue placeholder="What Service Do You Offer?" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#D4A843] text-white hover:bg-[#C4952E] rounded-lg text-base h-12 cursor-pointer shadow-md"
              >
                Book My Call
              </Button>
            </form>
          )}
        </ContactCard>
      </div>
    </section>
  );
}
