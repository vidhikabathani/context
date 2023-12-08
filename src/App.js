import { useContext } from 'react';
import './App.css';
import { data } from './Context';
import Nav from './components/Nav';
import AllRoutes from './routes/AllRoutes';


function App() {
  let {clr}=useContext(data)
  console.log(clr);
  return (
    <div>
      <Nav/>
      <AllRoutes/>
    </div>
  );
}

export default App;
