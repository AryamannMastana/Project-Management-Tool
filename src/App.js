import {BrowserRouter, Route, Switch } from 'react-router-dom'

// Styles
import './App.css';

// Pages & components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'

function App() {
  return (
    <div className="App">
      <h1>PMW Site</h1>
    </div>
  );
}

export default App;
