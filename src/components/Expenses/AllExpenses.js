import "./AllExpenses.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesContent from "./ExpensesContent";
import "./ExpensesContent.css"
import { useState } from "react";

const AllExpenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getUTCFullYear().toString() === filteredYear
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesContent content={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default AllExpenses;