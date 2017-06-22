import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (               
        <section> 
            {/*onChange={event => props.onChange(event)}*/}
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm  />
        </section>
    );
}

