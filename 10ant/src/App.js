import Home from "./pages/Home/Home";
import Room from "./component/Room/Room";
import Topbar from "./component/Topbar/Topbar";
import Footer from "./component/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
          <Topbar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/rooms" element={<Room />}></Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
