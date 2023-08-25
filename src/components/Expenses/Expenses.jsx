import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.items.filter((item) => {
        return (
            item.date.getFullYear().toString === filteredYear
        )
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
                {filteredExpense.map((item) => (
                    <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
