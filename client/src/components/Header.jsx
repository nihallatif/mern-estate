import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    
    <div>
    {currentUser ?
    <div className="fixed w-full">
    <header className="bg-purple-900">
          <div className="flex justify-between items-center mx-auto p-2">
            <Link to="/">
              <h1 className="font-bold text-sm sm:text-xl flex flex-wrap px-3">
                <span className="text-white">InfraEstate</span>
              </h1>
            </Link>

            <form className="bg-slate-100 p-3 rounded-lg flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none w-24 sm:w-64" />
              <button>
                <FaSearch className="text-purple-700" />
              </button>
            </form>
            <ul className="flex gap-4 items-center px-3">
              <Link to="/">
                <li className="hidden sm:inline text-white hover:underline">
                  Home
                </li>
              </Link>
              <Link to="/interests">
                <li className="hidden sm:inline text-white hover:underline">
                  Interests
                </li>
              </Link>
              {currentUser ? <span className="text-white">{currentUser.username}</span> : ''}
              <Link to='/profile'>
                <img
                  className='rounded-full h-9 w-9 object-cover'
                  src={currentUser.avatar}
                  alt='profile' />
              </Link>
            </ul>
          </div>
        </header>
    </div>
    
    : null}
    </div>
    )
}
