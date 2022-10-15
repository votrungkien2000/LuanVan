import { Routes, Route } from 'react-router-dom';
import HomePage from './view/HomePage';
import Login from './view/login/Login';
import Register from 'view/register/Register'
import Profile from 'view/profile/Profile.js'
import LayoutDefault from './component/layout/Layout';
import './App.scss';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
        <Route path='/' element={<LayoutDefault />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
