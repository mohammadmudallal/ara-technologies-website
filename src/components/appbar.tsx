"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import { MoonLoader } from "react-spinners";
import Cookies from "js-cookie";

//Custom file imports
import enLang from "../../messages/en.json";
import arLang from "../../messages/ar.json";
import SmallMediumNavbar from "./Navbar/small_medium_navbar";
import LargeNavbar from "./Navbar/large_navbar";

interface ResponsiveAppBarProps{
  t: any,
  currentUrl: string,
}
function ResponsiveAppBar({ t, currentUrl }: ResponsiveAppBarProps) {
  const [lang, setLang] = useState<any>(Cookies.get("NEXT_LOCALE"));
  const [selectedLink, setselectedLink] = useState<any>();
  const [loading, setLoading] = useState(true);
  const currentLanguage = currentUrl.split("/")[1];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  const isRTL: boolean = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = lang == "ar" ? "rtl" : "ltr";
  }, [isRTL, lang]);


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
              <SmallMediumNavbar
                arLang={arLang}
                enLang={enLang}
                lang={lang}
                t={t}
                currentLanguage={currentLanguage}
                currentUrl={currentUrl}
              />

              <LargeNavbar
                arLang={arLang}
                enLang={enLang}
                currentLanguage={currentLanguage}
                currentUrl={currentUrl}
                t={t}
                lang={lang}
              />
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}
export default ResponsiveAppBar;
