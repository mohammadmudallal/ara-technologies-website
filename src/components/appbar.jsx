"use client";
import React, { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LanuageSwapper from "./LanuageSwapper";
import Links from "./Links";
import { MoonLoader } from "react-spinners";
import { MdKeyboardArrowDown } from "react-icons/md";

function ResponsiveAppBar({ t }) {
  const [lang, setLang] = useState(Cookies.get("NEXT_LOCALE"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLink, setselectedLink] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  const currentUrl = usePathname();
  const isRTL = lang === "ar";
  const open = Boolean(anchorEl);

  const pages = [
    t("home"),
    t("services"),
    t("solutions"),
    t("partners"),
    t("contactus"),
  ];

  const links = [
    t("home"),
    {
      page: t("services"),
      children: ["test", "test"],
    },
    {
      page: t("solutions"),
      children: ["test", "test"],
    },
    // t("solutions"),
    t("partners"),
    t("contactus"),
  ];
  const settings = ["English", "Arabic"];

  useEffect(() => {
    document.documentElement.dir = lang == "ar" ? "rtl" : "ltr";
  }, [isRTL, lang]);

  const handleClick = (event, index) => {
    setselectedLink(null);
    setAnchorEl(event.currentTarget);
    setselectedLink(links[index]);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setselectedLink(null);
  };

  const handleMenuItemClicked = (page) => {
    if (lang == "ar" && (page == "English" || page == "الانكليزية")) {
      window.location.href = "/en";
    } else if (lang == "en" && (page == "Arabic" || page == "العربية")) {
      window.location.href = "/ar";
    }
  };

  const handleNavigation = () => {
    
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <MoonLoader color="red" />
        </div>
      ) : (
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
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
                <Links
                  children={pages
                    .concat(lang == "en" ? t("arabic") : t("english"))
                    .map((page) => (
                      <MenuItem
                        key={page}
                        onClick={() => {
                          handleMenuItemClicked(page);
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                />

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
                {links.map((link, index) => (
                  <Button
                    key={index}
                    aria-controls={open ? `menu-${index}` : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onMouseOver={(event) => handleClick(event, index)}
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
                    {typeof link === "object" ? link.page : link}
                  </Button>
                ))}

                {selectedLink && selectedLink.children && (
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
                      onMouseOut={handleClose}
                      onClose={handleClose}
                      onClick={handleClose}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                      slotProps={{
                        paper: {
                          elevation: 0,
                          sx: {
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
                        <MenuItem key={index} onClick={handleClose}>
                          {child}
                        </MenuItem>
                      ))}
                    </Menu>
                    <MdKeyboardArrowDown />
                  </Box>
                )}
              </Box>

              <LanuageSwapper t={t} lang={lang} />
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}
export default ResponsiveAppBar;
