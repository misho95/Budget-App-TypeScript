
const Container = ({children}: { children: string}) => {
    return(
        <div className="bg-gray-200 w-full h-full min-h-screen flex flex-col gap-5">
            {children}
        </div>
    )
}

export default Container;