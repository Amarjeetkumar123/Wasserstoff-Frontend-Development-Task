import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Firstpage from "./pages/Firstpage";
import Layout from "./pages/Layout";
import Secondpage from "./pages/Secondpage";
import Thirdpage from "./pages/Thirdpage";

function App() {
  const [users, setUsers] = useState([]);
// https://api.covid19api.com/summary
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.covidtracking.com/v1/states/current.json"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);
 
  return (
    <>
      {console.log(users)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout users={users} />}>
            <Route index element={<Firstpage users={users} />} />
            <Route path="secondPage" element={<Secondpage />} />
            <Route path="thirdPage" element={<Thirdpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
