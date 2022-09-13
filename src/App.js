
import './App.css';
import './components/style.css'
import Body from './components/Body';
import Navbar from './components/Navbar';
import { useState } from 'react'


function App() {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState([]);

  return (
    <>
      <Navbar user={setuser} loading={setloading} />
      <Body user={user} load={loading} />
    </>
  );
}

export default App;
