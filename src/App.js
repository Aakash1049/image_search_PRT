import { useEffect, useState } from 'react';
import './App.css';
import EachImage from './EachImage';
import {BrowserRouter, Route, Router, Routes, useNavigate} from  "react-router-dom"
import BookmarkImages from './BookmarkImages';
import Home from "./Home"
function App() {

  let [BookmarkImage, setBookmarkImage]=useState([])
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home BookmarkImage={BookmarkImage} setBookmarkImage={setBookmarkImage}/>}/>
        <Route path='/bookmark' element={<BookmarkImages BookmarkImage={BookmarkImage} setBookmarkImage={setBookmarkImage}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
