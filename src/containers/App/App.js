import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Profiles } from "../Profiles/Profiles";
import { Profile } from "../Profile/Profile";
import { Settings } from "../Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profiles />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
