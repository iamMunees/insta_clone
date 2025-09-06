import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ViewStory = () => {
  const { id, tot } = useParams();
  const [story, setStory] = useState(null);
  const [liked, setLiked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => setStory(data))
      .catch(err => console.log(err))
  }, [id]);

  if (id > tot || id <= 0) {
    navigate('/');
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {story ? (
        <div className="flex justify-center items-center gap-8 w-full max-w-4xl">
          <Link 
            to={`/story/${Number(id) - 1}/${tot}`} 
            className="text-gray-500 hover:text-gray-700 text-5xl transition"
          >
            <FaArrowCircleLeft />
          </Link>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-2/3">
            <img 
              className="h-96 w-full object-cover rounded-xl mb-4" 
              src={story.image} 
              alt="story" 
            />
            <div className="flex justify-between items-center w-full mt-3 px-4">
              <label 
                htmlFor="message" 
                className="flex-1 h-10 border rounded-lg px-3 py-2 text-gray-400 cursor-text"
              >
                Add a comment...
              </label>
              <button 
                onClick={() => setLiked(!liked)} 
                className="ml-4 text-2xl transition"
              >
                {liked ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-600 hover:text-red-500" />
                )}
              </button>
            </div>
          </div>
          <Link 
            to={`/story/${Number(id) + 1}/${tot}`} 
            className="text-gray-500 hover:text-gray-700 text-5xl transition"
          >
            <FaArrowCircleRight />
          </Link>
        </div>
      ) : (
        <div className="text-lg font-medium text-gray-600">Loading...</div>
      )}
    </div>
  )
}

export default ViewStory;
