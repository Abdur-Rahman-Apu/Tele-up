import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ data }) => {

    const { blog_info } = data;
    const { img, description, title } = blog_info


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
            <figure className='h-[200px]'><img className='object-contain' src={img} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-justify'>{description.slice(0, 250) + '...'}</p>
                <div className="card-actions justify-end">
                    <Link to="/details"><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;