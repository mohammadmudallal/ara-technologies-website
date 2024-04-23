"use client"
import { useTranslations } from "next-intl";
import React from 'react'
import DefaultLayout from "@/Layouts/defaultLayout";

const ServicesPage = () => {
    const t = useTranslations('header');
    return (
        <div>
            <DefaultLayout>
                <div className="h-screen">
                    <h1>{t("solutions.mobile-network-monitoring")}</h1>
                </div>
            </DefaultLayout>
        </div>
    )
}

export default ServicesPage
