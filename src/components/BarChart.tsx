import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

type BarChartProps = {
    chartData: any;
    chartOptions: any;
};

export const BarChart = ({ chartData, chartOptions }: BarChartProps) => {
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
            type='bar'
            width='100%'
            // height='100%'
        />
    );
}