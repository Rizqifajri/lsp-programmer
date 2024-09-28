"use client";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { usePathname } from "next/navigation";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Dapur Bunda Bahagia",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <main className="min-h-screen ">
          <div
            className={`flex flex-col ${
              pathname === "/dashboard" ? "w-screen" : "max-w-[700px]"
            }`}
          >
            {children}
            {pathname !== "/dashboard" && <Navigation />}
          </div>
        </main>
      </body>
    </html>
  );
}
