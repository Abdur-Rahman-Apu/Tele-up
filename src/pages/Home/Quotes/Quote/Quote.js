import React from 'react';

const Quote = ({ data }) => {
    const { name, quote, img } = data;

    return (

        <div className="w-full h-[350px] max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-fill" src={img} alt="img" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                <blockquote className="text-base text-justify mx-6 text-gray-500 dark:text-gray-400"><p>{quote}</p></blockquote>

            </div>
        </div>

    );
};

export default Quote;