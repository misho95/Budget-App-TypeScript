import baseStore from '../store';
import { useEffect, useRef } from 'react'

const SwtichDarkMode = () => {

    const darkMode = baseStore(state => state.darkMode);
    const switchDark = baseStore(state => state.switchDarkMode);

    const darkSlide = useRef();
    const darkBtn = useRef();

    const switchDarkTheme = () => {
        switchDark()
    }

    useEffect( () => {
        if(!darkMode){
            document.documentElement.classList.remove('dark');
            darkSlide.current.classList.remove('left-8');
            darkSlide.current.classList.add('left-1');
            darkBtn.current.textContent = 'light_mode';
        } else {
            document.documentElement.classList.add('dark');
            darkSlide.current.classList.remove('left-1');
            darkSlide.current.classList.add('left-8');
            darkBtn.current.textContent = 'dark_mode';
        }
    }, [darkMode])

    return(
        <div>
            <div onClick={switchDarkTheme} className="w-16 h-8 bg-gray-600 rounded-full border-2 border-gray-400 relative">
                <div ref={darkSlide} className="w-5 h-5 bg-gray-500 rounded-full absolute left-1 top-1/2 -translate-y-1/2 border-2 border-gray-400 flex justify-center items-center duration-200">
                    <span ref={darkBtn} className="material-symbols-outlined text-sm text-gray-400 select-none">
                    light_mode
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SwtichDarkMode;