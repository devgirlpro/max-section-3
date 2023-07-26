import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className='expenses'>
            <ExpenseItem item={props.items[0]} />
            <ExpenseItem item={props.items[1]} />
            <ExpenseItem item={props.items[2]} />
            <ExpenseItem item={props.items[3]} />
        </div>
    );
}

export default Expenses;
