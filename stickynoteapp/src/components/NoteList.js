import React, { useContext } from 'react';
import Note from './Note';
import Addnote from './Addnote';
import { Stickynotecontext } from '../contexts/Stickynotecontext';

const NotesList =  ({
	deleteNote,
	deleteAllNote,
	handleEditNote, 
}) => {
	const { notes  } = useContext(Stickynotecontext)

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
			<Addnote />
		</div>
	)
};

export default NotesList;
