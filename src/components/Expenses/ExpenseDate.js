import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    const date = props.date.getDate();
    const month = props.date.getMonth();
    const year = props.date.getUTCFullYear()

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>
        </div>
    );
}

export default ExpenseDate;