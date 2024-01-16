import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PersonForm = () => {
const [message, setMessage] = useState('Loading......')

    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
        .then((response) => setMessage(response.data.message))
        .catch((err) => console.log(err))
    }, [] )
  return (
    <div>{message}</div>
    
  )
}

export default PersonForm