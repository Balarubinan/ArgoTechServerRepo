// import React, { Component } from 'react'

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
console.log(Object.keys(data))

// export function App() {
//   return <Line options={options} data={data} />;
// }

// pass title and dataset name and initData
export default class Chart2 extends React.Component {
    constructor(props){
        super(props)
        this.chart=React.createRef()
        this.options = {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text:this.props.title,
              },
            },
        }
        this.labels=Array.from('0123456789')
        this.data= {
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: this.props.initData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
        };
        this.chart.current=<Line options={this.options} data={this.data} ref={this.chart} />
    }
    render() {
        return (
            <Line options={this.options} data={this.data} ref={this.chart} />
        )
    }
}
