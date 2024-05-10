// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BooksPage from "./BooksPage";
import BookDetailsPage from "./BookDetailsPage";
import MainPage from "./MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books/*" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
