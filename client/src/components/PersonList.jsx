import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PersonList = () => {
    const [person, setPerson] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/api/person")
        .then((response) => setPerson(response.data))
        .catch((err) =>console.log(err));
    
    }, []);
    console.log(person);
  return (
    <div>PersonList</div>
  )
}

export default PersonList