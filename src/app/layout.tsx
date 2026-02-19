import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Summit Media",
  description: "We fill your calendar with homeowners ready to hire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
