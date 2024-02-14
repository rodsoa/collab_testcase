'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Context = createContext();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, setState] = useState({});

  return (
    <html lang="en">
      <body className={inter.className}>
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
      </body>
    </html>
  );
}

export function useAppContext() {
  return useContext(Context);
}
