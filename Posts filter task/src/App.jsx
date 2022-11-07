import * as React from 'react'
import MainContext from './context/MainContext'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './Pages/IndexPage';


const App = () => {

  

  return (
    <MainContext.Provider value={{}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MainContext.Provider>

  );
}

export default App;
