export function Footer() {
  return (
    <footer className="w-full bg-[#12152B] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center">
        <span className="text-white font-bold text-lg">SummitMedia</span>

        <span className="text-gray-500 text-sm text-center">
          © 2026 Summit Home Services LLC. All rights reserved.
        </span>

        <div className="flex items-center gap-1 text-sm">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <span className="text-gray-500">·</span>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
