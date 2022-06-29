import React from 'react';
import Note from './Note';
import Addnote from './Addnote';

const NotesList = ({
	notes,
	addNote,
	deleteNote,
	deleteAllNote,
	handleEditNote, 
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					deleteNote={deleteNote}
					deleteAllNote={deleteAllNote}
					handleEditNote={handleEditNote}
				/>
			))}
			<Addnote addNote={addNote} />
		</div>
	)
};

export default NotesList;
