

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="text-lg bg-white p-2 my-2 rounded-md font-semibold">
            <h2>{title}</h2>
            
        </div>
    );
};

export default Bookmark;