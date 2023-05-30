import React, { useEffect, useState } from "react";
import { getData } from "../utils";
import Chart from './Chart';
import '../index.css';
import { TypeChooser } from "react-stockcharts/lib/helper";


class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

export default ChartComponent;

// class ChartComponent extends React.Component {
// 	componentDidMount() {
// 		getData().then(data => {
// 			this.setState({ data })
// 		})
// 	}
// 	render() {
// 		if (this.state == null) {
// 			return <div>Loading...</div>
// 		}
// 		return (
// 			<TypeChooser>
// 				{type => <Chart type={type} data={this.state.data} />}
// 			</TypeChooser>
// 		)
// 	}
// }
