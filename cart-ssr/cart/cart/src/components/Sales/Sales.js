import React, {Component} from 'react';
import ChartistGraph from 'react-chartist';
import 'chartist/dist/chartist.min.css';
import Chartist from 'chartist';
import 'chartist-plugin-legend';
import 'chartist-plugin-tooltips';
import PropTypes from 'prop-types';
import './sales.css';
// Load the chart modules
/*import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
charts(fusioncharts)*/

export default class Sales extends Component{
	constructor(){
		super();
		//this.prepareChart = this.prepareChart.bind(this);
		this.prepareChartist = this.prepareChartist.bind(this);
		this.state = {data:[], chartConfig:{}};
	}
	componentWillMount(){
		const {importData} = this.props;
		importData();
		this.prepareChartist();
	}
	
	prepareChartist(){
		let plugins = [];
		const data = {
			...this.props.sales.chartist
		};
		if(typeof this.props.sales.chartist.legendNames!=undefined){
			plugins.push(
				Chartist.plugins.legend({
					legendNames : this.props.sales.chartist.legendNames
				})
			);
		}
		const options = {
			height:'350px',
			low: 0,
			high:100,
			showArea: true,
			plugins:plugins,
			axisY: {
				onlyInteger: true,
				type:Chartist.FixedScaleAxis,
				ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
				offset:20
			}
		}

		this.setState({
			chartConfig:{
				data:data,
				options:options,
				type:'Bar',
				/*listener:{
					draw:function(data){
						if(data.type === 'line' || data.type === 'area') {
							data.element.animate({
								d: {
									begin: 2000 * data.index,
									dur: 2000,
									from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
									to: data.path.clone().stringify(),
									easing: Chartist.Svg.Easing.easeOutQuint
								}
							});
						}
					}
				}*/
			}
		})
	}

	prepareFusionChart(){
		/*const myDataSource = {
		   	chart: {
		       	caption: "E-Shopper Sales Report",
		       	labeldisplay: "AUTO",
		       	subCaption: "Top 5 Brands of the year<br />(Hover on bars)",
		       	numberSuffix: "%",
		       	yaxismaxvalue: "100",
		       	xaxisname:"Months",
		       	yaxisname:"Profit (in %)",
		       	theme:"zune"
		   	},
		   	data:this.props.sales
		},
		chartConfig = {
		   	type: "column3d",
		   	width:"100%",
		   	dataFormat: "JSON",
		   	height: 400,
		   	dataSource: myDataSource
		};
		this.setState({chartConfig:chartConfig})*/
	}
	render(){
		return (
			<div className="container">
				<h2></h2>
				<ChartistGraph {...this.state.chartConfig} />
			</div>
		)
	}
}

Sales.propTypes = {
	importData : PropTypes.func,
	sales : PropTypes.shape({
			chartist : PropTypes.shape({
			labels: PropTypes.array,
			series : PropTypes.array,
			legendNames : PropTypes.array
		})	
	})
}