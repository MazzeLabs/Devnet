import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

type AreaChartProps = {
  chartData: any;
  chartOptions: any;
};

const AreaChart = ({ chartData, chartOptions }: AreaChartProps) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    setData(chartData);
    setOptions(chartOptions);
  }, [chartData, chartOptions]);

  return (
    <ReactApexChart
      options={options}
      series={data}
      type='area'
      width='100%'
      height='100%'
    />
  );
};

export default AreaChart;