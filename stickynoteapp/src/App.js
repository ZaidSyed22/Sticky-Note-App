import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './css/App.css';
import './css/Stickynote.css';
import './css/Navbartwo.css'
import Stickynote from './components/Stickynote';
import Home from './components/Home';
import Payment from './components/Payment';
import Pagetemplate from './components/Pagetemplate';
import { Stickynotecontext } from './contexts/Stickynotecontext'
import { useState } from 'react';
import { nanoid } from 'nanoid';




// Using Contexts-API to effectively produce global variable(parent) that can be passed around to assist with prop-drilling(passing data through multiple nested children components)
function App() {
  const [notes, setNotes] = useState([]);

 // funtion to Add a note, date and id( used nanonId package to generate random unique ID for each stickynote)
 const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  };
  // creates a new array instead of updating the old array/ setNotes causes the components to re-render and update with new data
  const newNotes = [...notes, newNote]
  setNotes(newNotes)
};

  
  return (
    <div className="App">
     <Router>
      <Pagetemplate>
        <Switch>

    <Route path="/" exact>
        <Home />
      </Route>
    
      <Route path="/Stickynote.js" exact>
      <Stickynotecontext.Provider value={{ notes, setNotes, addNote }}>
      {  <Stickynote />  }
      </Stickynotecontext.Provider>
      </Route>

      <Route path="/Payment.js" exact>
        <Payment />
      </Route>
      
  </Switch>
</Pagetemplate>
</Router>
);

    </div>
  );
}


export default App;
