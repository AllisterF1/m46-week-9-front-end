import Login from './components/login';
import './App.css';
import { useState } from 'react';

const [user, setUser] = useState()

function App() {
  return (
    <div className="App">
      <Login />

    </div>
  );
}

export default App;
