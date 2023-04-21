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

const data = {
  labels: [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [
        46, 56, 75, 90, 88, 87, 83, 81, 81, 80, 74, 63, 52, 42, 56, 54, 43, 23,
        78, 71, 65, 60, 54, 58, 53, 48, 46, 41, 36, 30, 29, 27, 33, 44, 55, 66,
        77, 65, 54, 77, 88, 75, 90, 88, 87, 83, 81, 81, 80, 74, 60, 50, 49, 43,
        36, 39, 44, 55, 59, 61, 65, 69, 76, 63, 70, 77, 83, 89, 90, 89, 85, 83,
        81, 79, 78, 71, 69, 65, 63, 61, 58, 56, 51, 40, 47, 50, 60, 49, 38, 44,
        50, 66, 70, 80, 90, 88, 84, 70,
      ],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

// Line.register(CategoryScale);

const ReactChart = () => {
  return (
    <Container>
      <h1>React-Chart-2 100개 data</h1>
      <Line data={data} />
    </Container>
  );
};

export default ReactChart;

const Container = styled.div`
  width: auto;
  margin-top: 100px;
`;
