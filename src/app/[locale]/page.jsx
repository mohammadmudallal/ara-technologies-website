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
  const imageSrc = size.width < 600 ? "/home-page-assets/bg-phone.jpg" : "/home-page-assets/bg-ara.jpg"


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
                sx={{
                  flex: "",
                  color: "#757575",
                  fontSize: {
                    lg: "1.5rem",
                    xs: "1rem",
                  },
                  fontWeight: "bold",
                  textAlign: "end",
                  width: {
                    lg: "25%",
                    xs: "40%",
                  },
                  margin: "10%",
                }}
              >
                STRATEGIC CONSULTING, TREND ANALYSIS & PRACTICAL SOLUTIONS FOR
                TELECOMS INDUSTRY
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.imageBox}>
            <Image
              src="/home-page-assets/bg-ara-2.jpg"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />
            <Box sx={styles.imageOverlay} />
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Box sx={styles.imageBox}>
            <Image
              src="/home-page-assets/bg-ara-3.jpg"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
            />
            <Box sx={styles.imageOverlay}>
              <Typography variant="h5" sx={styles.imageThreeText}>
                Image Text 3 (Adjust position with styles.text)
              </Typography>
            </Box>
          </Box>
        </Box>
      </DefaultLayout>
    </div>
  );
};

export default Home;
