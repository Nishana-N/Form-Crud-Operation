
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './Form'
import Details from './Details'
import Update from './Update'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/updatedvalue/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
