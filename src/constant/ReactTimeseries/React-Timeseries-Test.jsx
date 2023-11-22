import React from "react";

import { Index, TimeSeries } from "pondjs";
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
} from "react-timeseries-charts";

class ReactTimeSeriesTest extends React.PureComponent {
  render() {
    const series = new TimeSeries({
      columns: ["index", "created", "processed"],
      name: "purge_count",
      //   points: data.map(([d, value]) => [
      //     Index.getIndexString("1h", new Date(d)),
      //     value,
      //   ]),
    });
    return (
      <ChartContainer timeRange={series.timerange()} width={800}>
        <ChartRow height="200">
          <YAxis
            id="axis1"
            label="AUD"
            min={0.5}
            max={1.5}
            width="60"
            type="linear"
            format="$,.2f"
          />
          <Charts>
            <LineChart axis="axis1" series={series} column={["aud"]} />
            <TimeMarker
              axis="axis1"
              time={powerPeakTime}
              infoStyle={{ line: { strokeWidth: "2px", stroke: "#83C2FC" } }}
              infoValues="Peak power"
            />
            {/* <LineChart axis="axis2" series={series2} column={["euro"]} /> */}
          </Charts>
          <YAxis
            id="axis2"
            label="Euro"
            min={0.5}
            max={1.5}
            width="80"
            type="linear"
            format="$,.2f"
          />
        </ChartRow>
      </ChartContainer>
    );
  }
}
