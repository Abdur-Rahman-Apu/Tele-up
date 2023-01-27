import React from 'react';

const TrendingCard = ({ data }) => {
    const { img, title } = data.blog_info
    return (
        <div className="card h-[440px] bg-base-100 shadow-xl mr-4">
            <img className='img-fluid w-full h-[200px]' src={img} alt="img" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;