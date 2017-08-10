import React from 'react';

export default class Guess extends React.Component {
	
	constructor(props) {
		super(props);
	}

	onSubmit(event) {
		event.preventDefault();
		const number = this.numberInput.value;
        if (number && this.props.onAdd) {
            this.props.onAdd(number);
        }
        this.numberInput.value = '';
	}

	render (){
		return(
		<form className="guess-form" onSubmit={(e) => this.onSubmit(e)}>
			<label htmlFor="guess">Enter guess:</label>
			<input type="number" id="guess" ref={input => this.numberInput = input}/>
			<button>Submit Guess</button> 
		</form>
		);
	}
}