const imageHeight = 600;

export const styles = {
  container: {
    position: "relative",
    height: imageHeight,
  },
  imageBox: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  imageBox2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  imageBox3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex", // Enable flexbox for text positioning
    alignItems: "center", // Center text vertically
    justifyContent: {
      lg: "end",
      xs: "center",
    }, // Center text horizontally (optional)
    content: '""',
  },
  imageThreeOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex", // Enable flexbox for text positioning
    alignItems: "center", // Center text vertically
    justifyContent: "center", // Center text horizontally (optional)
    content: '""',
  },
  imageOneText: {
    color: "black", // Adjust text color for better visibility
    fontSize: "2rem", // Adjust font size as needed
    fontWeight: "bold", // Adjust font weight as needed
    textAlign: "end", // Center text horizontally within the overlay
  },
  imageTwoText: {
    color: "white", // Adjust text color for better visibility
    fontSize: "2rem", // Adjust font size as needed
    fontWeight: "bold", // Adjust font weight as needed
    textAlign: "center", // Center text horizontally within the overlay
  },
  imageThreeText: {
    color: "white", // Adjust text color for better visibility
    fontSize: "2rem", // Adjust font size as needed
    fontWeight: "bold", // Adjust font weight as needed
    textAlign: "center", 
    alignSelf: "center",
  },
  imageOneTypographyStyles: {
    flex: "",
    color: "#757575",
    fontSize: {
      lg: "1.5rem",
      xs: "1rem",
    },
    fontWeight: "bold",
    textAlign: "end",
    width: {
      lg: "25%",
      xs: "40%",
    },
    margin: "10%",
  },
  imageTwoTextBoxStyle: {
    position: "absolute",
    top: { lg: "25%", xs: "5%" },
    left: { lg: "25%", xs: "15%" },
    width: { lg: "50%", xs: "70%" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    content: '""',
    textAlign: { lg: "start", xs: "center" },
  },
  imageTwoTypographyOneStyle: {
    color: "white",
    fontSize: {
      lg: 20,
      xs: 15,
    },
    mb: {
      lg: "5%",
      xs: "15%",
    },
    
  },
  imageTwoTypographyTwoStyle: {
    color: "white",
    fontSize: {
      lg: 20,
      xs: 14,
    },
  }
};