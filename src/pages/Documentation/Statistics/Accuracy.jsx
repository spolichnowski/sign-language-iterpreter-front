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

const Accuracy = () => {
  const green = [
    {
      x: "First Model",
      y: 0.9729,
    },
    {
      x: "Second Model",
      y: 0.9785,
    },
    {
      x: "Third Model",
      y: 0.9654,
    },
    {
      x: "Fourth Model",
      y: 0.9738,
    },
  ];
  const blue = [
    {
      x: "First Model",
      y: 0.9232,
    },
    {
      x: "Second Model",
      y: 0.9703,
    },
    {
      x: "Third Model",
      y: 0.8693,
    },

    {
      x: "Fourth Model",
      y: 0.9741,
    },
  ];
  const red = [
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
      y: 0.860182371,
    },

    {
      x: "Fourth Model",
      y: 0.816470588,
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
            <VerticalBarSeriesCanvas data={green} style={{}} />
            <VerticalBarSeriesCanvas data={blue} style={{}} />
            <VerticalBarSeriesCanvas data={red} style={{}} />
          </XYPlot>
          <div style={{ textAlign: "center" }}>
            <DiscreteColorLegend
              colors={["#125C77", "#19CDD7", "#223F9A"]}
              items={[
                "Training Data",
                "Validation Data",
                "Separate Evaluation",
              ]}
              orientation="horizontal"
            />
          </div>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Accuracy;
