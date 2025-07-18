import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Good Job Muay Thai - Adelaide's Best Muay Thai Gym | Free Trial Classes",
  description:
    "Join Adelaide's premier Muay Thai gym. Expert training for all levels, free trial classes, personal training, and kids classes. Located in Welland, SA. Start your martial arts journey today!",
  keywords: [
    "Muay Thai Adelaide",
    "Muay Thai gym Welland",
    "martial arts training",
    "free trial class",
    "personal training",
    "kids Muay Thai",
    "Adelaide martial arts",
    "muay thai training",
  ],
  authors: [{ name: "Good Job Muay Thai" }],
  creator: "Good Job Muay Thai",
  publisher: "Good Job Muay Thai",
  metadataBase: new URL("https://goodjobmuaythai.com"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://goodjobmuaythai.com",
    siteName: "Good Job Muay Thai",
    title: "Good Job Muay Thai - Adelaide's Best Muay Thai Gym",
    description:
      "Join Adelaide's premier Muay Thai gym. Expert training for all levels, free trial classes, personal training, and kids classes. Located in Welland, SA.",
    images: [
      {
        url: "/hero_img.jpg",
        width: 1290,
        height: 1305,
        alt: "Good Job Muay Thai training session",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api.emailjs.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.emailjs.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
