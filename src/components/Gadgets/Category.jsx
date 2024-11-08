import { NavLink } from 'react-router-dom';

const Category = ({category}) => {

    const { name, categories } = category;
    
    return (
        <nav id='links' >
            <li className=' text-2xl flex mx-auto my-3 w-48 justify-center rounded-xl'>
                <NavLink
                    to={`/gadgets/${categories}`}
                    className={({ isActive }) =>
                        `btn w-32 rounded-full ${isActive ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-500'}`
                    }>
                    {name}
                </NavLink>
            </li>
        </nav>
    );
};

export default Category;