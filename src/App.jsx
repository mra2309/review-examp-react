import { useState } from "react";
import { BrowserRouter as Ruter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Rent from "./Pages/Rent";
import Navbar from "./Components/Navbar";

function App() {
  const [user, setUser] = useState({ user: "Dilya", balance: 100000 });

  return (
    <Ruter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/rent"
          element={<Rent setUser={setUser} user={user} />}
        ></Route>
      </Routes>
    </Ruter>
  );
}

export default App;
