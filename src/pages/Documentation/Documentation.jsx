import { useState } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import Evaluation from "./Statistics/Evaluation.jsx";
import Accuracy from "./Statistics/Accuracy.jsx";
import Loss from "./Statistics/Loss.jsx";
import ConfusionMatrices from "./Statistics/ConfusionMatrices.jsx";

const Documentation = () => {
  const [tabNum, setTabNum] = useState(0);

  const handleChange = (event, tab) => {
    setTabNum(tab);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={tabNum}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Accuracy" />
          <Tab label="Loss" />
          <Tab label="Evaluation" />
          <Tab label="Confusion Matrices" />
        </Tabs>
      </AppBar>
      <div style={{ height: "90vh", display: "flex" }}>
        {
          {
            0: <Accuracy />,
            1: <Loss />,
            2: <Evaluation />,
            3: <ConfusionMatrices />,
          }[tabNum]
        }
      </div>
    </div>
  );
};

export default Documentation;
