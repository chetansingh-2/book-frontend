import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CreateBook from "./pages/createBook";
import ShowBook from "./pages/showBook";
import EditBook from "./pages/editBoook";
import DeleteBook from "./pages/deleteBook";
import LoginButton from "./pages/Auth/AuthPage.jsx";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<LoginButton />} />
      )}
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
