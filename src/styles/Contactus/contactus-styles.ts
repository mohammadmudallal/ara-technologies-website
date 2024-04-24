const imageHeight = 350;

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
  contentBox: { mx: "8%", mt: "5%" },
  subContentBox: { display: "flex", flexDirection: "column", justifyContent: { lg: "start", xs: "center" }, alignItems: { xs: "center" }, mb: "5%" },
  title: { fontWeight: "bold", fontSize: 30, color: "#3949ab", mb: "5%" },
  form: { display: "flex", flexDirection: { lg: "row", xs: "column" }, justifyContent: "space-evenly", width: "100%" },
  address: { display: { xs: "flex", lg: "flow" }, flexDirection: { xs: "column" }, justifyContent: { xs: "center" }, alignItems: { xs: "center" }, width: { lg: "50%" }, mx: { md: "5%" }, mt: { xs: "5%", lg: "0%" } }
};