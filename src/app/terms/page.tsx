import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Terms of Service | Summit Media",
};

export default function TermsOfService() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-[#111111] mb-2">Terms of Service</h1>
          <p className="text-sm text-[#6B7280] mb-12">Last updated: March 1, 2026</p>

          <div className="prose prose-neutral max-w-none text-[#333333] space-y-8">

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">1. Agreement</h2>
              <p>By accessing summitmedia.co or submitting a form on this website, you agree to these Terms of Service. This site is operated by Summit Home Services LLC. If you do not agree to these terms, please do not use this site.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Services</h2>
              <p>Summit Media provides digital lead generation and marketing services to home service contractors. Submitting a form on this website constitutes an inquiry only and does not create a service agreement. A separate written agreement will be established before any paid services begin.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">3. No Guarantees</h2>
              <p>While we stand behind our system and offer a performance-based model, results will vary depending on your market, trade, responsiveness, and other factors outside our control. Nothing on this website constitutes a guarantee of specific results.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Intellectual Property</h2>
              <p>All content on this website including text, graphics, and code is the property of Summit Home Services LLC. You may not reproduce or distribute any content without written permission.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">5. Limitation of Liability</h2>
              <p>Summit Home Services LLC is not liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. Our total liability in any matter is limited to the amount paid for services in the preceding 30 days.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">6. Governing Law</h2>
              <p>These terms are governed by the laws of the State of New Jersey. Any disputes shall be resolved in the courts of Monmouth County, New Jersey.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">7. Contact</h2>
              <p>For any questions about these terms, contact us at <a href="mailto:mediasummit.agency@gmail.com" className="text-[#111111] underline">mediasummit.agency@gmail.com</a>.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
