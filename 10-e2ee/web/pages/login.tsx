import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function LoginPage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>LoginPage</div>
    </main>
  );
}
