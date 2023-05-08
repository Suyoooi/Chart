import "./App.css";
import Main from "./constant/Main";
import ReactChart from "./constant/React-Chart-2-Test/React-Chart-2";
import ReactChartTest from "./constant/React-Chart-2-Test/React-Chart-2-Test";
import ReactChartTest2 from "./constant/React-Chart-2-Test/React-Chart-2-Test2";
import ReactChartTest3 from "./constant/React-Chart-2-Test/React-Chart-2-Test3";

function App() {
  return (
    <div className="App">
      <Main />
      <ReactChart />
      <ReactChartTest />
      {/* <ReactChartTest3 />
      <ReactChartTest2 /> */}
    </div>
  );
}

export default App;
