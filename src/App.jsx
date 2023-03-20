import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import AboutUs from "./pages/AboutUs";
import Help from "./pages/Help";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Favorites from "./pages/Favorites";
import MyService from "./pages/MyService";
import NewService from "./pages/NewService";
import MyCart from "./pages/Mycart";

 import Service from "./pages/Service";

function App() {
  return (
    <div>
      <NavBar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/myservice" element={<MyService />} />
          <Route path="/newservice" element={<NewService />} />
          <Route path="/mycart" element={<MyCart />} />

           <Route path="/services/:id" element={<Service />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
