import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './assets/css/reset.css';
import './assets/css/style.css';

import DataContext from './context/DataContext';

import UsersList from './pages/UsersList';
import Form from './pages/Form';

function App() {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{data, setData}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
