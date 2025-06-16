import { HashRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import { WORKS_DATA } from './constants/worksData';
import PAGES from './tmpls/Float';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tower-of-babel' element={<Outlet />}>
          <Route index element={<PAGES.Cover data={WORKS_DATA[0]} />} />
          <Route path='synopsis' element={<PAGES.Synopsis data={WORKS_DATA[0]} />} />
          <Route path='character-select' element={<PAGES.CharacterSelect data={WORKS_DATA[0]} />} />
          <Route path='confirmation/:id' element={<PAGES.CharacterConfirmation data={WORKS_DATA[0]} />} />
          <Route path='character/:id' element={<PAGES.CharacterInfomation data={WORKS_DATA[0]} />} />
          <Route path='ending' element={<PAGES.Ending data={WORKS_DATA[0]} />} />
          <Route path='*' element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
