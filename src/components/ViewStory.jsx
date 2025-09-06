import React, { useEffect, useState } from 'react'
import { data, Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";

const ViewStory = () => {

    const { id ,tot} = useParams();

    const [story, setStory] = useState(null);
    
     const navigate=useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`)
            .then((data) => data.json())
            .then((data) => setStory(data))
            .catch(err => console.log(err))
    }, [id])

    if( id > tot || id <= 0 ){
        navigate('/');
    }

    return (
        <div>
            {story ?
                <div className='flex justify-center gap-4'>
                    <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`} className='text-4xl  flex items-center'><FaArrowCircleLeft/></Link>
                    <img className='w-1/3 h-screen' src={story.image} alt="story" />
                    <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`} className='text-4xl  flex items-center'><FaArrowCircleRight/></Link>
                </div> :
                <div>
                    Loading....
                </div>}
        </div>
    )
}

export default ViewStory;