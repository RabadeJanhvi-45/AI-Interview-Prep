import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "AI Interview Prep",
  description: "Your Gateway to Smarter Career Growth!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      {/* <Toaster /> */}
      {children}</body>
    </html>
    </ClerkProvider>
  );
}
