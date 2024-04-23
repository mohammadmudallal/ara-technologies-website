import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import React, { useEffect } from "react";
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
}) => {
  // useEffect(() => {}, [currentLanguage]);
  return (
    <Box
      sx={{
        flexGrow: 0,
        display: { lg: "flex", xs: "none", md: "none" },
      }}
    >
      <Tooltip title="Open settings">
        <IconButton
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
          sx={{ p: 0 }}
        >
          <Typography variant="body1" sx={{ mr: "8px", ml: "8px" }}>
            {lang == "en" ? t("english") : t("arabic")}
          </Typography>
          <LanguageIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default LanuageSwapper;
