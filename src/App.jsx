import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Blogs from './component/Blogs'
import Bookmarks from './component/Bookmarks'
import Blog from './component/blog/Blog'


function App() {
  const [bookmarks, setBookmarks]= useState([])
  const handleBookmarks = blog =>{
 
   const newBookmarks= [...bookmarks,blog]
   setBookmarks(newBookmarks);
   
  }
  const [redingTime, setTime]= useState(0)

const handleReadTime = (time, id) =>{

  const newReadingTime= redingTime + time;
  setTime(newReadingTime);
// remove bookmark if read 
const removeBookmark= bookmarks.filter(bookmark => bookmark.id !== id);
setBookmarks(removeBookmark);


}




  return (
    < >
      <div className='max-w-4xl mx-auto'>
        <Navbar></Navbar>
        <div className=' flex  justify-between my-6 gap-4 '>
          <Blogs handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blogs>
          <Bookmarks bookmarks ={bookmarks}  redingTime={redingTime}></Bookmarks>
        </div>

      </div>
    </>
  )
}

export default App
