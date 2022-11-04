import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home></Home> */}
    </>
  );
}
