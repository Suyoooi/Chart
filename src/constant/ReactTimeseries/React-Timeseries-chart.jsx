import React from "react";
import { TimeSeries, Index } from "pondjs";
import {
  Resizable,
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  BarChart,
  styler,
} from "react-timeseries-charts";
import { TIMESERIES_DATA } from "./data";

const ReactTimeseriesChart = () => {
  const series = new TimeSeries({
    name: "hilo_rainfall",
    columns: ["index", "precip"],
    points: TIMESERIES_DATA.map(({ date, value }) => [
      Index.getIndexString("1h", new Date(date)),
      value,
    ]),
  });

  const style = styler([{ key: "value", color: "steelblue", width: 2 }]);

  return (
    <Resizable>
      <ChartContainer timeRange={series.range()}>
        <ChartRow height="150">
          <YAxis
            id="rain"
            label="Rainfall (inches/hr)"
            min={0}
            max={24}
            format=".2f"
            width="70"
            type="linear"
          />
          <Charts>
            <BarChart
              axis="rain"
              style={style}
              spacing={1}
              columns={["precip"]}
              series={series}
              minBarHeight={1}
            />
          </Charts>
        </ChartRow>
      </ChartContainer>
    </Resizable>
  );
};

export default ReactTimeseriesChart;
