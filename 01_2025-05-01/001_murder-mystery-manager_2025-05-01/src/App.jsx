import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<A />} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App
