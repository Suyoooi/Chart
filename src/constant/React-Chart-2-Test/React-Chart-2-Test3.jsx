import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

//y축 데이터 생성
const arr = [];
for (let i = 0; i < 3000; i++) {
  arr.push(Math.floor(Math.random() * 100) + 1);
  console.log(arr);
}
//x축 데이터 생성
var array = [];
for (var i = 0; i < 3000; i++) {
  array.push("test");
}
console.log(array);

const data = {
  labels: array,
  datasets: [
    {
      label: "First dataset",
      data: arr,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#d88660",
    },
  ],
};

const ReactChartTest3 = () => {
  return (
    <Container>
      <h1>React-Chart-2 3000개 data</h1>
      <p>x축 label 63 개</p>
      <Line data={data} />
    </Container>
  );
};

export default ReactChartTest3;

const Container = styled.div`
  width: auto;
  margin-top: 100px;
`;
