import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Namnkollen",
  description: "Hur mycket av det svenska alfabetet täcker ditt namn?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="bg-background font-primary text-text min-h-screen flex items-center justify-center p-4">
        {children}
      </body>
    </html>
  );
}
