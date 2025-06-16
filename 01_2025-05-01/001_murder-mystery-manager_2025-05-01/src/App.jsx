import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<A />} /> */}
      </Routes>
    </>
  )
}

export default App
