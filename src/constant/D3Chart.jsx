import React, { useEffect } from "react";
import * as d3 from "d3";
import styled from "styled-components";

const D3Chart = () => {
  useEffect(() => {
    makeGraph();
  }, []);

  const makeGraph = () => {
    // setting canvas
    const width = 1500;
    const height = 800;
    const margin = { top: 40, left: 40, bottom: 40, right: 40 };

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // data
    const data = [
      { name: "1", value: 34 },
      { name: "2", value: 15 },
      { name: "3", value: 60 },
      { name: "4", value: 34 },
      { name: "5", value: 15 },
      { name: "6", value: 60 },
      { name: "7", value: 34 },
      { name: "8", value: 15 },
      { name: "9", value: 60 },
      { name: "10", value: 34 },
      { name: "11", value: 15 },
      { name: "12", value: 60 },
    ];

    // setting axis
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g) => {
      return g
        .attr("transform", `translate(0, ${height})`)
        .attr("transform", `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));
    };

    const yAxis = (g) =>
      g
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(
          d3
            .axisLeft(y)
            .tickValues([0, 20, 40, 60, 80, 100, 120])
            .tickSize(-width)
        )
        .call((g) => g.select(".domain").remove())
        .attr("class", "grid");

    // apply axis to canvas
    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    // vertical bar chart
    // svg
    //   .append("g")
    //   .selectAll("rect")
    //   .data(data)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (data) => x(data.month) + x.bandwidth() / 2 - 10)
    //   .attr("y", (data) => y(data.value))
    //   .attr("width", 20)
    //   .attr("height", (data) => y(0) - y(data.value))
    //   .attr("class", "bar-chart")
    //   .attr("fill", (data) => data.color);

    //line chart
    const line = d3
      .line()
      .x((d) => x(d.name) + x.bandwidth() / 2)
      .y((d) => y(d.value));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1)
      .attr("d", line);

    // add text
    svg
      .append("g")
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.value)
      .attr("x", (data) => x(data.name) + x.bandwidth() / 2)
      .attr("y", (data) => y(data.value) - 5)
      .attr("fill", "black")
      .attr("font-family", "Tahoma")
      .attr("font-size", "12px")
      .attr("text-anchor", "middle");
  };

  return (
    <>
      <Container>
        <h1>D3Chart</h1>
      </Container>
    </>
  );
};

export default D3Chart;

const Container = styled.div`
  /* width: 300vw; */
  /* max-width: 1000px; */
  margin-top: 300px;
`;
