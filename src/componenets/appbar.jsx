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

function ResponsiveAppBar({ t }) {
  const [lang, setLang] = useState(Cookies.get("NEXT_LOCALE"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLink, setselectedLink] = useState(0);

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
    t("solutions"),
    t("partners"),
    t("contactus"),
  ];
  const settings = ["English", "Arabic"];

  useEffect(() => {
    document.documentElement.dir = lang == "ar" ? "rtl" : "ltr";
  }, [isRTL, lang]);

  const handleClick = (event, index) => {
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

  return (
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
                // onMouseDown={() => handleClose()}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {typeof link === "object" ? link.page : link}
              </Button>
            ))}

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {selectedLink &&
                selectedLink.children &&
                selectedLink.children.map((child, index) => (
                  <MenuItem key={index} onClick={handleClose}>
                    {child}
                  </MenuItem>
                ))}
            </Menu>
          </Box>

          <LanuageSwapper t={t} lang={lang} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
