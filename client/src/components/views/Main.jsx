import React, { useState } from 'react'
import PersonForm from '../PersonForm'
import PersonList from '../PersonList'

const Main = () => {
    const [person, setPerson] = useState([]);
  return (
    <div>
        <PersonForm person= {person} setPerson= {setPerson} />
        <PersonList person= {person} setPerson= {setPerson} />
        
    </div>
  )
}

export default Main;