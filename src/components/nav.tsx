import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <div className='flex gap-3'>
            <Link to='/' className='text-gray-400 hover:text-gray-300'>
                <span className="material-symbols-outlined">
                home
                </span>
            </Link>
            <Link to='/' className='text-gray-400 hover:text-gray-300'>
                <span className="material-symbols-outlined">
                person_add
                </span>
            </Link>
            <Link to='/' className='text-gray-400 hover:text-gray-300'>
                <span className="material-symbols-outlined">
                person
                </span>
            </Link>
        </div>
    )
}

export default Nav;