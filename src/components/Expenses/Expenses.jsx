import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <ExpenseItem item={props.items[0]} />
            <ExpenseItem item={props.items[1]} />
           {/*  <ExpenseItem 
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            /> */}
            <ExpenseItem item={props.items[2]} />
            <ExpenseItem item={props.items[3]} />
        </Card>
    );
};

export default Expenses;
