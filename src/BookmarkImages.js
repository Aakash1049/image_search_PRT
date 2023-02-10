import React from 'react'
import EachImage from './EachImage';

const BookmarkImages = ({BookmarkImage, setBookmarkImage}) => {
  return (
    <div className="App">
        <h1 style={{textAlign:"center"}}>My Bookmarked Images</h1>
   
    {
      BookmarkImage.map((image)=>{
        return <EachImage image={image} BookmarkImage={BookmarkImages} setBookmarkImage={setBookmarkImage}/>
      })
    }
  
  </div>
  )
}

export default BookmarkImages;