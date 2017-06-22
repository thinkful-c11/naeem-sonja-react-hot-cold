import React from 'react';

import './guess-form.css';


export default class GuessForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            guess: ""
        }
    }

    render(){
        return (
            
            <form onSubmit={e => e.preventDefault()}> 
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required 
                    value={this.state.guess}
                onChange={ e => this.setState({guess: e.target.value})}  />  
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={ () => this.props.addGuesses(this.state.guess)} />
            </form>
        );
    }

};

