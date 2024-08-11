import { BrowserRouter,Routes,route} from 'react-router-dom'
import Homepage from './pages/Homepage'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
