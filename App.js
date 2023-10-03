import Hero from "./components/Main";
import SignUP from "./components/SignUP";
import Login from "./components/Login";
// import Rental from './screens/Rental-nav';
import {Routes,Route } from 'react-router-dom';
import HomeRent from "./screens/HomeRent";
import LoanHome from "./screens/LoanHome";
import Forms from "./pages/Form/Forms";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/homerent" element={<HomeRent />} />
        <Route path="/loan" element={<LoanHome />} />
        <Route path="/form" element={<Forms />} />
      </Routes>
    </div>
  );
}

export default App;
