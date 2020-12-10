import './App.css';
import SideBar from './SideBar'
import Feed from './Feed'
import Widgets from './Widgets'
import {useState} from 'react';
import Login from './Login'
import { useStateValue } from './StateProvider';
function App() {
  const [{user}  ] = useStateValue();



 
  return (
    <div className="App" style={{height:window.innerHeight}}>
    {!user ? (
      <h1>login</h1>,
      <Login />
    ) : ( 
 
        <>
        <SideBar style={{height:window.innerHeight}}/>
         <Feed />
          <Widgets />
          </>
       )} 
       
        
    </div>
  );
}

export default App;
