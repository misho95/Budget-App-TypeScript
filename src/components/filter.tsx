const Filter = () => {
    return(
        <div className="p-2">
            <form className="flex flex-col md:flex-row justify-around gap-3">
                <label>
                    <input type="date" className="bg-gray-100 py-1 px-2 rounded-md text-gray-500 shadow-sm shadow-gray-400 w-full sm:w-fit lg:w-full"/>
                </label>
                <label>
                    <select className="bg-gray-100 py-1 px-2 rounded-md text-gray-500 shadow-sm shadow-gray-400 w-full sm:w-fit lg:w-full">
                        <option>any</option>
                        <option>invoice</option>
                        <option>shopping</option>
                        <option>other</option>
                    </select>
                </label>
                <label>
                    <input type="text" placeholder="min" className="bg-gray-100 py-1 px-2 rounded-md text-gray-500 shadow-sm shadow-gray-400 w-full sm:w-20 lg:w-full"/>
                </label>
                <label>
                    <input type="text" placeholder="max" className="bg-gray-100 py-1 px-2 rounded-md text-gray-500 shadow-sm shadow-gray-400 w-full sm:w-20 lg:w-full"/>
                </label>
                <label className="flex gap-3">
                    <button type="reset" className="bg-purple-400 hover:bg-purple-700 text-purple-900 hover:text-purple-200 px-5 py-1 rounded-lg shadow-sm shadow-gray-400 w-full">Reset</button>
                    <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-yellow-800 hover:text-yellow-300 px-5 py-1 rounded-lg shadow-sm shadow-gray-400 w-full">Filter</button>
                </label>
            </form>
        </div>
    )
}

export default Filter;