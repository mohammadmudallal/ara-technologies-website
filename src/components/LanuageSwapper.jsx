import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { handleMenuItemClicked } from "@/helpers/navigationHandler";

// interface LanguageSwapperProps {
//     t: any,
//     lang: string
// }
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
}) => {
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
            {lang == "en" ? t("english") : t("arabic")}
          </Typography>
          {displayIcon && (<LanguageIcon />)}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default LanuageSwapper;
