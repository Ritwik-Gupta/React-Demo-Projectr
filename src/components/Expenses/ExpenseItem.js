import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import { useState } from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)

    const buttonClickHandler = () => {
        console.log("Old Title: " + title);
        setTitle("Updated!!");
        console.log("Title Updated!");
    }

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <h1 className="expense-item__price">${props.amount}</h1>
                <button onClick={buttonClickHandler}>Click Me!</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;