import BrowserOnly from "@docusaurus/BrowserOnly";
import { Component } from "react";

function NewChart(props) {
  return (
    <BrowserOnly>
      {() => {
        const Chart = require("react-apexcharts").default;
        return <Chart {...props} />;
      }}
    </BrowserOnly>
  );
}

class ColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: this.props.dataType1 || "",
          data: this.props.data || [],
        },
        {
          name: this.props.dataType2 || "",
          data: this.props.secondaryData,
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "25%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        grid: {
          borderColor: "#2a2a36",
          clipMarkers: false,
          strokeDashArray: 4,
          yaxis: {
            lines: {
              show: true,
            },
          },
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        xaxis: {
          categories: ["Pine", "Fiber", "Express"],
        },
        yaxis: {
          title: {
            text: this.props.label,
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          theme: "dark",
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      },
      chartHeight: 450,
    };
  }

  render() {
    return (
      <NewChart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        style={{ width: "100%" }}
        height={this.state.chartHeight}
      />
    );
  }
}

export default ColumnChart;
