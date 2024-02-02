import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Sidebar() {
    const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-white w-60 p-5 flex flex-col text-black fixed h-screen'>
        <div className='flex flex-1 flex-col'>
          <ul>
            <li className='hover:bg-gray-100 hover:no-underline active:bg-gray-100 rounded-lg p-2 px-6 text-lg'>
            <Link to="/home" className="flex justify-start items-center gap-2">
            <i className='fa fa-house'></i> Home
            </Link>
          </li>
          <li className='hover:bg-gray-100 hover:no-underline active:bg-gray-100 rounded-lg p-2 px-6 text-lg'>
          <Link to="/about" className="flex justify-start items-center gap-2">
          <FaHeart /> About
          </Link>
          </li>
          </ul>
        </div>
        <div>Foot</div>
    </div>
  )
}