import React from 'react';
import { RiChatDeleteFill } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, deleteNote, deleteAllNote, handleEditNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever className= "deleteAll"
					onClick={() => deleteAllNote(id, text)}
					size='1.3em'
				/>
				<AiFillEdit className= 'edit'
					onClick={() => handleEditNote(id, text)}				
				/>
				<RiChatDeleteFill className= 'delete'
					onClick={() => deleteNote(id)}				
				/>
				
			</div>
		</div>
	);
};

export default Note;

