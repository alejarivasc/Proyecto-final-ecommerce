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
import AuthUser from "./components/AuthUser";

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
          <Route
            path="/profile"
            element={
              <AuthUser>
                <Profile />
              </AuthUser>
            }
          />
          <Route
            path="/editprofile"
            element={
              <AuthUser>
                <EditProfile />
              </AuthUser>
            }
          />
          <Route
            path="/favorites"
            element={
              <AuthUser>
                <Favorites />
              </AuthUser>
            }
          />
          <Route
            path="/myservice"
            element={
              <AuthUser>
                <MyService />
              </AuthUser>
            }
          />
          <Route
            path="/newservice"
            element={
              <AuthUser>
                <NewService />
              </AuthUser>
            }
          />
          <Route
            path="/mycart"
            element={
              <AuthUser>
                <MyCart />
              </AuthUser>
            }
          />
          <Route path="/services/:id" element={<Service />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
