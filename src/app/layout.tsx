import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaw Min Thein | Full-Stack Engineer",
  description:
    "Portfolio of Zaw Min Thein — Lead Full-Stack System Engineer specialising in Next.js, Node.js, Java Spring Boot, and cloud infrastructure.",
  keywords: ["Zaw Min Thein", "Full Stack Developer", "Next.js", "React", "Node.js", "Software Engineer"],
  openGraph: {
    title: "Zaw Min Thein | Full-Stack Engineer",
    description: "Portfolio of Zaw Min Thein — Lead Full-Stack System Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div id="__noise" aria-hidden="true" />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
