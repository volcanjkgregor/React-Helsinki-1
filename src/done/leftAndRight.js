import React, { useState } from 'react';

const History = (props) => {
	if (props.allClicks.length === 0) {
		return <div className="">the app is used by pressing the buttons</div>;
	}
	return (
		<div className="">button press history: {props.allClicks.join(' ')}</div>
	);
};

const Button = (props) => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
	/*
	const [clicks, setClicks] = useState({
		left: 0,
		right: 0,
	});

	const handleLeftClick = () => {
		setClicks({
			...clicks,
			left: clicks.left + 1,
		});
	};

	const handleRightClick = () => {
		setClicks({
			...clicks,
			right: clicks.right + 1,
		});
	};
	*/

	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(0);
	const [allClicks, setAll] = useState([]);

	const handleLeftClick = () => {
		setAll(allClicks.concat('L'));
		setLeft(left + 1);
	};

	const handleRightClick = () => {
		setAll(allClicks.concat('R'));
		setRight(right + 1);
	};

	//<p>{allClicks.join(' ')}</p>

	return (
		<div>
			{left}
			<Button handleClick={handleLeftClick} text="left" />
			<Button handleClick={handleRightClick} text="right" />
			{right}

			<History allClicks={allClicks} />
		</div>
	);
};
export default App;
