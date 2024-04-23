"use client"
import Image from "next/image";
import ResponsiveAppBar from "../../../components/appbar";
import { useTranslations } from "next-intl";
import React from 'react'
import DefaultLayout from "@/Layouts/defaultLayout";

const ServicesPage = () => {
    const t = useTranslations('header');
    return (
        <div>
            <DefaultLayout>
                <div className="h-screen">
                    <h1>{t("services.title")}</h1>
                </div>
            </DefaultLayout>
        </div>
    )
}

export default ServicesPage