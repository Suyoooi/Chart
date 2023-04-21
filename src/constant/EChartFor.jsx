import React, { useEffect, useState } from "react";
import ECharts, { EChartsReactProps } from "echarts-for-react";
import styled from "styled-components";

const Echartfor = () => {
  const [options, setOptions] = useState({
    xAxis: {
      type: "category",
      data: ["test", "test", "test", "test", "test", "test", "test", "test"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 98, 147, 260, 400],
        type: "line",
      },
    ],
  });

  return (
    <div>
      <Container>
        <h1>EChart.js</h1>
        <ECharts
          option={options}
          opts={{
            renderer: "svg",
            width: "auto",
            height: "600",
            marginBottom: "200",
          }}
        />
      </Container>
    </div>
  );
};

export default Echartfor;

const Container = styled.div`
  margin-top: 100px;
`;
