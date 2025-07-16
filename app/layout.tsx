import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Good Job Muay Thai",
  description: "Good Job Muay Thai, Adelaide's Best Muay Thai Gym",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
