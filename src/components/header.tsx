import SwtichDarkMode from '../components/darkmode'
import Nav from './nav';
import UserInfo from './userinfo';
import { useState } from 'react';

const Header = () => {

    const [profileOpen, setProfileOpen] = useState<boolean>(false);

    return(
        <header className="bg-gray-500 py-2 px-5 flex justify-between items-center shadow-sm shadow-gray-400">
                <Nav />
                <div className='flex gap-5 justify-center items-center'>
                    <button className={`flex ${profileOpen ? 'text-gray-300' : 'text-gray-400'} relative`} onClick={ () => { setProfileOpen(!profileOpen) }}>
                        <span className="material-symbols-outlined text-3xl">
                        account_circle
                        </span>
                        { profileOpen && <UserInfo /> }
                    </button>
                   <SwtichDarkMode />
                </div>
        </header>
    )
}

export default Header;