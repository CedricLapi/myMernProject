

//import './App.css'
import { Route, Routes } from 'react-router-dom'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Main from './components/views/Main'

function App() {
  

  return (
    <>
    <h1>Welcome to MERN Stack</h1>
    
    <Routes>
      <Route element={ <Main /> } path='/person' />
      
      
    </Routes>
    </>
  )
}

export default App
