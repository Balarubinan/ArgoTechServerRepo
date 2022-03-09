import React from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";


// window.ApexCharts=ApexCharts
export default class JunkComp extends React.Component {
  constructor(props) {
    super(props);
    // this.state={
    //   dataArr:[10, 41, 35, 51, 49, 62, 69, 91, 148],
    //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    // }


    this.state = {
    
      series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
      },
    
    
    };
    setInterval(()=>this.changeValues(),1000)
  }

  changeValues(){
    console.log(this.state.series[0].data)
    let ps=this.state
    console.log(ps)
    ps.series[0].data.push(this.randomNum())
    // ps.series.data=ps.series.data.splice()
    ps.options.xaxis.categories.push("New Cat")
    this.setState({ps})
  }

  randomNum(){
    return Math.floor(Math.random()*100)
  }

  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>
    );
  }
}

// the animation changes ...but the thing is it only loads the changes on size change