// line-charts.js
import "echart-theme.js";
import ECharts from "echarts-for-react";

return (
  <ECharts
    option={options}
    theme="myTheme" // 적용할 테마 이름
    opts={{ renderer: "svg", width: "auto", height: "100%" }}
  />
);
