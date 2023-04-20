import React, { useRef, useEffect, useState } from "react";
import echarts from "echarts";

const Echart = () => {
  const chartRef = useRef(null);
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

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      chart.setOption(options);
    }
  }, [options, chartRef]);

  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default Echart;
