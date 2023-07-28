import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDeate, setEntereddDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        console.log(enteredTitle);
    };
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        console.log(enteredAmount);
    };
    const dateChangeHandler = (e) => {
        setEntereddDate(e.target.value);
        console.log(enteredDeate);
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enteredDeate}/>
                </div>
                <div>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
