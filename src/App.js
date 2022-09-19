import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/style.css';

import UsersList from './pages/UsersList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
