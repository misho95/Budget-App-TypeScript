import SwtichDarkMode from '../components/darkmode'
import Nav from './nav';

const Header = () => {
    return(
        <header className="bg-green-500 py-2 px-5 flex justify-between items-center shadow-sm shadow-gray-400">
                <Nav />
                <SwtichDarkMode />
        </header>
    )
}

export default Header;