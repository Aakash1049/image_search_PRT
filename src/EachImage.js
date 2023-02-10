import React, { useState } from 'react'
import "./App.css"
const EachImage = ({image, BookmarkImage, setBookmarkImage}) => {
    let [bookmark, setBookmark]=useState(false)
    function addToBookmark(){
        setBookmarkImage([...BookmarkImage, image])
    }
  return (
    <>
        <div onMouseOver={()=> setBookmark(true)} onMouseOut={()=> setBookmark(false)} className='image'>
            <img src={image.urls.small_s3}/>
            {
                bookmark && <span onClick={addToBookmark}>Bookmark this image</span>
            }
            </div>
    </>
  )
}

export default EachImage