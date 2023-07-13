const StatsCard = ( {type}: { type:string } ) => {

    return(
        <div className="bg-white shadow-sm shadow-gray-400 p-3 text-gray-600">
            <h1 className="text-lg"><b>{type}</b></h1>
            <ul>
                <li>
                    <span>
                        Shopping: 400
                    </span>
                    <div className="h-2 w-1/2 bg-red-500"></div>
                </li>
                <li>
                    <span>
                            Family: 700
                    </span>
                    <div className="h-2 w-2/3 bg-yellow-500"></div>
                </li>
                <li>
                    <span>
                        Shopping: 2500
                    </span>
                    <div className="h-2 w-4/5 bg-blue-500"></div>
                </li>
            </ul>
        </div>
    )
}

export default StatsCard;