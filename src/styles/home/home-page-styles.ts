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
      textAlign: "center", // Center text horizontally within the overlay
    },
  };