import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import PostDetails from "./components/PostDetails";
import AddBlog from "./pages/AddBlog";
import About from "./pages/About";
import PostCard from "./components/PostCard";
import PostList from "./components/PostList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="postcard" element={<PostCard />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="postlist" element={<PostList/>} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;