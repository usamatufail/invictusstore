import { container, title } from "../../Assets/jss/material-kit-react.js";

const productPageStyles = theme => ({
  container: {
    zIndex: "12",
    color: "#3C4858",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginBottom: "0px",
    minHeight: "32px",
    color: "#3C4858",
    textDecoration: "none"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  customLink: {
    color: "white"
  },
  productImage: {
    height: "55vh"
  },
  availability: {
    color: "#3C4858"
  },
  productionBlock: {
    marginTop: "20px",
    paddingTop: "20px",
    display: "flex"
  },
  price: {
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: ".5px",
    lineHeight: "1.2em",
    color: "#3C4858"
  },
  buttonWrap: {
    display: "flex",
    flex: "1",
    flexWrap: "nowrap"
  },
  button: {
    margin: theme.spacing(0),
    width: "100%",
    fontSize: "18px"
  },
  rightIcon: {
    margin: theme.spacing(1)
  },
  safeCheckoutTitle: {
    margin: "0 0 20px",
    padding: "0",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "1.2em",
    color: "#3C4858"
  },
  root: {
    flexGrow: 1,
    maxWidth: 500
  }
});

export default productPageStyles;
