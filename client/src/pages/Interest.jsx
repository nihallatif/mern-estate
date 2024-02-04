import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';

function Interest() {
const [showInterestsError, setShowInterestsError] = useState(false);
const [allInterests, setInterests] = useState([]);
const {currentUser} = useSelector((state) => state.user);

useEffect(() => {
    handleShowInterests();
 }, []);

const handleShowInterests = async () => {
    try {
    setShowInterestsError(false);
    const res = await fetch(`/api/interest/get`);
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
  const selectedInterests = [];

  const addInterestsToArray = async (id) => {
    selectedInterests.push(id);
    //console.log(selectedInterests);
  }
  const saveInterestList = async () => {
    //console.log('Selected Interests:', selectedInterests);
    try {
      const res = await fetch(`/api/interest/createUserInterest`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: currentUser._id, interestIds: selectedInterests }),
      });
      
      const data = await res.json();
      if (data.success === false) {
          return;
      }
      } catch (error) {
    }
  }
  return (
    <div>
        <p className='text-red-700 mt-5'>{showInterestsError ? 'Error showing interests' : ''}</p>
        {allInterests && allInterests.length > 0 && (
        <div className='flex flex-col gap-4 mb-12'>
          <h1 className='text-center mt-7 text-2xl font-semibold'>
            <i className='fa fa-heart'></i> Interests
          </h1>
          {allInterests.map((interest) => (
            <ul key={interest._id} className='border rounded-lg p-3 flex justify-between items-center gap-4'>
              
              <li className='text-slate-700 font-semibold truncate flex-1'>
                {interest.name}
              </li>

              <div className='flex flex-col item-center'>
                <button onClick={() => addInterestsToArray(interest._id)} className='text-white bg-gray-300 border p-2 rounded hover:bg-green-800'>
                  Subscribe
                </button>
              </div>
            </ul>
          ))}
          <button id="saveInterestsBtn" onClick={saveInterestList} className='w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700'>Save</button>
        </div>
      )}
    </div>
  )
}

export default Interest