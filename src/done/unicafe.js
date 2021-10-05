import React, { useState } from 'react';

const Header = () => <h2>give feedback</h2>;

const Button = (props) => {
	return <button onClick={props.clickHandler}>{props.text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
	if (good === 0 && neutral === 0 && bad === 0)
		return (
			<div className="">
				<h2>statistics</h2>
				<p>No feedback given</p>
			</div>
		);

	var sum = good + bad + neutral;
	var avg = (good * 1 + bad * -1) / sum;
	var pos = good / sum;
	return (
		<div className="">
			<h2>statistics</h2>
			<table>
				<tbody>
					<Line text="good" value={good} />
					<Line text="neutral" value={neutral} />
					<Line text="bad" value={bad} />
					<Line text="all" value={sum} />
					<Line text="average" value={avg} />
					<Line text="positive" value={pos} text1="%" />
				</tbody>
			</table>
		</div>
	);
};

const Line = ({ text, value, text1 }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>
				{value}
				{text1 && text1}
			</td>
		</tr>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const clickGoodHandler = () => {
		setGood(good + 1);
	};

	const clickNeutralHandler = () => {
		setNeutral(neutral + 1);
	};

	const clickBadHandler = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<Header />
			<Button clickHandler={clickGoodHandler} text="good" />
			<Button clickHandler={clickNeutralHandler} text="neutral" />
			<Button clickHandler={clickBadHandler} text="bad" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
