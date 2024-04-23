// src/componetns/Footer.tsx

import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, MenuItem, Typography } from "@mui/material";
import Logo from "./Logo";
import Links from "./Links";
import { handleMenuItemClicked } from "@/helpers/navigationHandler";

interface FooterProps {
    t: any,
    currentUrl: string,
    enLang: object,
    arLang: object,
}

const Footer = ({ t, currentUrl, enLang, arLang }: FooterProps) => {
  const currentLanguage = currentUrl.split("/")[1];

    const links = [
        {
            linkName: t("home"),
            path: "/",
            children: [],
        },
        {
            linkName: t("services.title"),
            path: "/servicesPage",
            children: ["test", "test"],
        },
        {
            linkName: t("solutions.title"),
            path: "/solutionsPage",
            children: ["test", "test"],
        },
        {
            linkName: t("partners"),
            path: "/partnersPage",
            children: [],
        },
        {
            linkName: t("contactus"),
            path: "/contactusPage",
            children: [],
        },
    ];
    return (
        <Box
            sx={{
                display: {
                    lg: "flex"
                },
                width: "100%",
                height: {
                    xs: "150px",
                    md: "100px",
                    lg: "80px"
                },
                backgroundColor: "#eeeeee",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="xl">
                <Logo
                    xs="none"
                    md="flex"
                    src="/ara-logo.png"
                    height={100}
                    width={100}
                />
                <Links>
                    {links
                        .concat(currentLanguage == "en" ? t("arabic") : t("english"))
                        .map((link, index) => (
                            <MenuItem
                                key={index}
                                onClick={() => {
                                    handleMenuItemClicked(link, currentUrl ,currentLanguage, enLang, arLang);
                                }}
                            >
                                <Typography textAlign="center">{link.linkName}</Typography>
                            </MenuItem>
                        ))}
                </Links>
            </Container>

        </Box>
    );
}

export default Footer;