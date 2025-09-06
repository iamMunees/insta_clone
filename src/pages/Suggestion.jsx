import React, { useEffect, useState } from 'react';

const Suggestion = () => {
  const [profile, setProfile] = useState(null);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data[0]))
  }, []);


  useEffect(() => {
    fetch('http://localhost:3000/suggetion')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='p-3'>

      {profile ? (
        <div className="flex py-4">
          <img
            className="w-10 h-10 rounded-full"
            src={profile.profile_pic}
            alt={profile.username}
          />
          <div className="ml-4">
            <p className="font-semibold text-2xl">{profile.username}</p>
          </div>
          <button className='font-semibold ml-5 text-blue-500 '>Switch</button>
        </div>
      ) : (
        <div>Loading profile...</div>
      )}

      <div className="mt-4 flex justify-evenly">
        <p className="font-semibold">Suggestions for you</p>
         <p className='font-semibold'>See all</p>
      </div>

      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="flex gap-3 p-3">
            <img
              className="w-10 h-10 rounded-full"
              src={user.profile_pic}
              alt={user.username}
            />
            <p className="font-semibold text-1xl mt-1">{user.username}</p>
            <button className="text-blue-500 text-sm">Follow</button>
          </div>
        ))
      ) : (
        <div>No suggestions available</div>
      )}
    </div>
  );
};

export default Suggestion;
