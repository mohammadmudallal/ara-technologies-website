"use client";
import React, { useEffect, useState } from "react";
import {AppBar,Box, Toolbar,Typography, Menu, Container, Button, MenuItem} from "@mui/material";
import { MoonLoader } from "react-spinners";
import { MdKeyboardArrowDown } from "react-icons/md";
import Cookies from "js-cookie";

//Custom file imports
import Logo from "./Logo";
import LanuageSwapper from "./LanuageSwapper";
import Links from "./Links";
import enLang from "../../messages/en.json";
import arLang from "../../messages/ar.json";
import { handleMenuItemClicked } from "@/helpers/navigationHandler";
import { getLinks } from "@/utils/constants";

function ResponsiveAppBar({ t, currentUrl }) {
  const [lang, setLang] = useState(Cookies.get("NEXT_LOCALE"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLink, setselectedLink] = useState();
  const [loading, setLoading] = useState(true);

  // const currentUrl = usePathname();
  const currentLanguage = currentUrl.split("/")[1];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  const isRTL = lang === "ar";
  const open = Boolean(anchorEl);

  const pages = [
    t("home"),
    t("services.title"),
    t("solutions.title"),
    t("partners"),
    t("contactus"),
  ];

  useEffect(() => {
    document.documentElement.dir = lang == "ar" ? "rtl" : "ltr";
  }, [isRTL, lang]);

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
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "black",
                }}
              >
                <Links>
                  {pages
                    .concat(lang == "en" ? t("arabic") : t("english"))
                    .map((page) => (
                      <MenuItem
                        key={page}
                        onClick={() => {
                          // Modify this
                          handleMenuItemClicked(page);
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                </Links>

                <Logo
                  xs="flex"
                  md="none"
                  src="/ara-logo.png"
                  height={100}
                  width={100}
                />
              </Box>

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
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                      slotProps={{
                        paper: {
                          elevation: 0,
                          sx: {
                            padding: "5px",
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&::before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        },
                      }}
                    >
                      {selectedLink.children.map((child, index) => (
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
              />
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}
export default ResponsiveAppBar;
