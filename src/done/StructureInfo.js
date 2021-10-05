import React, { useState } from 'react';

const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

const Part = ({ name, exercises }) => {
	return (
		<p>
			{name}:{exercises}
		</p>
	);
};

const Content = ({ parts }) => {
	const [part1, part2, part3] = parts;

	return (
		<div>
			<Part name={part1.name} exercises={part1.exercises} />
			<Part name={part2.name} exercises={part2.exercises} />
			<Part name={part3.name} exercises={part3.exercises} />
		</div>
	);
};

const Total = ({ parts }) => {
	const total = parts.reduce((total, part) => total + part.exercises, 0);

	return <p>Number of excercises: {total}</p>;
};

const Time = () => {
	const [counter, setCounter] = useState(0);

	setTimeout(() => setCounter(counter + 1), 1000);

	return <div>{counter}</div>;
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	const handleClick = () => {
		console.log('Clicked');
	};

	return (
		<div>
			<button onClick={handleClick}>Click me</button>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
			<Time />
		</div>
	);
};

export default App;
