import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { DonationProvider } from "@/context/DonationContext";
import PageClientWrapper from "@/components/PageClientWrapper";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: "Stand for Children - Hope Starts With Action",
  description: "Non-profit organization for education and healthcare.",
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${playfair.variable} font-sans text-text-main antialiased`}>
        <DonationProvider>
          <PageClientWrapper>
            {children}
          </PageClientWrapper>
        </DonationProvider>
      </body>
    </html>
  );
}