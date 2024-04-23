"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Collapse,
  IconButton,
} from "@mui/material";
import { MoonLoader } from "react-spinners";
import { MdKeyboardArrowDown } from "react-icons/md";
import MenuIcon from "@mui/icons-material/Menu";
import Cookies from "js-cookie";

//Custom file imports
import Logo from "./Logo";
import LanuageSwapper from "./LanuageSwapper";
import Links from "./Links";
import enLang from "../../messages/en.json";
import arLang from "../../messages/ar.json";
import { handleMenuItemClicked } from "@/helpers/navigationHandler";
import { getLinks } from "@/utils/constants";
import { get } from "https";

function ResponsiveAppBar({ t, currentUrl }) {
  const [lang, setLang] = useState(Cookies.get("NEXT_LOCALE"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElSmallScreen, setAnchorElSmallScreen] = useState(null);
  const [selectedLink, setselectedLink] = useState();
  const [loading, setLoading] = useState(true);
  const [showLinks, setshowLinks] = useState(false);
  const currentLanguage = currentUrl.split("/")[1];

  const [menuAnimationDelay, setMenuAnimationDelay] = useState(0);

  useEffect(() => {
    // Set a delay on initial render to ensure app bar expansion is complete before animation
    // if (showLinks) {
    setTimeout(() => setMenuAnimationDelay(400), 0); // Adjust delay as needed (in milliseconds)
    // }
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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  const isRTL = lang === "ar";
  const open = Boolean(anchorEl);
  const openSmall = Boolean(anchorElSmallScreen);


  useEffect(() => {
    document.documentElement.dir = lang == "ar" ? "rtl" : "ltr";
  }, [isRTL, lang]);

  const handleAppbarCollapse = () => {
    setshowLinks((prev) => !prev);
  };

  const handleShowLinkMenu = (event, index) => {
    setselectedLink(null);
    setselectedLink(getLinks(t)[index]);
    setAnchorElSmallScreen(event.currentTarget);
  };

  const handleMouseOver = (event, index) => {
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
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <MoonLoader color="red" />
        </div>
      ) : (
        <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  // border: "red 1px solid",
                  flexDirection: "column",
                  transition: "height 0.5s ease-in-out",
                  height: showLinks ? "350px" : "50px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    // border: "blue 1px solid",
                  }}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: { xs: "flex", md: "none" },
                      alignItems: "start",
                      // border: "yellow 1px solid",
                    }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleAppbarCollapse}
                      color="black"
                      sx={{
                        mt: showLinks ? "0px" : "5px",
                      }}
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
                    sx={{
                      flexGrow: 1,
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "5px"
                      // border: "black 1px solid",
                    }}
                    // onClick={() => console.log(getLinks(t))}
                  >
                    {getLinks(t).map((link, index) => (
                      <animated.div key={index} style={menuItems}>
                        <MenuItem
                          onClick={(event) =>
                            link.children.length != 0 ? handleShowLinkMenu(event, index) : handleMenuItemClicked(
                              link,
                              currentUrl,
                              enLang,
                              arLang
                            )
                          }
                          sx={{ color: "black" }}
                        >
                          {link.linkName}
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
                  </Box>
                )}
              </Box>

              {/* Big screen */}
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
                      anchorEl={anchorEl ? anchorEl : anchorElSmallScreen}
                      open={open ? open : openSmall}
                      // onMouseOut={handleClose}
                      onClose={handleClose}
                      onClick={handleClose}
                    >
                      {selectedLink.children.map((child, index) => (
                        <Button
                          key={index}
                          aria-controls={open || openSmall ? `menu-${index}` : undefined}
                          aria-haspopup="true"
                          aria-expanded={open || openSmall ? "true" : undefined}
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
                    <MdKeyboardArrowDown />
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
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}
export default ResponsiveAppBar;
