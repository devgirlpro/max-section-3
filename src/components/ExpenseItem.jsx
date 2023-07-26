import React from "react";
import "./ExpenceItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            {/* <div>{props.expense.date.toISOString()}</div> */}
            <ExpenseDate date={props.item.date} />
            <div className='expense-item__description'>
                <h2>{props.item.title}</h2>
                <div className='expense-item__price'>{props.item.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
