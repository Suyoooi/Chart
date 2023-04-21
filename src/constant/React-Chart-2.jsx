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
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

// Line.register(CategoryScale);

const ReactChart = () => {
  return (
    <Container>
      <h1>React-Chart-2</h1>
      <Line data={data} />
    </Container>
  );
};

export default ReactChart;

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
  margin-top: 300px;
`;
