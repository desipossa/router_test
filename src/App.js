import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import './test.scss'
import Sub01 from './pages/sub01';
import Sub02 from './pages/sub02';
import Sub03 from './pages/sub03';

const LINK = [
  { id: 1, name: "sub01", link: "/sub01" },
  { id: 2, name: "sub02", link: "/sub02" },
  { id: 3, name: "sub03", link: "/sub03" },
]

function App() {
  return (
    <div className="test">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ul>
          {
            LINK.map(link => {
              return (
                <li key={link.id} className={'link0' + link.id}><NavLink to={link.link}>{link.name}</NavLink></li>
              )
            })
          }
        </ul>
        <Routes>
          <Route path='/sub01' element={<Sub01 />}></Route>
          <Route path='/sub02' element={<Sub02 />}></Route>
          <Route path='/sub03' element={<Sub03 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
