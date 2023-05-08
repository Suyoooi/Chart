import { Component } from "react";
import ApexCharts from "react-apexcharts";

export default class ApexChart extends Component {
  constructor(props) {
    super(props);

    //y축 데이터 생성
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 100) + 1);
      console.log(arr);
    }
    const secondArr = [];
    for (let i = 0; i < 10; i++) {
      secondArr.push(Math.floor(Math.random() * 100) + 1);
      console.log(secondArr);
    }

    //x축 데이터 생성
    var array = [];
    for (var i = 0; i < 10; i++) {
      array.push("test");
    }
    console.log(array);

    this.state = {
      series: [
        {
          name: "Test Data 1",
          data: arr,
        },
        {
          name: "Test Data 2",
          data: secondArr,
        },
      ],

      options: {
        chart: {
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Apex Chart Testing . . .",
          align: "center",
        },
        grid: {
          row: {
            // takes an array which will be repeated on columns
            colors: ["#f3f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: array,
        },
      },
    };
  }
  render() {
    return (
      <ApexCharts
        options={this.state.options}
        series={this.state.series}
        typs="line"
        width={800}
        height={500}
      />
    );
  }
}
