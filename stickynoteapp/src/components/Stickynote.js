import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import NotesList from './NoteList'
import Darktheme from './Darktheme';
import { Stickynotecontext } from '../contexts/Stickynotecontext';

// extracting all functions to Stickynotecontext object 
const Stickynote = () => {
	const { notes, setNotes,  } = useContext(Stickynotecontext)

	const [darkMode, setDarkMode] = useState(false)

	// saves notes to local storage anytime notes change 
	useEffect(() => {
		localStorage.setItem('notes-data', JSON.stringify(notes)
		)
	// this is a dependency array, if anything changes in the note variable. it will trigger this useEffect function
	}, [notes])

	// retrieve any notes that are saved into local storage if theirs value in it. 
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('notes-data')
		);
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);


	// function to Delete a note
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes)
	};

	//function to Delete All notes 
	const deleteAllNote = (id) => {
		const newNotes = notes.filter((note) => note.id.text !== id.text);
		setNotes(newNotes)
	};

	// function to Edit a note (Not Complete Future Feature Add)
	const editNote = (id) => {
		const newNotes = notes.filter(notes)
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Darktheme handleToggleDarkMode={setDarkMode} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase()
					)}
					deleteNote={deleteNote}
					deleteAllNote={deleteAllNote}
					handleEditNote={editNote}
				/>
			</div>
		</div>
	);
};


export default Stickynote