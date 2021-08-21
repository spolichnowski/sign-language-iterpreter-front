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

const Evaluation = () => {
  const f1Score = [
    {
      x: "First Model",
      y: 0.979792,
    },
    {
      x: "Second Model",
      y: 0.989878202,
    },
    {
      x: "Third Model",
      y: 0.860325661,
    },
    {
      x: "Fourth Model",
      y: 0.814978545,
    },
  ];
  const recall = [
    {
      x: "First Model",
      y: 0.979811575,
    },
    {
      x: "Second Model",
      y: 0.989847716,
    },
    {
      x: "Third Model",
      y: 0.860325661,
    },

    {
      x: "Fourth Model",
      y: 0.816470588,
    },
  ];
  const precision = [
    {
      x: "First Model",
      y: 0.980281473,
    },
    {
      x: "Second Model",
      y: 0.990292482,
    },

    {
      x: "Third Model",
      y: 0.860182371,
    },

    {
      x: "Fourth Model",
      y: 0.822278956,
    },
  ];

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Paper elevation={3}>
        <Box p={3}>
          <XYPlot xType="ordinal" width={500} height={400}>
            <HorizontalGridLines />
            <YAxis />
            <XAxis />
            <VerticalBarSeriesCanvas data={f1Score} style={{}} />
            <VerticalBarSeriesCanvas data={recall} style={{}} />
            <VerticalBarSeriesCanvas data={precision} style={{}} />
          </XYPlot>
          <div style={{ textAlign: "center" }}>
            <DiscreteColorLegend
              colors={["#125C77", "#19CDD7", "#223F9A"]}
              items={["F1 Score", "Recall", "Precision"]}
              orientation="horizontal"
            />
          </div>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Evaluation;

// {[
//   {
//     x: 0,
//     y: 0.979792,
//   },
//   {
//     x: 1,
//     y: 0.979811575,
//   },
//   {
//     x: 2,
//     y: 0.980281473,
//   },
//   {
//     x: 4,
//     y: 0.989878202,
//   },
//   {
//     x: 5,
//     y: 0.989847716,
//   },
//   {
//     x: 6,
//     y: 0.990292482,
//   },
//   {
//     x: 8,
//     y: 0.860325661,
//   },
//   {
//     x: 9,
//     y: 0.860182371,
//   },
//   {
//     x: 10,
//     y: 0.862530901,
//   },
//   {
//     x: 12,
//     y: 0.814978545,
//   },
//   {
//     x: 13,
//     y: 0.816470588,
//   },
//   {
//     x: 14,
//     y: 0.822278956,
//   },
// ]}
