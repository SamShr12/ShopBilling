import {Routes,Route} from 'react-router-dom'
import { AddItem, Bill, Body } from './components'

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Bill />}/>
          <Route path="/useradmin" element={<Body />} />
          <Route path="/useradmin/item/add" element={<AddItem />} />s
        </Routes>
      </div>
  )
}

export default App
