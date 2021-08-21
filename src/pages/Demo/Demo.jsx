import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import useStyles from "./style.js";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  Fab,
  FormControl,
  IconButton,
  InputLabel,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import BackspaceIcon from "@material-ui/icons/Backspace";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";

const Demo = () => {
  const containerRef = useRef(null);
  const idleTimer = useRef(null);
  const [openDialog, setOpenDialog] = useState(true);
  const [state, setState] = useState(false);
  const [prediction, setPrediction] = useState("");
  const [resolution, setResolution] = useState("640x360");
  const [model, setModel] = useState("0");
  const [styleRes, setStyleRes] = useState({ width: "640px", height: "360px" });
  const [open, setOpen] = useState(false);
  const classes = useStyles(styleRes);

  const handleResolutionChange = (e) => {
    setResolution(e.target.value);
    setStyleRes({
      ...styleRes,
      width: e.target.value.split("x")[0] + "px",
      height: e.target.value.split("x")[1] + "px",
    });
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
    setStyleRes({
      ...styleRes,
      width: e.target.value,
      height: e.target.value,
    });
  };

  const addUser = useCallback(() => {
    fetch("http://0.0.0.0:5000/add_user")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const predict = useCallback(() => {
    fetch(`http://0.0.0.0:5000/predict`)
      .then((res) => res.json())
      .then((result) => {
        setPrediction(result.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={classes.demoContainer} ref={containerRef}>
      <IdleTimer
        ref={idleTimer}
        timeout={5 * 1000 * 60}
        onIdle={() => setOpenDialog(true)}
      >
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
              15 minutes session will start now!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenDialog(false);
                addUser();
              }}
              color="primary"
            >
              Confirm
            </Button>
            <Button component={Link} to="/" color="primary">
              Go Back
            </Button>
          </DialogActions>
        </Dialog>

        <div className={classes.goBackBtn}>
          <Button
            component={Link}
            to={"/"}
            variant="contained"
            color="primary"
            startIcon={<BackspaceIcon />}
          >
            GO BACK
          </Button>
        </div>
        <div className={classes.predictBtn}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              setTimeout(() => {
                predict();
              }, 3000)
            }
            color="primary"
          >
            PREDICT
          </Button>
        </div>
        <Fab
          className={classes.settingsIcon}
          color="secondary"
          aria-label="settings"
          onClick={() => setOpen((prev) => !prev)}
        >
          <SettingsIcon />
        </Fab>
        {open && (
          <motion.div
            initial={{ x: 700 }}
            drag
            dragMomentum={false}
            dragConstraints={containerRef}
            mirrored={true}
          >
            <Card className={classes.settings} elevation={3}>
              <CardHeader
                action={
                  <IconButton
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="settings"
                  >
                    <CloseIcon />
                  </IconButton>
                }
                title="Settings"
              />
              <CardContent className={classes.settingsContent}>
                <FormControl className={classes.cardItem}>
                  <InputLabel id="resolutionSelectLabel">Resolution</InputLabel>
                  <Select
                    labelId="resolutionSelectLabel"
                    id="resolutionSelect"
                    value={resolution}
                    onChange={handleResolutionChange}
                    label="Resolution"
                  >
                    <MenuItem value={"1920x1080"}>1920x1080</MenuItem>
                    <MenuItem value={"1366x768"}>1366x768</MenuItem>
                    <MenuItem value={"1440x900"}>1440x900</MenuItem>
                    <MenuItem value={"1280×720"}>1280×720 </MenuItem>
                    <MenuItem value={"640x360"}>640x360</MenuItem>
                    <MenuItem value={"320x180"}>320x180</MenuItem>
                  </Select>
                </FormControl>

                <FormControl className={classes.cardItem}>
                  <InputLabel id="modelSelectLabel">Model Type</InputLabel>
                  <Select
                    labelId="modelSelectLabel"
                    id="modelSelect"
                    value={model}
                    onChange={handleModelChange}
                    label="Model"
                  >
                    <MenuItem value={"0"}>Default</MenuItem>
                    <MenuItem value={"1"}>
                      Model from Hand detection data
                    </MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {state && (
          <motion.img
            className={classes.videoContainer}
            initial={{ x: 120 }}
            whileTap={{ scale: 1.1 }}
            drag
            dragMomentum={false}
            dragConstraints={containerRef}
            mirrored={true}
            src={"http://0.0.0.0:5000/video_page/" + resolution}
            alt="Video"
          />
        )}

        {state && (
          <motion.div
            initial={{ x: 160 }}
            whileTap={{ scale: 1.1 }}
            drag
            dragMomentum={false}
            dragConstraints={containerRef}
            mirrored={true}
          >
            <Card className={classes.card}>
              <CardContent>
                <Typography color="textSecondary">Translation</Typography>
                <Typography variant="h5" component="h2">
                  {prediction}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className={classes.demoButtonContainer}>
          <motion.button
            className={classes.demoButton}
            onClick={() => setState(!state)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            {state ? "STOP" : "START"}
          </motion.button>
        </div>
      </IdleTimer>
    </div>
  );
};

export default Demo;
