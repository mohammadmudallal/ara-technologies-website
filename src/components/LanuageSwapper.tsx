import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { handleMenuItemClicked } from "@/helpers/navigationHandler";

interface LanguageSwapperProps {
    t: any,
    lang: string,
    currentUrl: string,
    currentLanguage: string,
    enLang: any,
    arLang: any,
    display: any,
    textDisplay: any,
    displayIcon: any
}
const LanuageSwapper = ({
  t,
  lang,
  currentUrl,
  currentLanguage,
  enLang,
  arLang,
  display,
  textDisplay,
  displayIcon,
}: LanguageSwapperProps) => {
  return (
    <Box
      sx={{
        flexGrow: 0,
        display: display,
        // { lg: "flex", xs: "flex", md: "none" },
      }}
    >
      <Tooltip title="Open settings">
        <IconButton
          sx={{
            mr: { lg: "8px", xs: "8px" },
            ml: { lg: "8px", xs: "8px" },
            fontSize: { xs: 20 },
          }}
          onClick={() => {
            // console.log(currentLanguage)
            handleMenuItemClicked(
              null,
              currentUrl,
              currentLanguage,
              enLang,
              arLang
            );
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mr: { lg: "8px", xs: "auto" },
              ml: { lg: "8px", xs: "auto" },
              display: textDisplay 
              // { xs: "none", lg: "flex" },
            }}
          >
            {lang == "en" ? t("arabic") : t("english")}
          </Typography>
          {displayIcon && (<LanguageIcon />)}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default LanuageSwapper;
