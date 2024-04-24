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
  partnerImageBox: { width: "100%", height: "170px", border: "#D3D3D3 1px solid" }
};