import React from "react";
import { Chart } from 'react-google-charts';

const data = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
];

const options = {
    title: 'My Daily Activities',
    is3D: true,
};

const ChartComponent = () => (
    <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
    />
);

export default ChartComponent;