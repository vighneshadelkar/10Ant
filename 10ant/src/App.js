import Home from "./pages/Home/Home";
import Room from "./component/Room/Room";
import Topbar from "./component/Topbar/Topbar";
import Footer from "./component/Footer/Footer";
import Login from "./pages/Login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./pages/Login/Signup";
import Profile from "./pages/Profile/Profile";
import Addroom from "./pages/Addroom/Addroom";
import { useState, useEffect } from "react";
import Loadingpg from "./pages/Loading/Loadingpg";



function App() {

  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);


  return (
    Loading ? <Loadingpg /> : <div className="App">
      <header>
        <Topbar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/rooms" element={<Room />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/addroom" element={<Addroom />}></Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>


  );
}

export default App;
