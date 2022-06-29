import React from 'react';
import { useState } from 'react';

	// leaving useState  as "string" to keep the textare empty as default
	// added handleAddNote as an paramter to have easy access to addNote function
const Addnote = ({ addNote }) => {
	const [noteText, setNoteText] = useState('')

	// handleChange function updates State evertime the value of the textarea changes
	const handleChange = (e) => {
		setNoteText(e.target.value)
	}
	// save function is to update the State with each new notes/ once the note is saved, it will generate a new blank note
	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			addNote(noteText)
			setNoteText('')
		}
	}

	return (
		<div className='note new'>
			<textarea
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};


export default Addnote