import React from "react";
import ProfilePhoto from "./Component/profiles/ProfilePhoto";
import FullName from "./Component/profiles/FullName";
import Address from "./Component/profiles/Address";
import './App.css';

function App() {
  return  <div className="container">
    <div className="card" >
     <ProfilePhoto />
      <FullName /><Address /></div></div>
  
    
 
}

export default App;
