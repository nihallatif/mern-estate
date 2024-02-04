import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function Sidebar() {
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
          <Link to="/profile" className="flex justify-start items-center gap-2">
          <i className='fa fa-user'></i> Profile
          </Link>
          </li>
          <li className='hover:bg-gray-100 hover:no-underline active:bg-gray-100 rounded-lg p-2 px-6 text-lg'>
          <Link to="/interests" className="flex justify-start items-center gap-2">
          <i className='fa fa-heart'></i> Interests
          </Link>
          </li>
          </ul>
        </div>
        <div>Foot</div>
    </div>
  )
}