import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import { ThemeProvider } from "@/app/components/theme-provider";
import icon from "@/public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Znsk Project",
  description:
    "Personal portfolio website showcasing projects, blog posts, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <footer className="border-t py-6 md:py-8">
              <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>
                  © {new Date().getFullYear()} Lucas Bastos. All rights
                  reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
