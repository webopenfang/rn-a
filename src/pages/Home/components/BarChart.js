import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import PropTypes from 'prop-types'; // 引入 PropTypes

const BarChart = ({title}) => {
  const chartRef = useRef(null);
  useEffect(() => {
    // 获取dom节点
    const chartDom = chartRef.current;
    // 实例化对象
    const myChart = echarts.init(chartDom);

    // 图表参数
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };

    // 使用图标参数渲染图表
    option && myChart.setOption(option);
  }, []);

  return <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>;
};
// 定义 props 类型及必填项
BarChart.propTypes = {
    title: PropTypes.string.isRequired,
  };

export default BarChart;
