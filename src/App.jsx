import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";
import VideoPage from "./pages/VideoPage/VideoPage";


function App() {


  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<VideoPage />}/>
      <Route path="/UploadPage" element={<UploadPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
