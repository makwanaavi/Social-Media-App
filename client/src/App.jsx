import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import FeedPage from "./pages/FeedPage";
import Messages from "./pages/Messages";
import ChatBox from "./pages/ChatBox";
import Connection from "./pages/Connection";
import DiscoverPage from "./pages/Discover";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route index element={<FeedPage />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connection />} />
          <Route path="discover" element={<DiscoverPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
