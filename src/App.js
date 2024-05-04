import { BrowserRouter, Route, Routes } from "react-router-dom";
import Studentlist from "./Studentlist";
import Favstudentlist from "./Favstudentlist";
import Navbar from "./Navbar";
import { useState } from "react";

function App() {
  const [sList, setsList] = useState([
    {
      id: 1,
      name: 'Bharath'
    },
    {
      id: 2,
      name: 'Praveen'
    },
    {
      id: 3,
      name: 'Kumar'
    },
    {
      id: 4,
      name: 'Ramya'
    },
    {
      id: 5,
      name: 'Monica'
    }
    ])
  const [fList, setfList] = useState([])
  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Studentlist sList={sList} setsList={setsList} fList={fList} setfList={setfList}/>}></Route>
        <Route path="/favstudentlist" element={<Favstudentlist fList={fList} setfList={setfList}/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
