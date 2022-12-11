import ExpenseItem from "./ExpenseItem";

const ExpensesContent = (props) => {

    const filteredExpenses = props.content;

    let expensesContent = <h2>No Expenses</h2>

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => 
                                <ExpenseItem 
                                    key={expense.id}
                                    title={expense.title} 
                                    amount={expense.amount} 
                                    date={expense.date} 
                                />
                            )
    }
}

export default ExpensesContent;