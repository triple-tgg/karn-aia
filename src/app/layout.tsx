import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MERKURIUS - Smart Planning, Secure Future",
  description: "Financial Planning | Insurance | Legacy Solutions - เราเชื่อว่าการดูแลลูกค้าอย่างยั่งยืน คือสิ่งที่สำคัญกับลูกค้ามากที่สุด",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
