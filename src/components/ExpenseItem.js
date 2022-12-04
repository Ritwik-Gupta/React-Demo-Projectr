import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"; 

function ExpenseItem(props) {
    return(
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h1 className="expense-item__price">${props.amount}</h1>
            </div>
        </div>
    );
}

export default ExpenseItem;