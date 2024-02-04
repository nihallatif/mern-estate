import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [showUserInterestsError, setShowUserInterestsError] = useState(false);
  const [allUserInterests, setUserInterests] = useState([]);
  const {currentUser} = useSelector((state) => state.user);

  useEffect(() => {
    handleShowUserInterests();
  }, []);

  const handleShowUserInterests = async () => {
    try {
      setShowUserInterestsError(false);
      const res = await fetch(`/api/interest/getuserinterests/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowUserInterestsError(true);
        return;
      }
      setUserInterests(data);
      // Loop through the user interests and create list items to display them
      data.interestIds.forEach(interest => {
          const anchor = document.createElement('a');
          anchor.textContent = interest.name;
          anchor.href = `/interest/${interest._id}`;
          anchor.classList = "list-none hover:bg-gray-100 hover:no-underline active:bg-gray-100 rounded-lg p-2 px-6 text-lg";
          userInterestList.appendChild(anchor);
      });
    } catch (error) {
      setShowUserInterestsError(true);
    }
  };

  return (
    <div>
      <div className="bg-white w-60 p-5 flex flex-col text-black fixed h-screen">
        {showUserInterestsError === true && <p className='text-gray-600 mt-5 justify-start'>No Interests Found. Please select an Interest to receive posts.</p> }
        <div className="flex flex-1 flex-col" id="userInterestList">
        
        </div>
        <div>Foot</div>
      </div>
    </div>
  );
}
