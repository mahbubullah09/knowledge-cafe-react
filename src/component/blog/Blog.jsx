
import {FaBookmark} from 'react-icons/fa';
import propTypes from 'prop-types';





const Blog = ({ blog , handleBookmarks, handleReadTime}) => {
  
    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;

    return (
        <div className=' p-4 rounded-md mb-2 border-slate-300 border-solid border'>
            <img className=" rounded-md " src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-2 my-4">
                    <div>
                        <img className="w-10" src={author_img} alt="" />

                    </div>
                    <div>
                        <h4 className=' font-bold text-xl'>{author}</h4>
                        <p className=' text-[#111111] text-opacity-60 text-sm'>{posted_date}</p>

                    </div>

                </div>

                <div className='flex items-center gap-1'>
                    <h4 className=' text-[#111111] text-opacity-60 text-sm'>{reading_time} min read</h4>
                 <button onClick={()=> handleBookmarks(blog)} >   <FaBookmark></FaBookmark></button>

                </div>



            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className=' text-[#111111] text-opacity-60 text-sm my-3'>
                {
                    hashtags.map((hash, idx) => <span key={idx} className="mr-2"><a href="">#{hash}</a></span>)
                }
        
            </p>

            <button onClick={()=> handleReadTime(reading_time, id)} className='text-[#6047EC] underline font-semibold'>Mark as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: propTypes.object,
    handleReadTime: propTypes.func
    
};

export default Blog;