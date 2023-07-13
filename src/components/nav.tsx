import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <div className='flex gap-3'>
            <Link to='/' className='text-green-800 hover:text-green-200'>Home</Link>
            <Link to='/' className='text-green-800 hover:text-green-200'>SignUp</Link>
            <Link to='/' className='text-green-800 hover:text-green-200'>SignIn</Link>
        </div>
    )
}

export default Nav;