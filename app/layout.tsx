// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amilcar Ibarra | Portafolio",
  description: "Portafolio de Amilcar Ibarra, Ingeniero Biomédico y Desarrollador Web.",
  openGraph: {
    title: "Amilcar Ibarra | Portafolio",
    description: "Explora mis proyectos y experiencia en desarrollo de software.",
    url: "https://amilcaribarra.dev",
    siteName: "Amilcar Andrés Ibarra",
    images: [
      {
        url: "https://amilcaribarra.dev/preview.png", 
        width: 1200,
        height: 630,
        alt: "Portafolio de Amilcar Ibarra",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amilcar Ibarra | Portafolio",
    description: "Explora mis proyectos y experiencia en desarrollo de software.",
    images: ["https://amilcaribarra.dev/preview.png"],
    creator: "@andres_0210", // opcional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
