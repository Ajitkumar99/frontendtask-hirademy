// BookDetailsPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(`https://softwium.com/api/books/${id}`);
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  return (
    <div>
      <h1>Book Details</h1>
      {book && (
        <div>
          <h2>{book.title}</h2>
          <p>ISBN: {book.isbn}</p>
          <p>Page Count: {book.pageCount}</p>
          <p>Authors: {book.authors.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default BookDetailsPage;
