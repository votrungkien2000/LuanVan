import { Routes, Route } from 'react-router-dom';
import HomePage from './view/HomePage';
import Login from './view/login/Login';
import Register from 'view/register/Register'
import Profile from 'view/profile/Profile.js'
import Admin from 'view/admin/Admin';
import LayoutDefault from './component/layout/Layout';
import PrivateRoute from 'component/private/PrivateRouter';
import './App.scss';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      
        <Route path='/' element={<PrivateRoute><LayoutDefault /></PrivateRoute>}>
        <Route path='/admin' element={<PrivateRoute><Admin/></PrivateRoute>} />
          <Route path='/' element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
