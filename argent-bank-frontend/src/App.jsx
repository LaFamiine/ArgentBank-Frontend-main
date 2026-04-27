import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import SignIn from "./Pages/Signin";
import User from "./Pages/User";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<PrivateRoute><User /></PrivateRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;