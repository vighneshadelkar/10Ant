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
import ClipLoader from "react-spinners/ClipLoader";


function App() {

  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  
  return (
    Loading ? <ClipLoader
      color={"#3179C7"}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> : <div className="App">
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
