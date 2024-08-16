import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/Footer";
import ChatbotProvider from "@/components/chatbotprovider";  // Import the ChatbotProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handmade Hub",
  description: "Handmade Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer />
          <ChatbotProvider /> {/* Add the chatbot here */}
        </ClerkProvider>
      </body>
    </html>
  );
}
