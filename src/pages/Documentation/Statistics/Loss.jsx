import React from "react";
import "react-vis/dist/style.css";
import { Box, Paper, Grid } from "@material-ui/core";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend,
} from "react-vis";

const Loss = () => {
  const train = [
    { x: "First Model", y: 0.0821 },
    { x: "Second Model", y: 0.07104 },
    { x: "Third Model", y: 0.09425 },
    { x: "Fourth Model", y: 0.1015 },
  ];

  const test = [
    { x: "First Model", y: 0.511 },
    { x: "Second Model", y: 0.1532 },
    { x: "Third Model", y: 0.9112 },
    { x: "Fourth Model", y: 0.1676 },
  ];

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Paper elevation={3}>
        <Box p={3}>
          <XYPlot xType="ordinal" width={500} height={400}>
            <HorizontalGridLines />
            <YAxis />
            <XAxis />
            <VerticalBarSeriesCanvas data={train} style={{}} />
            <VerticalBarSeriesCanvas data={test} style={{}} />
          </XYPlot>
          <div style={{ textAlign: "center" }}>
            <DiscreteColorLegend
              colors={["#125C77", "#19CDD7"]}
              items={["Training Data", "Validation Data"]}
              orientation="horizontal"
            />
          </div>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Loss;

// {[
//   {
//     x: 0,
//     y: 0.0821,
//   },
//   {
//     x: 1,
//     y: 0.511,
//   },
//   {
//     x: 3,
//     y: 0.07104,
//   },
//   {
//     x: 4,
//     y: 0.1532,
//   },
//   {
//     x: 6,
//     y: 0.09425,
//   },
//   {
//     x: 7,
//     y: 0.9112,
//   },
//   {
//     x: 9,
//     y: 0.1015,
//   },
//   {
//     x: 10,
//     y: 0.1676,
//   },
// ]}
