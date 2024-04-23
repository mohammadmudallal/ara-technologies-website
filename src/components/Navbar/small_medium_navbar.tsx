import { Box, Button, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import { useSpring, animated } from "react-spring";
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';
import LanuageSwapper from '../LanuageSwapper';
import Logo from '../Logo';
import { getLinks } from '@/utils/constants';
import { handleMenuItemClicked } from '@/helpers/navigationHandler';
import {getStyles} from '@/styles/appbar-styles'

interface SmallMediumNavbarProps {
    currentUrl: string,
    currentLanguage: string,
    enLang: any,
    arLang: any,
    lang: string,
    t: any
}
const SmallMediumNavbar = ({ t, currentUrl, currentLanguage, arLang, enLang, lang }: SmallMediumNavbarProps) => {
    const [menuAnimationDelay, setMenuAnimationDelay] = useState<number>(0);
    const [anchorElSmallScreen, setAnchorElSmallScreen] = useState<any>(null);
    const [selectedLink, setselectedLink] = useState<any>();
    const [showLinks, setshowLinks] = useState<boolean>(false);

    const openSmall = Boolean(anchorElSmallScreen);

    useEffect(() => {
        setTimeout(() => setMenuAnimationDelay(400), 0);
    }, []);

    const menuItems = useSpring({
        from: { opacity: 0 },
        to: { opacity: showLinks ? 1 : 0 },
        delay: menuAnimationDelay,
        config: { duration: 300, ease: "ease-in-out" },
        onStart: () => {
            // Optional: Play a sound or perform other actions when animation starts
        },
        onRest: () => {
            // Optional: Perform actions after animation finishes
        },
    });

    const handleShowLinkMenu = (event: any, index: number) => {
        setselectedLink(null);
        setselectedLink(getLinks(t)[index]);
        setAnchorElSmallScreen(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElSmallScreen(null);
        setselectedLink(null);
    };

    const handleAppbarCollapse = () => {
        setshowLinks((prev) => !prev);
    };
    return (
        <Box
            sx={getStyles(showLinks).smallMediumNavbarStyles.mainBoxStyle}
        >
            <Box
                sx={getStyles().smallMediumNavbarStyles.secondBoxStyle}
            >
                <Box
                    sx={getStyles().smallMediumNavbarStyles.thirdBoxStyle}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleAppbarCollapse}
                        sx={getStyles().smallMediumNavbarStyles.iconButtonStyle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Logo
                    xs="flex"
                    md="flex"
                    src="/ara-logo.png"
                    height={100}
                    width={100}
                />
            </Box>
            {showLinks && (
                <Box
                    sx={getStyles().smallMediumNavbarStyles.linksBoxStyle}
                >
                    {getLinks(t).map((link, index) => (
                        <animated.div key={index} style={menuItems}>
                            <MenuItem
                                onClick={(event) =>
                                    link.children.length != 0 ? handleShowLinkMenu(event, index) : handleMenuItemClicked(
                                        link,
                                        currentUrl,
                                        currentLanguage,
                                        enLang,
                                        arLang
                                    )
                                }
                                sx={{ color: "black" }}
                            >
                                {link.linkName}
                                {link.children.length != 0 && (<MdKeyboardArrowDown />)}
                            </MenuItem>
                        </animated.div>
                    ))}
                    <animated.div style={menuItems}>
                        <LanuageSwapper
                            t={t}
                            lang={lang}
                            currentLanguage={currentLanguage}
                            currentUrl={currentUrl}
                            enLang={enLang}
                            arLang={arLang}
                            display={{ lg: "none", xs: "flex", md: "flex" }}
                            textDisplay={{ xs: "flex", lg: "none" }}
                            displayIcon={false}
                        />
                    </animated.div>
                    {selectedLink && selectedLink.children.length != 0 && (
                        <Box
                            onClick={handleClose}
                            sx={getStyles().smallMediumNavbarStyles.menuBoxStyle}
                        >
                            <Menu
                                anchorEl={anchorElSmallScreen}
                                open={openSmall}
                                onClick={handleClose}
                                onMouseLeave={handleClose}
                            >
                                {selectedLink.children.map((child: any, index: number) => (
                                    <Button
                                        key={index}
                                        aria-controls={openSmall ? `menu-${index}` : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openSmall ? "true" : undefined}
                                        onClick={() => {
                                            handleMenuItemClicked(
                                                child,
                                                currentUrl,
                                                currentLanguage,
                                                enLang,
                                                arLang
                                            );
                                        }}
                                        sx={getStyles().smallMediumNavbarStyles.buttonStyle}
                                    >
                                        {child.linkName}
                                    </Button>
                                ))}
                            </Menu>
                        </Box>
                    )}
                </Box>
            )}

        </Box>
    )
}

export default SmallMediumNavbar
