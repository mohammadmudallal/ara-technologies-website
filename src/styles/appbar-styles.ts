
export const getStyles = (showLinks: any = null, lang: any = null) => {
    return {
        smallMediumNavbarStyles: {
            mainBoxStyle: {
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
                // border: "red 1px solid",
                flexDirection: "column",
                transition: "height 0.5s ease-in-out",
                height: showLinks ? "350px" : "50px",
            },
            secondBoxStyle: {
                display: "flex",
                width: "100%",
                // border: "blue 1px solid",
            },
            thirdBoxStyle: {
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                alignItems: "start",
                // border: "yellow 1px solid",
            },
            iconButtonStyle: {
                mt: showLinks ? "0px" : "5px",
                color: "black"
            },
            linksBoxStyle: {
                flexGrow: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "5px"
                // border: "black 1px solid",
            },
            menuBoxStyle: {
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                alignItems: "center",
                border: "black",
            },
            buttonStyle: {
                my: 2,
                color: "black",
                display: "flex",
                width: "100%",
                backgroundColor: "white", // Set a default background color
                transition: "background-color 0.2s ease-in-out", // Smooth transition effect
                "&:hover": {
                    backgroundColor: "lightgrey", // Change background color on hover
                },
            },
        },

        largeNabarStyles: {
            mainBoxStyle: {
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                ml: lang === "en" ? 10 : 0,
                mr: lang === "ar" ? 10 : 0,
            },
            linkButtonStyle: {
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                ":hover": {
                    color: "grey", // change color to red on hover and focus
                },
            },
            menuStyle: {
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                alignItems: "center",
                border: "black",
            },
            menuLinkButtonStyle: {
                my: 2,
                color: "black",
                display: "flex",
                width: "100%",
                backgroundColor: "white", // Set a default background color
                transition: "background-color 0.2s ease-in-out", // Smooth transition effect
                "&:hover": {
                    backgroundColor: "lightgrey", // Change background color on hover
                },
            },
            
        }

    }
}