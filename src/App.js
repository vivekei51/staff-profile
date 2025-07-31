import { StaffProfileForm } from "./components/StaffProfileForm";
import './App.css'
import { StaffProfileView } from "./components/StaffProfileView";
import {Routes,Route } from "react-router-dom";
 function App( ) {
  return (
      <Routes>
        <Route path='/' element={<StaffProfileForm/>}/>
        <Route path='/profile' element={<StaffProfileView/>}/> 
      </Routes>
  );
}

export default App; 