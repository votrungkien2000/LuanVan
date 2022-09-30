import { Routes, Route } from 'react-router-dom';
import HomePage from './view/HomePage';
import Content from './view/Content';
import News from './view/News';
import Login from './view/login/Login';
import LayoutDefault from './component/layout/Layout';
import './App.scss';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<Login />} />
        <Route path='/' element={<LayoutDefault />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/content' element={<Content />} />
          <Route path='/news' element={<News />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
