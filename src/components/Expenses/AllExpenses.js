import "./AllExpenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesContent from "./ExpensesContent";
import ExpensesChart from "./ExpensesChart";
import "./ExpensesContent.css"
import { useState } from "react";

const AllExpenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpensesByYear = props.data.filter(expense => {
        return expense.date.getUTCFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expensesInSelectedYear={filteredExpensesByYear}/>
                <ExpensesContent content={filteredExpensesByYear}/>
            </Card>
        </div>
    );
}

export default AllExpenses;