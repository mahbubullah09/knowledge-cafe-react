import profile from '../assets/images/profile.png'

const Navbar = () => {
    return (
       <div className='flex justify-between items-center p-4  border-b '>
        <h2 className=' font-bold text-2xl'>Knowledge Cafe </h2>
        <img className=' w-10' src={profile} alt="" />
        </div>
    );
};

export default Navbar;