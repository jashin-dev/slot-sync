import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import TopScroll from "@/components/TopScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SlotSync",
  description: "A meeting scheduling application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopScroll />
          <Header />
          <main className="min-h-screen bg-linear-to-b from-blue-50 to-white">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
