import { title } from "../../../Assets/jss/material-kit-react.js";

const productStyle = theme => ({
  root: {
    flexGrow: 1
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  item: {
    textAlign: "center",
    backgroundColor: "#27c7d8",
    padding: theme.spacing(0)
  },
  image: {
    width: "100%"
  },
  title: {
    ...title,
    color: "#ffffff",
    fontFamily: `"Montserrat", sans-serif`,
    minHeight: "32px",
    textDecoration: "none",
    letterSpacing: "6px"
  },
  simpleText: {
    marginTop: "1.3em",
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: `"Montserrat", sans-serif`,
    letterSpacing: "1.2px"
  },
  simpleBigText: {
    marginTop: "1.3em",
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: `"Montserrat", sans-serif`
  },
  textBox: {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center"
  },
  description: {
    color: "#999"
  }
});

export default productStyle;
