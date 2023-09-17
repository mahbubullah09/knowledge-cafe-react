import Bookmark from "./bookmark/Bookmark";


const Bookmarks = ({ bookmarks, redingTime }) => {

    return (
        <div className=" w-1/3 ">
            <h2 className="bg-[#6047ec] bg-opacity-10  border border-[#6047EC] border-solid  py-2 px-4 text-center text-xl font-bold rounded-md">Spent time on read : {redingTime} min</h2>

            <div className="bg-[#111111] bg-opacity-5 rounded-md  h-full my-4 px-4 ">
                <h2  className="text-xl pt-2 font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;