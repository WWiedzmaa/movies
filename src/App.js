//5219cb6186dc8cdfa863dcdc035f17f8

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import Serial from "./pages/Serial";
import Person from "./pages/Person";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/serials" element={<Serial />} />
          <Route path="/person" element={<Person />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
