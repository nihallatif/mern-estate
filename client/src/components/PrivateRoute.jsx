import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSideBar from './RightSideBar';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? 
  <div>
  <Header />
  <div className='flex flex-row'>
    <div className='mt-16'><Sidebar /></div>
    <div className='w-1/2 mt-16 ml-80'><Outlet /></div>
    <div className='w-1/3 mt-16 ml-0'><RightSideBar /></div>
  </div>
  </div>
   : <Navigate to='/sign-in' />;
}