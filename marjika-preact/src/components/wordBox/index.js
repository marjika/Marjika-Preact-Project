import { h } from 'preact';
import './style';

const WordBox = props => (
	<div className='displayWord'>
        <h1>Your word: {props.word}</h1>
		<h1>Word value: {props.points}</h1>
		
	</div>
);

export default WordBox;