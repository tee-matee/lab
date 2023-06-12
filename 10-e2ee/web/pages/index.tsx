import React from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Button } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Button onClick={() => router.push("/register")}>Go To Register</Button>
      <Button onClick={() => router.push("/login")}>Go To Login</Button>
      <Button onClick={() => router.push("/profile")}>Go To Profile</Button>
      <Button onClick={() => router.push("/update-profile")}>
        Go To Update Profile
      </Button>
      <Button onClick={() => router.push("/remove-account")}>
        Go To Remove Account
      </Button>
    </main>
  );
}
