"use client"
import Image from "next/image";
import ResponsiveAppBar from "../../../components/appbar";
import { useTranslations } from "next-intl";
import React from 'react'

const ServicesPage = () => {
    const t = useTranslations('header');
    return (
        <div>
            <ResponsiveAppBar t={t} />
            <h1>{t('services')}</h1>
        </div>
    )
}

export default ServicesPage