import { useEffect, useState } from "react";
import "./App.css";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Farmer from "./pages/Farmer";
import FarmerRegister from "./pages/FarmerRegister";
import Forgetpass from "./components/Forgetpass";
import VerifyOtp from "./components/VerifyOtp";
import Resetpass from "./components/Resetpass";

// import TourDetails from './pages/TourDetails'

function App() {
  const [role, setrole] = useState("");
  const location = useLocation()

  const url = window.location.pathname.split('/').pop();
  const admin = [
    { id: 1, name: "home", path: "home" },
    { id: 2, name: "dashboard", path: "dashboard" },
    { id: 3, path: "admin-products", name: "products" },
  ];

  const tourists = [
    { id: 1, name: "home", path: "home" },
    { id: 2, name: "products", path: "tour-products" },
    { id: 3, name: "farms", path: "tour-farms" },
    { id: 4, name: "tourist", path: "tour-farms" },
  ];

  const farmers = [
    { id: 1, name: "home", path: "home" },
    { id: 2, name: "products", path: "farmer-products" },
    { id: 3, name: "farms", path: "farmers-farms" },
  ];
  const unauthorized = [
    { id: 1, name: "home", path: "/" },
    { id: 2, name: "products", path: "/user-products" },
    { id: 3, name: "farms", path: "/user-farms" },
    { id: 4, name: "login", path: "login" },
  ];

  const renderLinks = () => {
    switch (role) {
      case "Admin":
        return <Navbar items={admin} />;
      case "Farmer":
        return <Navbar items={farmers} />;
      case "Tourist":
        return <Navbar items={tourists} />;
      case "unauthorized":
        return <Navbar items={unauthorized} />;
      default:
        return null;
    }
  };
// const urlparams=new URLSearchParams(location.search)
  const initialfetch = async () => {
    try {
      const res = await fetch("http://localhost:8001/auth/getrole",{
        credentials:'include'
      });
      const data = await res.json();
      console.log(data);
      setrole(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    initialfetch();
  },[location]);

  return (
    <>
      {renderLinks()}
      <Routes>
        {role === "unauthorized" && <Route path="/" element={<Home />} />}
        {role === "Farmer" && <Route path="/" element={<Farmer />} />}
        {role === "Tourist" && <Route path="/" element={<Home />} />}
       
        <Route path="/farmer-register" element={<FarmerRegister />} />
       <Route path="/login" element={<Login />} />
       <Route path="/forgetpass" element={<Forgetpass />}/>
       <Route  path="/verifyotp" element={<VerifyOtp />} />
       <Route path="/resetpass" element={<Resetpass />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setRole={setRole} />} /> */}
        {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

export default App;
