
const Container = ({children}) => {
    return(
        <div className="bg-gray-200 w-full h-full min-h-screen p-2 flex flex-col gap-5">
            {children}
        </div>
    )
}

export default Container;