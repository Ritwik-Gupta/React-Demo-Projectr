import "./ExpenseItem.css"

function ExpenseItem() {
    return(
        <div className="expense-item">
            <div>Expense Item</div>
            <div>
                <div className="expense-item-decription">Car Insurance</div>
                <h1 className="expense-item__price">$294.10</h1>
            </div>
        </div>
    );
}

export default ExpenseItem;