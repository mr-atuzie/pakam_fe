import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/update-user/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
