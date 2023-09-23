import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CreateBook from "./pages/createBook";
import ShowBook from "./pages/showBook";
import EditBook from "./pages/editBoook";
import DeleteBook from "./pages/deleteBook";
import AuthPage from "./pages/Auth/AuthPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
