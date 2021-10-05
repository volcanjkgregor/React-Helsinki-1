import React from 'react';

const Header = ({ name }) => {
	return <h2>{name}</h2>;
};

const Parts = ({ parts }) => {
	return parts.map((single) => (
		<p key={single.id}>
			{single.name} {single.exercises}
		</p>
	));
};

const Total = ({ parts }) => {
	return (
		<p>
			<strong>
				total of {parts.reduce((sum, part) => sum + part.exercises, 0)}{' '}
				exercises
			</strong>
		</p>
	);
};
const OneCourse = ({ course }) => {
	return (
		<div>
			<Header name={course.name} />

			<Parts parts={course.parts} />

			<Total parts={course.parts} />
		</div>
	);
};

const Course = ({ courses }) => {
	return courses.map((course) => <OneCourse key={course.id} course={course} />);
};

export default Course;
