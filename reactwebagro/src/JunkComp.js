import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import RealtimeLineChart from "./RealTimeChartComp";
import {InitSocketApi,SubtoSocket, UnSubFromSocket} from './BackendConnect'
import { get_obj } from './SharedVariables';

const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 500;
const ADDING_DATA_RATIO = 0.8;

export default () => {
  const nameList = ["a"];
  const defaultDataList = nameList.map(name => ({
    name: name,
    data: []
  }));
  const [dataList, setDataList] = React.useState(defaultDataList);
  const [forcOnce,setF]=React.useState(null);
  const addDataRandomly = data => {
    if (Math.random() < 1 - ADDING_DATA_RATIO) {
      return data;
    }
    return [
      ...data,
      {
        x: new Date(),
        y: data.length * Math.random()
      }
    ];
  };
  
  const updateChart=data => {
    console.log("Update Ch"+JSON.stringify(data))
    console.log(dataList[0])
    let newData={name:"a" ,data:{x:new Date().getTime() ,y:data.value}}
    console.log([...dataList])
    setDataList(newData);
    console.log("newDatalist"+JSON.stringify(dataList))
  }
  


  React.useEffect(() => {
    console.log("caled only one")
    InitSocketApi("Tractor1")
    SubtoSocket(updateChart)
    // return () => clearInterval(interval);
  },[forcOnce]);

  return (
    <div height="500px" width="500px">
      <RealtimeLineChart
        dataList={dataList}
        range={TIME_RANGE_IN_MILLISECONDS}
      />
    </div>
  );
};


// export default class JunkComp extends React.Component {
//   constructor(props){
//     super(props)
//     const nameList = ["a"];
//     const defaultDataList = nameList.map(name => ({
//       name: name,
//       data: []
//     }));
//     this.state={dataList:defaultDataList}
      
//     InitSocketApi("Tractor1")
//     SubtoSocket(this.updateChart)
//   }
//   addDataRandomly = data => {
//     if (Math.random() < 1 - ADDING_DATA_RATIO) {
//       return data;
//     }
//     return [
//       ...data,
//       {
//         x: new Date(),
//         y: data.length * Math.random()
//       }
//     ];
//   };
//   updateChart=data => {
//     console.log("Update Ch"+JSON.stringify(data))
//     console.log(this.state.dataList[0].data)
//     this.setState({dataList:this.state.dataList.map(val => {
//       return {
//         name: val.name,
//         data: [...this.state.dataList[0].data,data.value]
//       };
//     })})
//   }
  
//   render() {
//     return (
//           <div height="500px" width="500px">
//       <RealtimeLineChart
//         dataList={this.state.dataList}
//         range={TIME_RANGE_IN_MILLISECONDS}
//       />
//     </div>
//     )
//   }
// }

