import React, { Component } from 'react';
import Day from './Day/day.js';
import Details from './Day/details.js';
import Card from './Day/card.js';

import Moment from 'react-moment';
var moment = require('moment');

export default class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: [2017, 11, 6],
			end: [2020, 2, 31],
			nextTrip: "2019-08-01",
			together: [
				{
					start: [2017, 11, 6],
					end: [2017, 11, 22],
				},
				{
					start: [2018, 5, 15],
					end: [2018, 6, 17],
				},
				{
					start: [2018, 10, 29],
					end: [2018, 11, 30],
				},
				{
					start: [2019, 7, 1],
					end: [2019, 8, 1],
				},
			],
			visit: "blueDay",
			apart: "greenDay",
			futureApart: "greyDay",

			card: true,
		}
	}

	showCard = () => {
		this.setState({card: true}, () => console.log("works!"));
	}

	todaysDate() {
		let date = [];
		date.push(moment().get('year'));
		date.push(moment().get('month'));
		date.push(moment().get('date'));
		console.log(date);
		return date;
	}

	daysDifference(start, end) {
		const date1 = moment(start);
		const date2 = moment(end);
		const difference = date2.diff(date1, 'days');
		return difference;
	}

	getIntervals(beginning, visits, end) {
		console.log("length of together array: " + visits.length);
		let intervals = [];
		let obj0 = {};
		obj0.days = this.daysDifference(beginning, visits[0].start);
		obj0.type = this.state.visit;
		intervals.push(obj0);
		let len = visits.length;
		for (let i = 0; i < len; i++) {
			let obj1 = {};
			let obj2 = {};
			obj1.days = this.daysDifference(visits[i].start, visits[i].end)
			obj1.type = this.state.visit;
			intervals.push(obj1);
			console.log("obj1: " + obj1.days);
			if (i !== len - 1) {
				obj2.days = this.daysDifference(visits[i].end, visits[i + 1].start) - 1;
				obj2.type = this.state.apart;
				console.log("obj2: " + obj2.days);
				intervals.push(obj2);
				console.log("Where the intervals at: " + intervals[i + 1].days);
			}
		}
		let obj3 = {};
		obj3.days = this.daysDifference(visits[len - 1].end, this.state.end);
		obj3.type = this.state.futureApart;
		intervals.push(obj3);
		for (let k = 0; k < intervals.length; k++) {
			console.log("INTERVAL " + k + ": " + intervals[k].days);
		}
		return intervals;
	}

	getDays(intervals) {
		const grid = [];
		const green = this.daysDifference(this.state.start, this.todaysDate());
		const total = this.daysDifference(this.state.start, this.state.end);
		let count = 0;
		for (let i = 0, len = intervals.length; i < len; i++ ) {
			console.log("we debugging yo: " + i);
			for (let j = 0; j < intervals[i].days; j++) {
				if (count >= green) {
					if (intervals[i].type === 'greenDay') {
						grid.push(<Day key={count} colour={this.state.futureApart} />);
					}
					else {
						grid.push(<Day key={count} colour={intervals[i].type} />);
					}
				}
				else {
					grid.push(<Day key={count} colour={intervals[i].type} />);
				}
				console.log("Day: " + count);
				count++;
			}
		}
		return grid;
	}

	render() {
		return (

			<div>
				{moment().format()}====
				{this.todaysDate()}=====
				{this.daysDifference(this.state.start, this.todaysDate(), 'days')}=====

				<div className="timeline">
					{
						this.getDays(this.getIntervals(this.state.start, this.state.together, this.state.end))
					}
					<Day colour={'redDay'}/>
				</div>
				<Details showCard={this.showCard}/>
				<Card showCard={this.state.card}/>
			</div>
		);
	}
}
