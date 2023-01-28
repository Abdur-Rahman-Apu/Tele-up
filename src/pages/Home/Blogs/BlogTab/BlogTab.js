import React from 'react';

const BlogTab = ({ data, handleNav }) => {

    const { category_name } = data;

    return (

        <button onClick={(e) => handleNav(e, category_name)} className="tab tab-bordered tab-active hover:bg-violet-500 hover:text-white"><p className='text-base font-bold'>{category_name}</p></button>

    );
};

export default BlogTab;