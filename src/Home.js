import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import EachImage from './EachImage';

function App({BookmarkImage, setBookmarkImage}) {
  let [images,setImages]=useState([])
  let [serachQuery, setSearchQuery]=useState("")
  
  const navigate=useNavigate()
    async function fetchdata(){
     
      let data= await fetch(
        
        `https://api.unsplash.com/search/photos?client_id=JgpUT2OUT4wG35eMjBayJpuwfat05oA5ZhfZbo_Th6s&page=2&query=${serachQuery}`
        )
        let dataj= await data.json()
        const result= dataj.results
        console.log(result)
        setImages(result)
      }
      
  return (
    <div className="App">
      <div className="heading">
      <h1>React Photo Search App</h1>
      <p onClick={()=> navigate("/bookmark")}>Bookmark</p>
      </div>
      <div className="search">
      <input type="text" placeholder='search for high resolution images' onChange={(e)=>{setSearchQuery(e.target.value)}}/>
      <button onClick={fetchdata}>Search</button>
      
      </div>
      {
        images.map((image)=>{
          return <EachImage image={image} BookmarkImage={BookmarkImage} setBookmarkImage={setBookmarkImage}/>
        })
      }
    
    </div>
  );
}

export default App;
