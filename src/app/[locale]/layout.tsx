import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookiesLang } from "@/config/config";
import Cookies from "js-cookie";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ARA Technologies MEA",
    description: "Generated by create next app",
};

export function generateStaticParams()
{
    return [ { locale: 'en' }, { locale: 'ar' }];
}

export default async function LocaleLayout({ children, params: { locale } }: {
    children: React.ReactNode;
    params: { locale: string };
}) {

    unstable_setRequestLocale(locale)
    const messages = await getMessages();
    if(!messages) notFound();

    return (
        <html lang={locale}>
            <body suppressHydrationWarning={true}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}


