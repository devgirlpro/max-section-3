import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
    //instead 3 state we using useState only onse and passing in an object as a value

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    
    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { 
                ...prevState,
                enteredTitle: event.target.value  
            }
        })

    }
    const  amountChangeHandler = (event) => {
        setUserInput((prevStatde) => {
            return {
                ...prevStatde,
                enteredAmount: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevStatde) => {
            return {
                ...prevStatde,
                enteredDeate: event.target.value
            }
        })
    }
    
    //have only one changeHandler instead 3 separated changeHandler

    /*   const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setUserInput((prevState) => {
                return {
                    ...prevState,
                    enteredTitle: event.target.value,
                };
            });
        }

        if (identifier === 'date') {
            setUserInput((prevState) => {
                return {
                    ...prevState,
                    enteredDeate: event.target.value,
                };
            });
        }

        if (identifier === 'amount') {
            setUserInput((prevState) => {
                return {
                    ...prevState,
                    enteredAmount: event.target.value,
                };
            });
        }
    }; */

    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDeate),
        };
        console.log(ExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEntereddDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} />
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
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
