import { useSelector } from 'react-redux';

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='p-5'>
      <div className='w-full border border-solid border-slate-200 rounded-md p-3'>
        <div className='bg-white flex flex-row justify-between items-center'>
          <div className='flex items-center gap-3'>
          <img className='rounded-full h-12 w-12 object-cover' src={currentUser.avatar} alt='profile' />
          <div className='flex-none'>
            <div className='text-md text-black'>{currentUser.username}</div>
            <div className='text-[12px] text-gray-500'>23 mins ago</div>
          </div>
          </div>
          <div class="dropdown inline-block">
              <button class="font-semibold py-2 px-4 inline-flex items-center">
                <i className='fa fa-ellipsis'></i>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-20 shadow-2xl rounded">
                <li className=''><a class="rounded-t bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="#">Mute {currentUser.username}</a></li>
                <li className=''><a class="bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="#">Option Two</a></li>
                <li className=''><a class="rounded-b bg-gray-50 hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap" href="#">Option Three</a></li>
              </ul>
            </div>
        </div>
        <img className='mt-5 w-auto h-auto rounded-md' src='https://pbs.twimg.com/media/GFU6XMCakAArx9C?format=jpg&name=small'></img>
      </div>
    </div>
  )
}
