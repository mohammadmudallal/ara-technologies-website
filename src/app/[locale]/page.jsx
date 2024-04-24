"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import DefaultLayout from "@/Layouts/defaultLayout";
import { Box, Typography } from "@mui/material";
import { useResize } from "react-spring";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/helpers/windowResize";
import { styles } from "@/styles/home/home-page-styles";

const Home = () => {
  const t = useTranslations("header");
  const size = useWindowSize();
  const imageSrc =
    size.width < 600
      ? "/home-page-assets/bg-phone.jpg"
      : "/home-page-assets/bg-ara.jpg";

  return (
    <div>
      <DefaultLayout>
        <Box sx={styles.container}>
          <Box sx={styles.imageBox}>
            <Image
              src={imageSrc}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
            <Box sx={styles.imageOverlay}>
              <Typography
                variant="h5"
                sx={styles.imageOneTypographyStyles}
              >
                STRATEGIC CONSULTING, TREND ANALYSIS & PRACTICAL SOLUTIONS FOR
                TELECOMS INDUSTRY
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Box
            sx={styles.imageBox}
          >
            <Image
              src="/home-page-assets/bg-ara-3.jpg"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
            <Box
              sx={styles.imageTwoTextBoxStyle}
            >
              <Typography
                variant="h5"
                sx={styles.imageTwoTypographyOneStyle}
              >
                ARA TECHNOLOGIES - HARNESS DIGITAL TRANSFORMATION FOR BUSINESS
                SUCCESS
              </Typography>
              <Typography
                variant="h5"
                sx={styles.imageTwoTypographyTwoStyle}
              >
                Offering a deep understanding of the business needs of telecoms
                operators, ARA Technologies empower our partners to successfully
                navigate transition and harness change in the ICT sphere. We can
                provide enhanced data and network analysis, a high-quality user
                experience and future-proof evolution of technology for your
                business and network. Using the latest developments in
                artificial intelligence and machine learning, we drive digital
                transformation and deliver seamless connectivity and network
                convergence to your doorstep. With our strategic consulting,
                end-to-end capabilities and practical solutions, transformation
                creates endless opportunity for growth and success.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.imageBox}>
            <Image
              src="/home-page-assets/bg-ara-2.jpg"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
            />
            <Box sx={styles.imageThreeOverlay}>
              <Typography variant="h5" sx={styles.imageThreeText}>
              Your strategic partner in the ICT Sphere
              </Typography>
            </Box>
          </Box>
        </Box>
      </DefaultLayout>
    </div>
  );
};

export default Home;
