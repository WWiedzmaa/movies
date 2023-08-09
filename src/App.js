//5219cb6186dc8cdfa863dcdc035f17f8

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import Serials from "./pages/Serials";
import Persons from "./pages/Persons";
import UserProfile from "./pages/UserProfile";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import About from "./pages/Footers/About";
import Contact from "./pages/Footers/Contact";
import NewFilm from "./pages/Footers/NewFilm";
import NewSerials from "./pages/Footers/NewSerials";
import TermsAndConditions from "./pages/Footers/TermsAndConditions";
import PrivacyPolitycy from "./pages/Footers/PrivacyPolitycy";
import "./index.css";
import SearchResoult from "./pages/SearchResoult";
import { CardOnePerson } from "./pages/CardOnePerson";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="middle">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/serials" element={<Serials />} />
            <Route path="/persons" element={<Persons />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newFilm" element={<NewFilm />} />
            <Route path="/newSerials" element={<NewSerials />} />
            <Route
              path="/termsAndConditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacyPolicy" element={<PrivacyPolitycy />} />
            <Route path="/serch/:id" element={<SearchResoult />} />
            <Route path="/person/:id" element={<CardOnePerson />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
