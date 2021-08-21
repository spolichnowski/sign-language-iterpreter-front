import useStyles from "./style.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typography, Button } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import bgVideo from "./media/images/bgVideo.mp4";
import flask from "./media/images/Flask.png";
import keras from "./media/images/keras.png";
import openCV from "./media/images/openCV.png";
import tensorFlow from "./media/images/tensorflow.png";
import reactLogo from "./media/images/react.png"
import material from "./media/images/materialUI.png"

function App() {
  const classes = useStyles();
  const techAnimate = {
    up: {
      y: [20, -20],
      transition: {
        ease: "easeOut",
        duration: 1,
        yoyo: Infinity,
      },
    },
    down: {
      y: [-20, 20],
      transition: {
        ease: "easeOut",
        duration: 1,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div>
      <header className={classes.containerHeader}>
        <video autoPlay muted loop className={classes.bgVideo}>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <nav className={classes.nav}>
          <ul className={classes.navWrap}>
            <li className={classes.navItem}>
              <Link className={classes.navLink}>About</Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/documentation" className={classes.navLink}>
                Documentation
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link to="/demo" className={classes.navLink}>
                Demo
              </Link>
            </li>
          </ul>
        </nav>

        <div className={classes.headerText}>
          <Typography variant="h1" component="h1">
            Sign The Future
          </Typography>
          <Typography variant="h6" component="h6">
            Translate the sign language using only your computer camera. All of
            that thanks to the Machine Learning and Computer Vision
            technologies.
          </Typography>
        </div>
      </header>

      <section className={classes.sectionTech}>
        <Typography color="primary" variant="h2" component="h2">
          Used Technologies
        </Typography>
        <div className={classes.technologies}>
          <motion.div
            variants={techAnimate}
            animate="up"
            className={classes.technologiesItem}
          >
            <img
              className={classes.technologiesImg}
              src={flask}
              alt="Flask logo."
            />
          </motion.div>
          <motion.div
            variants={techAnimate}
            animate="down"
            className={classes.technologiesItem}
          >
            <img
              className={classes.technologiesImg}
              src={keras}
              alt="Keras logo."
            />
          </motion.div>
          <motion.div
            variants={techAnimate}
            animate="up"
            className={classes.technologiesItem}
          >
            <img
              className={classes.technologiesImg}
              src={tensorFlow}
              alt="TensorFlow logo."
            />
          </motion.div>
          <motion.div
            variants={techAnimate}
            animate="down"
            className={classes.technologiesItem}
          >
            <img
              className={classes.technologiesImg}
              src={openCV}
              alt="OpenCV logo."
            />
          </motion.div>
          <motion.div
            variants={techAnimate}
            animate="up"
            className={classes.technologiesItem}
          >
            <img
              className={classes.technologiesImg}
              src={reactLogo}
              alt="React logo."
            />
          </motion.div>
          <motion.div
            variants={techAnimate}
            animate="down"
            className={classes.technologiesItem}
          >
            <img
              className={classes.technologiesImg}
              src={material}
              alt="Material logo."
            />
          </motion.div>
        </div>
      </section>

      <section className={classes.sectionHow}>
        <div className={classes.howText}>
          <Typography
            className={classes.howTextHeader}
            color="inherit"
            variant="h2"
            component="h2"
          >
            How it works?
          </Typography>
          <Typography color="inherit" variant="body1" component="body1">
            There are 125 000 deaf adults in the United Kingdom who use British
            Sign Language. Despite the fact that the number is so big, there is
            still not enough convenience for them. Computer Vision and Machine
            Learning are sectors of IT that are developing faster and faster
            every year. They improve our lives in various ways, even if we don't
            notice them in everyday life. Therefore, the question appears, as
            why won't we use those technologies to help people in need? The aim
            of this project is to develop a web-based application that will in
            real-time translate BSL signs recorded by a computer camera to
            English. With powerful libraries like TensorFlow, Keras and OpenCV
            and thousands of images, the model for multiple signs was created.
            For backend development, micro-framework Flask and for frontend
            ReactJS was used.
          </Typography>
        </div>
      </section>

      <footer className={classes.footer}>
        <div className={classes.socials}>
          <div className={classes.socialItem}>
            <a href="https://www.instagram.com/code.with.stan">
              <InstagramIcon fontSize="large" />
            </a>
          </div>
          <div className={classes.socialItem}>
            <a href="https://github.com/spolichnowski">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <div className={classes.socialItem}>
            <a href="https://www.linkedin.com/in/stanislaw-polichnowski-337b27168/">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>

        <div className={classes.footerBtns}>
          <a href="https://www.spolichnowski.pl/">
            <Button size="large" variant="outlined" color="secondary">
              MY PORTFOLIO
            </Button>
          </a>
        </div>
        <div className={classes.footerCaption}>
          <Typography align="center" variant="caption" component="caption">
            Created by Stanislaw Polichnowski &copy; 2021
          </Typography>
        </div>
      </footer>
    </div>
  );
}

export default App;
