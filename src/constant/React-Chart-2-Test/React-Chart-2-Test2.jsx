import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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
      label: "My First Dataset",
      data: arr,
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgb(214, 171, 189)",
      tension: 0.1,
    },
  ],
};

// Line.register(CategoryScale);

const ReactChartTest2 = () => {
  return (
    <Container>
      <h1>React-Chart-2 10000개 data</h1>
      <p>x축 label 63 개</p>
      <Line data={data} />
    </Container>
  );
};

export default ReactChartTest2;

const Container = styled.div`
  width: 2000px;
  height: 800px;
  margin-top: 100px;
  margin-bottom: 200px;
`;
