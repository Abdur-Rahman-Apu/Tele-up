import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorBlogs = ({ blog }) => {


    const { trending, author_info, blog_info } = blog;
    const navigate = useNavigate()

    const handleDetail = () => {
        navigate('/details', { state: blog })
    }

    return (
        <div className="card card-side bg-base-100 flex-col lg:flex-row  shadow-xl my-5">
            <figure className='lg:w-1/2'><img className='object-cover' src={blog_info.img} alt="blog" /></figure>
            <div className="card-body lg:w-1/2">
                <h2 className="card-title text-xl lg:text-3xl font-bold">{blog_info.title}</h2>
                <p className='text-sm'>{blog_info.description.slice(0, 200) + '...'}</p>

                <div className='flex items-center my-2'>
                    <div className="avatar mr-6">
                        <div className="w-10 lg:w-16 rounded-full">
                            <img className='object-top' src={author_info.author_img} alt="img" />
                        </div>
                    </div>
                    <div>
                        <p className='text-sm lg:text-lg font-bold text-[#0A72BA] '>{author_info.author_name}</p>
                        <p className='text-sm lg:text-lg capitalize'>{author_info.designation}</p>
                        <p className='text-sm lg:text-lg'> <span className='font-bold text-[#0A72BA]'>Followers:</span> {author_info.followers}</p>
                    </div>
                </div>
                <div className="card-actions my-10 lg:my-0 justify-center lg:justify-end">
                    <button onClick={handleDetail} className="w-full lg:w-auto border-0 btn bg-[#0A72BA]">Details</button>
                </div>
            </div>
        </div>
    );
};

export default AuthorBlogs;