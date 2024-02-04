import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';

function Interest() {
const [showInterestsError, setShowInterestsError] = useState(false);
const [allInterests, setInterests] = useState([]);

useEffect(() => {
    handleShowInterests();
 }, []);

const handleShowInterests = async () => {
    try {
    setShowInterestsError(false);
    const res = await fetch(`/api/interest/get/`);
    const data = await res.json();
    if (data.success === false) {
        setShowInterestsError(true);
        return;
    }

    setInterests(data);
    } catch (error) {
    setShowInterestsError(true);
    }
};
  return (
    <div>
        <p className='text-red-700 mt-5'>
            {showInterestsError ? 'Error showing interests' : ''}
        </p>
        {allInterests && allInterests.length > 0 && (
        <div className='flex flex-col gap-4'>
          <h1 className='text-center mt-7 text-2xl font-semibold'>
            Interests
          </h1>
          {allInterests.map((interest) => (
            <ul key={interest._id} className='border rounded-lg p-3 flex justify-between items-center gap-4'>
              
              <li className='text-slate-700 font-semibold truncate flex-1'>
                {interest.name}
              </li>

              <div className='flex flex-col item-center'>
                <button onClick={() => addInterest(interest._id)} className='text-white bg-gray-300 border p-2 rounded hover:bg-green-800'>
                  Subscribe
                </button>
              </div>
            </ul>
          ))}
        </div>
      )}
    </div>
  )
}

export default Interest