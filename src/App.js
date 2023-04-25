import Login from './components/login';
import Register from './components/register';
import './App.css';
import { useState } from 'react';



function App() {

  const [user, setUser] = useState()
  return (
    <div className="App">
      <Login newUser={setUser} />
      {user
       ?
      <h2>Hello Welcome {user} you have logged in</h2>
      :
      <h2>Please log in</h2>
    
     }
    <Register />
    </div>
  );
}

export default App;
