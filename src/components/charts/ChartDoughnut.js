import React from "react";
import { Doughnut } from "react-chartjs-2";
function ChartDoughnut(props) {
  const data = {
    labels: [
      "Programmer",
      "Editor",
      "Receptionist",
      "Designer",
      "Web developer",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          props.data.numOfProgrammer,
          props.data.numOfEditor,
          props.data.numOfReceptionist,
          props.data.numOfDesigner,
          props.data.numOfWebDeveloper,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Doughnut data={data} />
    </>
  );
}

export default ChartDoughnut;
