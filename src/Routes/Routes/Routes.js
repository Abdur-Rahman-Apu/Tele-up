import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import Home from '../../pages/Home/Home/Home'
import SearchResult from '../../pages/Home/SearchCategory/SearchResult/SearchResult'
import Pricing from '../../pages/Pricing/Pricing'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/pricing',
                element: <Pricing></Pricing>
            },
            {
                path: '/search/:categoryName',
                element: <SearchResult></SearchResult>

            }
        ]
    }
])