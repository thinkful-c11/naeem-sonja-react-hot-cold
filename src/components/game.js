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
            guesses:[]
        }
    }
    addGuesses(asd){

        console.log('IM IN GAME', asd);

        //console.log(this);
        const guesses = [... this.state.guesses, asd];

        //[this.state.guesses, asd];
        console.log("hey there, its me", guesses);
        this.setState({guesses});
    

    }
    render(){
        return (
            <div>
                <Header />
                {/* All input comes from the GuessSection will need to update rest based on this info*/}
                {/*onChange={event=>onChange(event)}*/}
                <GuessSection addGuesses={guess => this.addGuesses(guess)} feedback={this.state.feedback} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

