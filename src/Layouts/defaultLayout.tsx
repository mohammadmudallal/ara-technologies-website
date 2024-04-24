import ResponsiveAppBar from '@/components/appbar'
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import enLang from "../../messages/en.json";
import arLang from "../../messages/ar.json";
import { usePathname } from 'next/navigation';

interface LayoutProps {
    children: any
}
const DefaultLayout = ({ children }: LayoutProps) => {
    const t = useTranslations('header');
    const currentUrl = usePathname();
    const currentLanguage = currentUrl.split("/")[1];

    return (
        <div>
            <ResponsiveAppBar t={t} currentUrl={currentUrl} />
            {/* <div className='h-screen'> */}
                {children}
            {/* </div> */}
            <Footer t={t} currentUrl={currentUrl} arLang={arLang} enLang={enLang} />
        </div>
    )
}

export default DefaultLayout
