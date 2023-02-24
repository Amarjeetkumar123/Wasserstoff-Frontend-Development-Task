import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Firstpage from "./pages/Firstpage";
import Layout from "./pages/Layout";
import Secondpage from "./pages/Secondpage";
import Thirdpage from "./pages/Thirdpage";



function App() {

  const [users, setUsers] = useState([]);

   const fetchData = async () => {
     const response = await fetch("https://api.covid19api.com/summary");
     if (!response.ok) {
       throw new Error("Data coud not be fetched!");
     } else {
       return response.json();
     }
   };
   useEffect(() => {
     fetchData()
       .then((res) => {
         setUsers(res);
       })
       .catch((e) => {
         console.log(e.message);
       });
   }, []);


  console.log(users);
  // console.log(users.Countries.map((items) => {
  //   console.log(items);
  // }));
  console.clear();
  console.log(users["Countries"][0]);
  // window.users = users.Countries[0];
  // console.log(users.Countries[0]);
  // window.users = users;
  // console.log(users.TotalConfirmed);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout users={users} />}>
            <Route index element={<Firstpage />} />
            <Route path="secondPage" element={<Secondpage />} />
            <Route path="thirdPage" element={<Thirdpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
