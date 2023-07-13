import StatsCard from "./statscard";

const Stats = () => {
    return(
        <div className="flex flex-wrap p-5 gap-5 justify-center sm:justify-start">
            <StatsCard type="Income" />
            <StatsCard type="Expense" />
            <StatsCard type="Top 3 Income" />
            <StatsCard type="Top 3 Expense" />
        </div>
    )
}

export default Stats;