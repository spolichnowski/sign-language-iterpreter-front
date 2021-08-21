import { Box, Paper, Grid, Typography } from "@material-ui/core";
import c1 from "./graphs/CF1.png";
import c2 from "./graphs/CF2.png";
import c3 from "./graphs/CF3.png";
import c4 from "./graphs/CF4.png";

const ConfusionMatrices = () => {
  return (
    <Grid container direction="row" justify="center">
      <Box m={2} textAlign="center">
        <Paper elevation={3} style={{ paddingTop: "15px" }}>
          <Typography variant="h6" component="h6">
            FIRST MODEL
          </Typography>
          <Box
            p={3}
            style={{
              backgroundImage: `url(${c1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              width: "350px",
              margin: "20px",
              marginTop: "-20px",
            }}
          ></Box>
        </Paper>
      </Box>
      <Box m={2} textAlign="center">
        <Paper elevation={3} style={{ paddingTop: "15px" }}>
          <Typography variant="h6" component="h6">
            SECOND MODEL
          </Typography>
          <Box
            p={3}
            style={{
              backgroundImage: `url(${c2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              width: "350px",
              margin: "20px",
              marginTop: "-20px",
            }}
          ></Box>
        </Paper>
      </Box>
      <Box m={2} textAlign="center">
        <Paper elevation={3} style={{ paddingTop: "15px" }}>
          <Typography variant="h6" component="h6">
            THIRD MODEL
          </Typography>
          <Box
            p={3}
            style={{
              backgroundImage: `url(${c3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              width: "350px",
              margin: "20px",
              marginTop: "-20px",
            }}
          ></Box>
        </Paper>
      </Box>
      <Box m={2} textAlign="center">
        <Paper elevation={3} style={{ paddingTop: "15px" }}>
          <Typography variant="h6" component="h6">
            FOURTH MODEL
          </Typography>
          <Box
            p={3}
            style={{
              backgroundImage: `url(${c4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "350px",
              width: "350px",
              margin: "20px",
              marginTop: "-20px",
            }}
          ></Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default ConfusionMatrices;
