import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpenseItem item={props.items[0]} />
            <ExpenseItem item={props.items[1]} />
            <ExpenseItem item={props.items[2]} />
            <ExpenseItem item={props.items[3]} />
        </Card>
    );
}

export default Expenses;
