import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";

const Echartfor = () => {
  const [options, setOptions] = useState({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  });

  return (
    <div>
      <h1>EChart.js</h1>
      <ECharts
        option={options}
        opts={{
          renderer: "svg",
          width: "auto",
          height: "500",
        }}
      />
    </div>
  );
};

export default Echartfor;
