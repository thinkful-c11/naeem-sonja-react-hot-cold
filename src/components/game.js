import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feedback: 'Make your guess!',
            count:3,
            guesses:[]
        }
    }
addGuesses(asd){
    const guesses = [...this.state.guesses, asd];
    
    this.setState({guesses})

}
    render(){
        return (
            <div>
                <Header />
                {/* All input comes from the GuessSection will need to update rest based on this info*/}
                {/*onChange={event=>onChange(event)}*/}
                <GuessSection addGuesses={this.addGuesses} feedback={this.state.feedback} />
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

