import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

const D3ChartMulti = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const margin = { top: 10, right: 10, bottom: 100, left: 60 };
      const width = 1200 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      const svg = d3
        .select(ref.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      const categories = Array.from(new Set(data.map((d) => d.category)));

      const x = d3
        .scalePoint()
        .domain(data.map((d) => d.date))
        .range([0, width]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value) ?? 0])
        .range([height, 0]);

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const line = d3
        .line()
        .x((d) => x(d.date) ?? 0)
        .y((d) => y(d.values))
        .curve(d3.curveMonotoneX);

      // x 축
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-0.5em")
        .attr("dy", "0.5em")
        .attr("transform", "rotate(-45)")
        .style("font-size", "12px");

      // y 축
      svg
        .append("g")
        .call(d3.axisLeft(y))
        .selectAll("line")
        .style("stroke-dasharray", "2,2"); // y 축 눈금 선 스타일 변경

      // 툴팁
      const tooltip = d3
        .select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("background", "#fff")
        .style("padding", "10px")
        .style("border", "1px solid #ddd")
        .style("border-radius", "5px")
        .style("font-family", "sans-serif")
        .style("font-size", "14px")
        .style("box-shadow", "0 0 10px rgba(0, 0, 0, 0.1)");

      // 범례 추가
      const legend = svg
        .selectAll(".legend")
        .data(categories)
        .enter()
        .append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) {
          return "translate(0," + i * 20 + ")";
        });

      legend
        .append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

      legend
        .append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function (d) {
          return d;
        });

      categories.forEach((category, i) => {
        const path = svg
          .append("path")
          .datum(data.filter((d) => d.category === category))
          .attr("fill", "none")
          .attr("stroke", color(i.toString()))
          .attr("stroke-width", 2)
          .attr("d", line);

        // Add dots on the line
        const dots = svg
          .selectAll(".dot")
          .data(data.filter((d) => d.category === category))
          .enter()
          .append("circle")
          .attr("class", "dot")
          .attr("fill", color(i.toString())) // Match the line color
          .attr("stroke", color(i.toString()))
          .attr("stroke-width", 2)
          .attr("cx", (d) => x(d.date) ?? 0)
          .attr("cy", (d) => y(d.value))
          .attr("r", 2);

        // Tooltip interactions for dots
        dots.on("mouseover", function (event, d) {
          tooltip.style("visibility", "visible");
          const tooltipContent = data
            .filter((point) => point.category === category)
            .map(
              (point) => `<div>Date: ${point.date}, Value: ${point.value}</div>`
            )
            .join("");
          tooltip.html(`<div>Category: ${category}</div>${tooltipContent}`);
        });
        dots.on("mouseover", function (event, d) {
          tooltip.style("visibility", "visible");
          const tooltipContent = data
            .filter((point) => point.category === category)
            .map(
              (point) => `<div>Date: ${point.date}, Value: ${point.value}</div>`
            )
            .join("");
          tooltip.html(`<div>Category: ${category}</div>${tooltipContent}`);
        });

        dots.on("mousemove", function (event) {
          tooltip
            .style("top", event.pageY - 10 + "px")
            .style("left", event.pageX + 10 + "px");
        });

        dots.on("mouseout", function () {
          tooltip.style("visibility", "hidden");
        });
      });
    }
  }, [data]);

  return <svg ref={ref} />;
};

export default D3ChartMulti;
