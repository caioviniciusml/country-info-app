import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Country Info App",
  description: "The right application for you knowing more about countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
