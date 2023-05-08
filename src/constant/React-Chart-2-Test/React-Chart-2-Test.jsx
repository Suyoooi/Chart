import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

//y축 데이터 생성
const arr = [];
const secondArray = [];
const thirdArray = [];

for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
  console.log(arr);
}
for (let i = 0; i < 100; i++) {
  secondArray.push(Math.floor(Math.random() * 100) + 1);
}
for (let i = 0; i < 100; i++) {
  thirdArray.push(Math.floor(Math.random() * 100) + 1);
}
//x축 데이터 생성
var array = [];
for (var i = 0; i < 100; i++) {
  array.push("test");
}

const data = {
  labels: array,
  datasets: [
    {
      label: "First data",
      data: arr,
      fill: true,
      backgroundColor: "rgba(195, 223, 143, 0.2)",
      borderColor: "#c4e9a7",
    },
    {
      label: "second Data",
      data: secondArray,
      fill: true,
      backgroundColor: "rgba(229, 204, 236, 0.2)",
      borderColor: "#a594ce",
    },
    {
      label: "Third Data",
      data: thirdArray,
      fill: true,
      backgroundColor: "rgba(218, 181, 199, 0.2)",
      borderColor: "#f3aed9",
    },
  ],
};

const ReactChartTest = () => {
  return (
    <Container>
      <h1>React-Chart-2 data</h1>
      <p>x축 label</p>
      <Line data={data} />
    </Container>
  );
};

export default ReactChartTest;

const Container = styled.div`
  width: 1000px;
  height: 700px;
  margin-top: 100px;
`;
