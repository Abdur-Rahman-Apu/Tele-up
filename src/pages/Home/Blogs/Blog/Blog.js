import React from 'react';

const Blog = ({ data }) => {

    const { blog_info } = data;
    const { img, description, title } = blog_info
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
            <figure><img src={img} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;