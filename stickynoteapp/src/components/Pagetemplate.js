import React from 'react'
import Navbartwo from './Navbartwo';
import 'bootstrap/dist/css/bootstrap.min.css';

// PageTemplate function renders whatever route we are on
function Pagetemplate(props) {
  return (
    <div>
        <Navbartwo />
        {props.children} 
    </div>
  )
}


export default Pagetemplate