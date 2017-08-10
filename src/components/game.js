import React from 'react';

import Guess from './guess';
import OutputText from './output-text';
import './game.css';


export default class Game extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			history: [],
			gameNumber : this.getRandomIntInclusive(1,100),
			feedback: ''
		}
	}

	addToHistory(guess) {
		this.setState({
			history: [...this.state.history,guess]
		});
		this.generateFeedback(this.state.gameNumber, guess);
	}

	generateFeedback(number, guess) {
		const diff = Math.abs(number-guess);
		if(diff === 0) {
			this.setState({
				feedback: 'You guessed it right !!'
			});
		}
		else if(diff <= 10) {
			this.setState({
				feedback: 'Hot'
			});
		}
		else if(diff>10 && diff<15) {
			this.setState({
				feedback: 'Kinda Hot'
			});
		}
		else {
			this.setState({
				feedback:'Cold'
			});
		}
	}

	getRandomIntInclusive(min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min + 1)) + min;  
	}

	render() {
		return (
			<div className="game">
				<OutputText text={this.state.feedback}/>
				<Guess onAdd={number => this.addToHistory(number)}/>
				<OutputText text={this.state.history.join(', ')}/>
			</div>
		);
	}
}