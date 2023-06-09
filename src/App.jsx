import React from "react";
import { Routes, Route } from "react-router-dom";

//styles
import "./styles/App.css";

//components
import Layout from "./components/Layout";

//pages
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PostsPages from "./pages/PostsPages";
import PostPages from "./pages/PostPages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<PostsPages />} />
          <Route path="posts/:id" element={<PostPages />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
