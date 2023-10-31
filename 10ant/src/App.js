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
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";
import SingleRoom from "./pages/SingleRoom/SingleRoom"
import EditProfile from "./pages/EditProfile/EditProfile"
import Chat from "./pages/Chat/Chat";
import Chat2 from "./pages/Chat/Chat2";

function App() {

  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);


  return (
    Loading ? <Loadingpg /> : <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <header>
            <Topbar />
          </header>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path='/rooms' element={<PrivateRoute/>}>
              <Route exact path="/rooms" element={<Room />}></Route>
            </Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/one" element={<SingleRoom/>}></Route>
            {/* <Route exact path="/oneroom" element={<OneRoom />}></Route> */}
            <Route exact path='/profile' element={<PrivateRoute/>}>
              <Route exact path="/profile" element={<Profile />}></Route>
            </Route>
            <Route exact path='/chat' element={<PrivateRoute/>}>
              <Route exact path="/chat" element={<Chat />}></Route>
            </Route>
            <Route exact path='/chat/:id' element={<PrivateRoute/>}>
              <Route exact path="/chat/:id" element={<Chat2 />}></Route>
            </Route>
            <Route exact path='/addroom' element={<PrivateRoute/>}>
              <Route exact path="/addroom" element={<Addroom />}></Route>
            </Route>
            <Route exact path='/editprofile' element={<PrivateRoute/>}>
              <Route exact path="/editprofile" element={<EditProfile />}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>


  );
}

export default App;
