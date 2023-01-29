import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorBlogs = ({ blog }) => {


    const { trending, author_info, blog_info } = blog;
    const navigate = useNavigate()

    const handleDetail = () => {
        navigate('/details', { state: blog })
    }

    return (
        <div className="card card-side bg-base-100  shadow-xl my-5">
            <figure className='w-1/2'><img className='object-cover' src={blog_info.img} alt="blog" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-3xl font-bold">{blog_info.title}</h2>
                <p>{blog_info.description.slice(0, 100) + '...'}</p>

                <div className='flex items-center'>
                    <div className="avatar mr-6">
                        <div className="w-20 rounded-full">
                            <img className='object-top' src={author_info.author_img} alt="img" />
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-bold text-[#0A72BA] '>{author_info.author_name}</p>
                        <p className='capitalize'>{author_info.designation}</p>
                        <p> <span className='font-bold text-[#0A72BA]'>Followers:</span> {author_info.followers}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleDetail} className="btn bg-[#0A72BA]">Details</button>
                </div>
            </div>
        </div>
    );
};

export default AuthorBlogs;