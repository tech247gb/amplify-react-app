import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Login, Dashboard
} from './ui-components';

function App() {
  return (

    <div>
      <Routes>
        <Route exact path="/" element={ <Login/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
    </div>
  );
}

export default App;
