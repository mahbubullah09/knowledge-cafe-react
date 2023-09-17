import { useEffect, useState } from "react";
import Blog from "./blog/Blog";
import propTypes from 'prop-types';


const Blogs = ({handleBookmarks,handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
      .then(data => setBlogs(data))
    },[])
    return (
        <div className=" w-2/3 h-full">
            

            {
               blogs.map(blog => <Blog 
                key={blog.id} 
                blog={blog} 
                handleBookmarks={handleBookmarks} 
                handleReadTime={handleReadTime}></Blog>)
            }
         
            
        </div>
    );
};
Blogs.PropTypes = {
    handleBookmarks: propTypes.func,
    handleReadTime: propTypes.func
}

export default Blogs;