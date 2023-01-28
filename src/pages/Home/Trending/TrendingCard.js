import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrendingCard = ({ data }) => {
    const { img, title, description } = data.blog_info

    const navigate = useNavigate()

    const handleData = () => {
        navigate('/details', { state: data })
    }
    return (
        <div className="card h-full bg-base-100 shadow-xl mr-4">
            <img className='img-fluid w-full h-[200px] object-cover' src={img} alt="img" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 50) + '...'}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleData} className="btn bg-violet-500">Details</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;