import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home/Home";
import OurPortfolio from "./Pages/OurPortfolio/OurPortfolio";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/portfolio"
            element={<OurPortfolio></OurPortfolio>}
          ></Route>
          <Route path="/team" element={<OurTeam></OurTeam>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
