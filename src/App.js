/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-02 03:45:22
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-05 10:59:36
 * @FilePath: /library_seat_tracker/src/App.js
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LibraryDetail from "./pages/LibraryDetail";
import LibraryList from "./pages/LibraryList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/librarylist" element={<LibraryList />} />
        <Route exact path="librarydetail/:id" element={<LibraryDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
