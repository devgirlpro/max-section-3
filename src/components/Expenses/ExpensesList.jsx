import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.filteredExpensesItems.length === 0) {
        console.log(props.filteredExpensesItems);
        return <h2 className='expenses-list__fallback'>Found No Expenses.</h2>;
    }

    return (
        <ul className='expenses-list'>
            {props.filteredExpensesItems.map((item) => (
                <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
            ))}
        </ul>
    );
};

export default ExpensesList;
