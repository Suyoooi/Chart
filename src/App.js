import "./App.css";
import Echartfor from "./constant/EChartFor";
import D3Chart from "./constant/D3Chart";
import Main from "./constant/Main";
import ReactChart from "./constant/React-Chart-2";
import ReactChartTest from "./constant/React-Chart-2-Test";

function App() {
  return (
    <div className="App">
      <Main />
      <Echartfor />
      <Grafana />
      <ReactChart />
      <ReactChartTest />
      <D3Chart />
    </div>
  );
}

export default App;
