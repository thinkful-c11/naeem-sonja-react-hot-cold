import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            answer: Math.floor(Math.random() * 100),
            guesses:[]
        }
    }


    addGuesses(asd){

        //console.log("IM THE REAL NUMBER", this.state.answer);
        //console.log('IM IN GAME', asd);

        const guesses = [... this.state.guesses, asd];

        //console.log("hey there, its me", guesses);
        this.setState({guesses});
    }

    resetState(){
        //console.log("this is where the state should reset");
        this.setState({guesses:[], answer: Math.floor(Math.random() * 100)});
    }


    render(){

        let feedback;
           
        if(this.state.guesses.length === 0){
            feedback = "Make your guess!"
        }else{
            const answer = this.state.answer;
            const currentGuess = parseInt(this.state.guesses[this.state.guesses.length -1]);
            if(answer === currentGuess){
                feedback = "You won. Click new game to start again!";
            } else if(Math.abs(currentGuess - answer) <= 10 ){
                feedback = "Hot";
            } else if(Math.abs(currentGuess - answer) <= 20){
                feedback = "Kinda hot";
            } else if(Math.abs(currentGuess - answer) <= 30){
                feedback = "Less than warm";
            } else{
                feedback = "Cold";
            }
        }


        return (
            <div>
                <Header resetState={state => this.resetState(state)}/>
                <GuessSection addGuesses={guess => this.addGuesses(guess)} feedback={feedback} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}


