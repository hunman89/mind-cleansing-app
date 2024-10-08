import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mind Cleansing App",
  description: "Cleansing the mind through writing",
  keywords:
    "감정 정화, emotion cleansing, 정신 건강, mental health, 스트레스 해소, positive thinking, 자기 격려, mental well-being, 응원 메시지, journaling",
  authors: { name: "hunman" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
