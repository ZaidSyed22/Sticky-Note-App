import React from 'react'

// Dark Theme function 
const Darktheme = ({ handleToggleDarkMode }) => {
	return (
		<div className='DarkTheme'>
			<h1>Sticky-Note-App</h1>
			<button className= 'save'
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
			>
				Dark/Light Mode
			</button>
		</div>
	);
};

export default Darktheme;