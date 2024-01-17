import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PersonList = (props) => {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/person")
        .then((response) => setPerson(response.data))
        .catch((err) =>console.log(err));
    
    }, []);
    console.log(person);
  return (
    <ul>
      {
         person.map((item, index) => {
          return ( 
            <li key={index}>{item.first_name} {item.last_name} {item.age}</li>
          )
        }
        
        )
      }
    </ul>
  )
}

export default PersonList