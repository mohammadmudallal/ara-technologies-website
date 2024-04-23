import React, { useState } from 'react'
import Logo from '../Logo';
import { Box, Button, Menu } from '@mui/material';
import { getLinks } from '@/utils/constants';
import { handleMenuItemClicked } from '@/helpers/navigationHandler';
import LanuageSwapper from '../LanuageSwapper';

interface LargeNavbarProps {
    t: any,
    lang: string,
    currentUrl: string,
    currentLanguage: string,
    enLang: any,
    arLang: any,
}
const LargeNavbar = ({ t, lang, currentUrl, currentLanguage, enLang, arLang }: LargeNavbarProps) => {
    const [selectedLink, setselectedLink] = useState<any>();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMouseOver = (event: any, index: number) => {
        setselectedLink(null);
        setselectedLink(getLinks(t)[index]);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setselectedLink(null);
    };
    return (
        <>
            <Logo
                xs="none"
                md="flex"
                src="/ara-logo.png"
                height={100}
                width={100}
            />
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    ml: lang === "en" ? 10 : 0,
                    mr: lang === "ar" ? 10 : 0,
                }}
            >
                {getLinks(t).map((link, index) => (
                    <Button
                        key={index}
                        aria-controls={open ? `menu-${index}` : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        // onMouseEnter={handleMouseOver}
                        // onClick={handleMouseOver}
                        onMouseEnter={(event) => handleMouseOver(event, index)}
                        // onMouseOut={handleClose}
                        onClick={() => {
                            handleMenuItemClicked(
                                link,
                                currentUrl,
                                currentLanguage,
                                enLang,
                                arLang
                            );
                        }}
                        sx={{
                            my: 2,
                            color: "black",
                            display: "block",
                            fontWeight: "bold",
                            ":hover": {
                                color: "grey", // change color to red on hover and focus
                            },
                        }}
                    >
                        {typeof link === "object" ? link.linkName : link}
                    </Button>
                ))}

                {selectedLink && selectedLink.children.length != 0 && (
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            justifyContent: "space-between",
                            alignItems: "center",
                            border: "black",
                        }}
                    >
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            // onMouseOut={handleClose}
                            onClose={handleClose}
                            onClick={handleClose}
                        >
                            {selectedLink.children.map((child: any, index: number) => (
                                <Button
                                    key={index}
                                    aria-controls={open ? `menu-${index}` : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={() => {
                                        handleMenuItemClicked(
                                            child,
                                            currentUrl,
                                            currentLanguage,
                                            enLang,
                                            arLang
                                        );
                                    }}
                                    sx={{
                                        my: 2,
                                        color: "black",
                                        display: "flex",
                                        width: "100%",
                                        backgroundColor: "white", // Set a default background color
                                        transition: "background-color 0.2s ease-in-out", // Smooth transition effect
                                        "&:hover": {
                                            backgroundColor: "lightgrey", // Change background color on hover
                                        },
                                    }}
                                >
                                    {child.linkName}
                                </Button>
                            ))}
                        </Menu>
                    </Box>
                )}
            </Box>

            <LanuageSwapper
                t={t}
                lang={lang}
                currentLanguage={currentLanguage}
                currentUrl={currentUrl}
                enLang={enLang}
                arLang={arLang}
                display={{ lg: "flex", xs: "none", md: "none" }}
                textDisplay={{ xs: "none", lg: "flex" }}
                displayIcon={true}
            />
        </>
    )
}

export default LargeNavbar
