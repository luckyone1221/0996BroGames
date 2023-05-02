import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MainPage} from "./blocks/MainPage/MainPage";

import './sass/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
