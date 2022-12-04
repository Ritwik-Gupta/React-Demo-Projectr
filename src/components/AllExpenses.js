import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css"

function AllExpenses(props) {
    return(
        <div>
            <div>
            <ExpenseItem
                title = {props.data[0].title}
                amount = {props.data[0].amount}
                date = {props.data[0].date}
            />
            </div>
            <div>
                <ExpenseItem
                    title = {props.data[1].title}
                    amount = {props.data[1].amount}
                    date = {props.data[1].date}
                />
            </div>
            <div>
                <ExpenseItem
                title = {props.data[2].title}
                amount = {props.data[2].amount}
                date = {props.data[2].date}
                />
            </div>
            <div>
                <ExpenseItem
                title = {props.data[3].title}
                amount = {props.data[3].amount}
                date = {props.data[3].date}
                />
            </div>
        </div>
           
    );
}

export default AllExpenses;