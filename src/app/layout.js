import { Inter } from "next/font/google";

import { ReduxProvider } from "./store/provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VII Кубок CTF. Умный дом",
  description:
    "На этом сайте можно найти real-time результаты выполнения таски Умный дом",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
