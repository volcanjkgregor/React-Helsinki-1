import React from 'react';
import Note from './components/Note';

const App = ({ notes }) => {
	return (
		<div>
			<h1>Notes</h1>
			<ul>
				{/* if you want generated index
             {notes.map((note,index)=> <li key={index}>{note.content}</li>)}
				
                 if you want index from id */}
				{notes.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
		</div>
	);
};

export default App;
