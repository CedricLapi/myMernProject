import axios from "axios"
import {useState, useEffect} from "react"


const PersonForm = (props) => {
const {person, setPerson} = props;
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [age, setAge] = useState('')

const createPersonHandler = (e) => {
  e.preventDefault();
  axios.post('http://localhost:8000/api/person', {
    first_Name: firstName, last_Name: lastName, age
  })
    .then((response) => setPerson([...person, response.data]))
    .catch((err) => console.log(err))
    setFirstName('')
    setLastName('')
    setAge('')
  }



    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
        .then((response) => setMessage(response.data.message))
        .catch((err) => console.log(err))
    }, [] )
  return (
    <form onSubmit={createPersonHandler}>
      <div>
      <label>First Name</label>
      <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      </div><br/>

      <div>
      <label>Last Name</label>
      <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
      </div><br/>

      <div>
      <label>Age</label>
      <input type="number" onChange={(e) => setAge(e.target.value)} value={age} />
      </div><br/>

      <input type="submit" value='Create Person'/>
      
    </form>
    
  )
}

export default PersonForm