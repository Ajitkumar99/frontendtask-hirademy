// MainPage.js
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <h1>Welcome to My Book App</h1>
      <p>This is the main page of the application.</p>
      <Link to="/books">
        <button>Go to Books Page</button>
      </Link>
    </div>
  );
}

export default MainPage;
