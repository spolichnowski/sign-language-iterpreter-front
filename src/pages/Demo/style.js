import { makeStyles } from "@material-ui/core/styles";
import bg from "../../media/images/bg-demo.png";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 275,
  },
  demoContainer: {
    display: "flex",
    width: "100%",
    height: "100vh",
    margin: 0,
    overflow: "hidden",
    background: `url(${bg}) no-repeat center center fixed`,
    backgroundSize: "cover",
    alignItems: "center",
  },

  videoContainer: {
    width: (props) => props.width,
    height: (props) => props.height,
    border: "solid 10px rgb(255, 255, 255)",
    boxShadow: "10px 8px 21px 0px rgba(0, 0, 0, 0.91)",
  },

  demoButtonContainer: {
    position: "absolute",
    right: "20%",
    alignSelf: "center",
  },

  demoButton: {
    borderRadius: "50%",
    height: "200px",
    width: "200px",
    backgroundColor: "#f50057",
    color: "white",
    fontSize: "20px",
    border: "none",
    boxShadow: "10px 8px 21px 0px rgba(0, 0, 0, 0.91)",
    "&:focus": {
      outline: "none",
    },
  },

  goBackBtn: {
    position: "absolute",
    top: "25px",
    left: "25px",
  },

  predictBtn: {
    position: "absolute",
    top: "25px",
    left: "205px",
  },

  settings: {
    width: "220px",
    height: "350px",
  },

  settingsContent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: 0,
  },

  cardItem: {
    width: "150px",
    marginBottom: "20px",
    margin: "0 10px",
  },

  settingsIcon: {
    position: "absolute",
    top: "25px",
    right: "25px",
  },
});

export default useStyles;
