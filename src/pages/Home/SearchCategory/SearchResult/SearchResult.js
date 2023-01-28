import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResult = () => {

    const category = useParams()

    useEffect(() => {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1 className='text-xl text-center font-bold my-4 uppercase text-violet-500'>{category.categoryName}</h1>
        </div>
    );
};

export default SearchResult;