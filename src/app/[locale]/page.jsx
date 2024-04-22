// pages/index.tsx
"use client"
import Image from "next/image";
import ResponsiveAppBar from "../../components/appbar";
import { useTranslations } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

const Home = () => {
  const t = useTranslations('header');
  return (
    <div>
      <ResponsiveAppBar t={t} />
      <h1>
        {t('home')}
      </h1>
    </div>
  );
};

export default Home;