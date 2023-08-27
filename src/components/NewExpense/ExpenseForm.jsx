import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEntereddDate] = useState('');
    const [showForm, setShowForm] = useState(false);

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setEntereddDate(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEntereddDate('');
    };

    const hideFormHandler = () => {
        setShowForm(false);
    };

    const showFormHandler = () => {
        setShowForm(true);
    };

    return (
        <div>
            {showForm === false && <button onClick={showFormHandler}>Add New Expense</button>}
            {showForm === true && (
                <form onSubmit={submitHandler}>
                    <div className='new-expense__controls'>
                        <div className='new-expense__control'>
                            <label>Title</label>
                            <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
                        </div>
                        <div className='new-expense__control'>
                            <label>Amount</label>
                            <input
                                type='number'
                                min='0.01'
                                step='0.01'
                                onChange={amountChangeHandler}
                                value={enteredAmount}
                            />
                        </div>
                        <div className='new-expense__control'>
                            <label>Date</label>
                            <input
                                type='date'
                                min='2019-01-01'
                                max='2022-12-31'
                                onChange={dateChangeHandler}
                                value={enteredDate}
                            />
                        </div>
                        <div>
                            <button onClick={hideFormHandler}>Cancel</button>
                            <button type='submit'>Add Expense</button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ExpenseForm;
