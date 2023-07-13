import { Link } from 'react-router-dom' 

const UserInfo = () => {
    return(
        <div className="bg-gray-100 p-3 w-full flex flex-col gap-2 rounded-lg shadow-sm shadow-gray-400 text-gray-500 absolute top-10 -left-32 w-60">
            <h1 className='text-lg pl-3 flex gap-1'>Hi <p className='text-purple-500'>Misho Chapidze</p></h1>
            <p className='w-full text-right'>Balance: 7600</p>
            <Link to='/profile' className='w-fit flex justify-center gap-2'>
                <span className="material-symbols-outlined">
                person
                </span>
                Profile
            </Link>
            <Link to='/settings' className='w-fit flex justify-center gap-2'>
                <span className="material-symbols-outlined">
                settings
                </span>
                Settings
            </Link>
            <Link to='/SignOut' className='w-fit flex justify-center gap-2'>
                <span className="material-symbols-outlined">
                logout
                </span>
                LogOut
            </Link>
        </div>
    )
}

export default UserInfo;