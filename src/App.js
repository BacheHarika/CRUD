import React from 'react'
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
 
    <BrowserRouter>
     {/* <h1>Creacte</h1> 
    <Create/> */}
    <Routes>
      <Route path="/"element={<Create/>}/>
      <Route path="/read"element={<Read/>}/>
    </Routes>
    </BrowserRouter>
   
   
    
  )
}

export default App
