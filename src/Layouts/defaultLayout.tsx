import ResponsiveAppBar from '@/components/appbar'
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import React from 'react'

interface LayoutProps {
    children: any
}
const DefaultLayout = ({ children }: LayoutProps) => {
    const t = useTranslations('header');

    return (
        <div>
            <ResponsiveAppBar t={t} />
            {children}
            <Footer />
        </div>
    )
}

export default DefaultLayout
