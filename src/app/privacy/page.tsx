import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy | Summit Media",
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-[#111111] mb-2">Privacy Policy</h1>
          <p className="text-sm text-[#6B7280] mb-12">Last updated: March 1, 2026</p>

          <div className="prose prose-neutral max-w-none text-[#333333] space-y-8">

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">1. Who We Are</h2>
              <p>Summit Media is a lead generation and marketing service operated by Summit Home Services LLC ("we," "us," or "our"). We provide digital marketing services to home service contractors. You can reach us at <a href="mailto:mediasummit.agency@gmail.com" className="text-[#111111] underline">mediasummit.agency@gmail.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">2. Information We Collect</h2>
              <p>When you submit a form on our website, we collect the following information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Full name</li>
                <li>Company name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Estimated annual revenue</li>
              </ul>
              <p className="mt-3">We may also collect standard web analytics data such as browser type, pages visited, and referral source through tools like Google Analytics and Meta Pixel.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">3. How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Contact you about our services</li>
                <li>Determine whether our services are a good fit for your business</li>
                <li>Follow up on your inquiry</li>
                <li>Improve our marketing and website performance</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or share your personal information with third parties for their own marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">4. Cookies and Tracking</h2>
              <p>Our website may use cookies and tracking pixels (including Meta Pixel and Google Analytics) to understand how visitors interact with our site and to measure ad performance. You can disable cookies in your browser settings at any time.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">5. Data Retention</h2>
              <p>We retain your information for as long as necessary to follow up on your inquiry or as required by law. You may request deletion of your data at any time by emailing us.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or request deletion of any personal information we hold about you. To exercise these rights, contact us at <a href="mailto:mediasummit.agency@gmail.com" className="text-[#111111] underline">mediasummit.agency@gmail.com</a>.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#111111] mb-3">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
