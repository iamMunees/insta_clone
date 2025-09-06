import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stories = () => {
  const [storys, setStory] = useState([]);

  const navigate=useNavigate();

  let tot=0;

  useEffect(() => {
    fetch('http://localhost:3000/story')
      .then((res) => res.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='flex space-x-4 p-4'>
      <div>
        {tot=storys.length}
      </div>
      {storys.length > 0 ? (
        storys.map((story) => (
          <div key={story.id} onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className='p-1 bg-gradient-to-r from-red-500 to-purple-700 w-20 h-20 rounded-full overflow-hidden'>
              <img
                src={story.user.profile_pic}
                alt={story.user.username}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <p className="text-black font-semibold overflow-hidden">{story.user.username}</p>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Stories;
