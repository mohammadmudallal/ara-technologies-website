"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import DefaultLayout from "@/Layouts/defaultLayout";
import { Box, Typography } from "@mui/material";
import { useWindowSize } from "@/helpers/windowResize";
import { styles } from "@/styles/home/home-page-styles";

const Home = () => {
  const t = useTranslations("home-page");
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
                { t('image-one-text') }
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
                { t('image-two-title') }
              </Typography>
              <Typography
                variant="h5"
                sx={styles.imageTwoTypographyTwoStyle}
              >
                { t('image-two-text') }
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
              { t('image-three-text') }
              </Typography>
            </Box>
          </Box>
        </Box>
      </DefaultLayout>
    </div>
  );
};

export default Home;
