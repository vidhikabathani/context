import { useContext } from 'react';
import './App.css';
import { data } from './Context';
import Loginf from './Loginf';
import Profile from './Profile';


function App() {
  let {clr}=useContext(data)
  console.log(clr);
  return (
    <div>
      <h1 style={{}}>VIDHIKA</h1>
      <Loginf/>
      <Profile/>
    </div>
  );
}

export default App;
