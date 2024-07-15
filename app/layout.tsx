import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "../components/navbar";
import { getTranslations, getMessages } from "next-intl/server";
import {Toaster} from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  const t = await getTranslations('Metadata');
  return {
    title: t('homeTitle'),
    description: t("homeDescription"),
  };
}

export default async function RootLayout({ children, modal }: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const messages = await getMessages();


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <main>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <div id="modal-root">
              {modal}
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
              />
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
