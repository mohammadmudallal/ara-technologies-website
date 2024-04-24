"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import DefaultLayout from "@/Layouts/defaultLayout";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styles } from "@/styles/partners/partners-styles";

const ServicesPage = () => {
    const t = useTranslations("partners-page");
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

                        <Grid container spacing={3} sx={{ width: "100%" }}> {/* Add spacing between items (optional) */}
                            {[...Array(7)].map((_, index) => ( // Generate 15 items (adjust for real count)
                                <Grid item lg={3} xs={12} key={index} > {/* Each item takes 6 columns */}
                                    <Box sx={styles.partnerImageBox}>
                                        <img src={`/partners-page-assets/${index + 1}.jpg`}></img>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </DefaultLayout>
        </>
    );
};

export default ServicesPage;
