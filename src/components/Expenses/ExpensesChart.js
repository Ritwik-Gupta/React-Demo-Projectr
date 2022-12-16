import Chart from "../Charts/Chart";

const ExpensesChart = (props) => {

    let monthlyExpenses= [
        {label:"Jan", value:0},
        {label:"Feb", value:0},
        {label:"Mar", value:0},
        {label:"Apr", value:0},
        {label:"May", value:0},
        {label:"Jun", value:0},
        {label:"Jul", value:0},
        {label:"Aug", value:0},
        {label:"Sep", value:0},
        {label:"Oct", value:0},
        {label:"Nov", value:0},
        {label:"Dec", value:0},
    ]

    for(let expense of props.expensesInSelectedYear){
        const expenseMonth = expense.date.getMonth();
        monthlyExpenses[expenseMonth].value += expense.amount;

        // let maxExpense=monthlyExpenses[0].value;
        // for(month of monthlyExpenses){
        //     if(month.value > maxExpense){
        //         maxExpense = month.value;
        //     } 
        // }
    } 

    return(
        <Chart dataPoints={monthlyExpenses} />
    )
}

export default ExpensesChart;