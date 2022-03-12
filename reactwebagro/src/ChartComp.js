import CanvasJSReact from './canvasjs.react';
import {InitSocketApi,SubtoSocket, UnSubFromSocket} from './BackendConnect'
import { get_obj } from './SharedVariables';
import {Navigate} from 'react-router-dom'
// import { browserHistory } from 'react-router-dom';
import { createBrowserHistory as browserHistory, History } from 'history' 
import ErrorCheck from './ErrorBoundComp'

var sharedVars=require("./SharedVariables")
var React = require('react');
var Component = React.Component;


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints.
var dps=new Array()
dps.length=100
dps.fill({x:1,y:0})
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 1000;

class ChartApp extends Component {
	constructor(props) {
		super(props);
		this.state=({lineColor:"green"})
		this.updateChart = this.updateChart.bind(this);
		this.updateChartFake=this.updateChartFake.bind(this);
		console.log("Cur_objsis  "+sharedVars.get_obj())
		// this.current_val=0
		this.state={current_val:0}
		this.prevColor="blue"
		this.styleObj={backgroundColor:"lightblue"}

		// InitSocketApi()
		// SubtoSocket(this.updateChart)
	}
	componentDidMount=()=>{
		InitSocketApi(sharedVars.get_obj())
		SubtoSocket(this.updateChart)
		this.backListener = browserHistory().listen(location => {
            if (location.action === "POP") {
				UnSubFromSocket(this.updateChart)
				console.log("UnSubbed!!")
            }
        });

		  // below lines can be removed becuase URLS changes automatically use
		  // the INITSocket method
		// Comment the Below line inproduction!!
		// if(get_obj()[0]=="D")
		this.time_id=setInterval(this.updateChartFake, 1000);
	}
	componentWillUnmount=()=>{
		// clearInterval(this.time_id)
		// resetting dps array
		dps.length=100
		dps.fill({x:1,y:0})
		UnSubFromSocket(this.updateChart)
		console.log("Unmount called")
	}
	updateChartFake=()=>{
		yVal = Math.round(5 + Math.random() *(-5-5));
		this.setState({current_val:yVal})
		let lastVal=dps[dps.length-1].y
		console.log("plotting point y: "+yVal+" lastY: "+lastVal)
		
		if(lastVal>0&&yVal<=0){
			dps.push({x: xVal-1,y: 0,lineColor:"red"});
			dps.push({x: xVal,y: yVal,lineColor:"green"});
			this.prevColor="green"
			// xVal++;
		}
		else if(lastVal<0&&yVal>=0){
			dps.push({x: xVal-1,y: 0,lineColor:"green"});
			dps.push({x: xVal,y: yVal,lineColor:"red"});
			this.prevColor="red";
		}
		else{
			console.log("Blue  ffor "+lastVal+" "+yVal)
		dps.push({x: xVal,y: yVal,lineColor:this.prevColor});
		}
		xVal++;
		if (dps.length >  100 ) {
			dps.shift();
		}
		this.chart.render();
	}
	updateChart=(data)=>{
		console.log(data)
		yVal = data.value
		this.setState({current_val:yVal})
		// xVal=new Date().getMinutes()+":"+new Date().getSeconds()
		// dps.push({x: xVal,y: yVal});
		dps.push({x: xVal,y: yVal,lineColor:yVal>0?"red":"green"});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
	}
	render() {
		const options = {
			
			title :{
				text: "Live Land Level from :"+get_obj()
			},
			data: [{
				type: "line",
				// lineColor: this.state.lineColor,
				dataPoints : dps
			}],
			axisY:{
				maximum:15,
				minimum:-15,
				interval:15
			},
			axisX:{
				interval:20
			}
		}
		// redirecting to device view page if url is directly accessed
		return (
		<ErrorCheck>
		<div >
			{get_obj()===null&&<Navigate to="/listTractors"/>}
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			<h3 className="d-flex justify-content-center" style={{"padding":"50px"}}>Current value :  {this.state.current_val} V</h3>
		</div>
		</ErrorCheck>
		);
	}
}
// if(dps[-1]<0&&yVal>0){
// 	dps.push({x: xVal-0.5,y:0,lineColor:"#24a57c"});
// 	dps.push({x: xVal,y:yVal,lineColor:yVal>0?"#ad3d51":"#24a57c"});
// }else{
// 	dps.push({x: xVal-0.5,y:0,lineColor:"#ad3d51"});
// 	dps.push({x: xVal,y:yVal,lineColor:"#24a57c"});
// }
export default ChartApp;
