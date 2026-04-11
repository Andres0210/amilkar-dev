import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amilcaribarra.dev"),
  title: "Amilcar Ibarra | Backend Developer",
  description:
    "Portafolio de Amilcar Ibarra, backend developer enfocado en Java, Spring Boot, Node.js y arquitectura de APIs robustas.",
  openGraph: {
    title: "Amilcar Ibarra | Backend Developer",
    description:
      "Diseno APIs, backend systems e integraciones enfocadas en productos confiables y escalables.",
    url: "https://amilcaribarra.dev",
    siteName: "Amilcar Ibarra",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Amilcar Ibarra",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amilcar Ibarra | Backend Developer",
    description:
      "Backend engineering con foco en Java, Spring Boot, Node.js y soluciones que escalan.",
    images: ["/preview.png"],
    creator: "@andres_0210",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
