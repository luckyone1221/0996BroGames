import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MainPage} from "./blocks/MainPage/MainPage";

import './sass/main.scss';
import {AboutPage} from "./blocks/AboutPage/AboutPage";
import {PolicyPage} from "./blocks/PolicyPage/PolicyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage/>}
        />
        <Route
          path="/about"
          element={<AboutPage/>}
        />
        <Route
          path="/policy"
          element={<PolicyPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
