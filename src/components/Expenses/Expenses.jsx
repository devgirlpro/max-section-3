import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
        console.log('from state =>', filteredYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
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
        </div>
    );
};

export default Expenses;
