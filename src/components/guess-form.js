import React from 'react';

import './guess-form.css';


export default class GuessForm extends React.Component {

    handleSubmit(e){
        e.preventDefault();
        this.textInput.value = "";
    }

    render(){
        return (
            <form onSubmit={e => this.handleSubmit(e)}> 
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required 
                    ref={input => this.textInput = input}
                    />  
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" 
                onClick={ () => this.props.addGuesses(this.textInput.value)} />
            </form>
        );
    }

};

// value={this.state.guess} 
// onChange={ e => this.setState({guess: e.target.value})}