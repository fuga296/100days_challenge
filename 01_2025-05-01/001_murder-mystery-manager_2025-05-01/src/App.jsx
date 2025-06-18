import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import getTOBRoutes from './works/tower-of-babel/Routes';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {getTOBRoutes()}
      </Routes>
    </HashRouter>
  )
}

export default App
