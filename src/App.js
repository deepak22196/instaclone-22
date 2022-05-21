import React from "react";
import ReactDOM from "react-dom";
import Postview from "./Postview";
import Landing_page from "./Landing_page";
import CreatePost from "./CreatePost";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="postview" element={<Postview />} />
        <Route path="create" element={<CreatePost />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
