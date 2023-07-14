
const Stats = () => {
    return(
        <div className="flex p-5">
            <div className="bg-white dark:bg-gray-300 w-full p-3 rounded-md flex flex-col gap-5">
                <div className="flex justify-between">
                    <h1>Income and Expenses</h1>
                    <p>2022-2023</p>
                </div>
                <div className="flex gap-5">
                    <div className="bg-gray-100 w-fit p-3 rounded-lg">
                        <p>$1,1512,521</p>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div>Income</span>
                    </div>
                    <div className="bg-gray-100 w-fit p-3 rounded-lg">
                        <p>$612,521</p>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-pink-500"></div>Expense</span>
                    </div>
                    <div className="bg-gray-100 w-fit p-3 rounded-lg">
                        <p>+48%</p>
                        <span className="flex items-center gap-1">Profit</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3 w-full">
                            <h1 className="w-28 text-center">Shopping</h1>
                            <div className="w-full">
                                <div className="h-6 w-1/2 bg-pink-500"></div>
                            </div>
                        </div>
                        <div className="flex gap-3 w-full">
                            <h1 className="w-28 text-center">Family</h1>
                            <div className="w-full">
                                <div className="h-6 w-1/3 bg-pink-500"></div>
                            </div>
                        </div>
                        <div className="flex gap-3 w-full">
                            <h1 className="w-28 text-center">Invoice</h1>
                           <div className="w-full">
                                <div className="h-6 w-1/2 bg-blue-500"></div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;