"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState } from 'react'
import DefaultLayout from "@/Layouts/defaultLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styles } from "@/styles/Contactus/contactus-styles";
import { usePathname } from "next/navigation";

const ServicesPage = () => {
    const t = useTranslations('contactus-page');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const currentUrl = usePathname();
    const currentLanguage = currentUrl.split("/")[1];
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form submitted:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <>
            <DefaultLayout>
                <Box sx={styles.container}>
                    <Box sx={styles.imageBox}>
                        <Image src={"/partners-page-assets/ara-partner.jpg"} alt="Image 1" layout="fill" objectFit="cover" />
                    </Box>
                </Box>
                <Box sx={styles.contentBox}>
                    <Box sx={styles.subContentBox} >
                        <Typography sx={styles.title}>
                            {t('title')}
                        </Typography>
                        <Box sx={styles.form}>
                            <form onSubmit={handleSubmit}>
                                <TextField label={t('name-field')} variant="outlined" fullWidth value={name} onChange={(event) => setName(event.target.value)} required />
                                <TextField label={t('email-field')} variant="outlined" margin="normal" fullWidth value={email} onChange={(event) => setEmail(event.target.value)} required />
                                <TextField label={t('message-field')} variant="outlined" margin="normal" fullWidth multiline minRows={4} value={message} onChange={(event) => setMessage(event.target.value)} required />

                                <Button type="submit" variant="contained" sx={{ backgroundColor: "#424242", width: { xs: "100%", lg: "20%" } }}> {t('submit')}</Button>
                            </form>
                            <Box sx={styles.address}>
                                <Typography sx={{fontWeight: "bold"}}>{t('address-one')}</Typography>
                                <Typography>{t('address-two')}</Typography>
                                <Typography>{t('address-three')}</Typography>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </DefaultLayout>
        </>
    )
}

export default ServicesPage