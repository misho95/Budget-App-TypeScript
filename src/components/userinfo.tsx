import { Link } from 'react-router-dom' 

const UserInfo = () => {
    return(
        <aside className="bg-gray-100 p-3 w-full flex flex-col gap-2 rounded-lg shadow-sm shadow-gray-400 relative text-gray-500">
            <h1 className='text-lg pl-3 flex gap-1'>Hi <p className='text-purple-500'>Misho Chapidze</p></h1>
            <p className='absolute bottom-2 right-2'>Balanace: 7000</p>
            <Link to='/profile' className='w-fit'>Profile</Link>
            <Link to='/settings' className='w-fit'>Settings</Link>
            <Link to='/SignOut' className='w-fit'>SignOut</Link>
        </aside>
    )
}

export default UserInfo;