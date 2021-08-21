import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  /** Header **/

  containerHeader: {
    width: "100%",
    height: "100vh",
  },

  bgVideo: {
    position: "absolute",
    overflow: "hidden",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectPosition: "center",
    objectFit: "cover",
    zIndex: -1,
  },

  headerText: {
    marginTop: "23vh",
    width: "480px",
    padding: "0 200px",
    marginLeft: "auto",
    textAlign: "center",
    "& h6": {
      margin: "0px 15px",
    },
    "& button": {
      marginTop: "25px",
    },
  },

  /** Navigation **/

  nav: {
    height: "60px",
    display: "flex",
    flexDirection: "row",
    padding: "35px 8%",
  },

  navWrap: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: "0 50px",
    marginLeft: "auto",
  },

  navItem: {
    display: "flex",
    padding: "0 15px",
    listStyleType: "none",
    alignItems: "center",
  },

  navLink: {
    color: "#fff",
    fontSize: "17px",
    textDecoration: "none",
  },

  navBtn: {
    display: "flex",
    alignItems: "center",
    "& button": {
      alignSelf: "center",
    },
  },

  /** SECTION 1 **/

  sectionTech: {
    width: "84%",
    padding: "100px 8%",
  },

  technologies: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "70px 0",
  },

  technologiesImg: {
    height: "150px",
  },

  /** SECTION 2 **/

  howTextHeader: {
    margin: "20px 0",
  },

  sectionHow: {
    width: "100%",
    padding: "80px 0",
    backgroundColor: "#165077",
  },
  //#c7622b
  howText: {
    padding: "0 150px",
  },

  /** Footer **/

  footer: {
    width: "84%",
    padding: "40px 8%",
    height: "200px",
    backgroundColor: "rgb(54, 54, 54)",
  },

  socials: {
    display: "flex",
    justifyContent: "center",
  },

  socialItem: {
    padding: "14px",
    "& a": {
      color: "white",
    },
  },

  footerBtns: {
    display: "flex",
    justifyContent: "center",
  },

  footerCaption: {
    display: "flex",
    justifyContent: "center",
    padding: "14px 0",
  },
});

export default useStyles;
