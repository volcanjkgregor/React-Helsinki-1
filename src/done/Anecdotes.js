import React, { useState } from 'react';

const Button = ({ clickHandler, text }) => {
	return <button onClick={clickHandler}>{text}</button>;
};

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
	];

	const [points, setPoints] = useState({
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
	});

	const [selected, setSelected] = useState(0);

	const plusHandler = () => {
		if (selected === 6) {
			setSelected(0);
		} else setSelected(selected + 1);
	};

	const voteHandler = () => {
		console.log('clicked');
		setPoints({ ...points, [selected]: points[selected] + 1 });
	};

	return (
		<div>
			{anecdotes[selected]}
			<br />
			<p>has {points[selected]} votes</p>
			<br />
			<Button clickHandler={voteHandler} text="vote" />
			<Button clickHandler={plusHandler} text="next anecdote" />
		</div>
	);
};

export default App;
