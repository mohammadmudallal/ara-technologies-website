import React, { useState } from 'react'
import Logo from '../Logo';
import { Box, Button, Menu } from '@mui/material';
import { getLinks } from '@/utils/constants';
import { handleMenuItemClicked } from '@/helpers/navigationHandler';
import LanuageSwapper from '../LanuageSwapper';
import { getStyles } from '@/styles/appbar-styles';

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
                sx={getStyles(lang).largeNabarStyles.mainBoxStyle}
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
                        sx={getStyles().largeNabarStyles.linkButtonStyle}
                    >
                        {typeof link === "object" ? link.linkName : link}
                    </Button>
                ))}

                {selectedLink && selectedLink.children.length != 0 && (
                    <Box
                        sx={getStyles().largeNabarStyles.menuStyle}
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
                                    sx={getStyles().largeNabarStyles.menuLinkButtonStyle}
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
