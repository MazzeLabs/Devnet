import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

type LineChartProps = {
  chartData: any;
  chartOptions: any;
};

const LineChart = ({ chartData, chartOptions }: LineChartProps) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    setData(chartData);
    setOptions(chartOptions);
  }, [chartData, chartOptions]);

  return (
    <>
      <ReactApexChart
        options={options}
        series={data}
        type='line'
        width='100%'
        // height='100%'
      />
    </>
  );
};

export default LineChart;