// pages/index.tsx
"use client";
import Image from "next/image";
import ResponsiveAppBar from "../../components/appbar";
import { useTranslations } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import DefaultLayout from "@/Layouts/defaultLayout";

const Home = () => {
  const t = useTranslations("header");
  return (
    <div>
      <DefaultLayout>
        <div className="h-screen">
          <h1>{t("home")}</h1>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Home;
