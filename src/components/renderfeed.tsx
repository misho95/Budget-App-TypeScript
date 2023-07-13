
const RenderFeed = () => {

    const data = [
        {
            id: 1,
            date: '20-05-1995',
            amount: 200,
            cat: 'shopping',
            type: false
        },
        {
            id: 2,
            date: '20-05-1995',
            amount: 500,
            cat: 'invoice',
            type: true
        }

    ]

    return(
        <div className="flex flex-wrap p-1 gap-3 justify-center sm:justify-start">
        {
            data.map( (inv) => {
                return(
                    <div key={inv.id} className={`flex flex-col bg-gray-100 shadow-sm shadow-gray-400 rounded-md p-4 text-gray-500`}>
                    <span>
                      <b>date:</b> {inv.date}
                    </span>
                    <span>
                      <b>amount:</b> {inv.amount}
                    </span>
                    <span>
                      <b>cat:</b> {inv.cat}
                    </span>
                    <span className="flex gap-1">
                      <b>type:</b>
                      <p className={inv.type ? 'text-red-500' : 'text-green-500'}>{inv.type ? 'expense' : 'income'}</p>
                    </span>
                  </div>
                )
            })
       
        }
    </div>
    )
}

export default RenderFeed;