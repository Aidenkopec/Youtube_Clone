import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  SearchBar,
} from "./components";
// import { Feed } from "@mui/icons-material";
// import VideoDetail from "./components/VideoDetail";
// import ChannelDetail from "./components/ChannelDetail";
// import SearchFeed from "./components/SearchFeed";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/video/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
