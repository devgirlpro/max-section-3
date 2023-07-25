import React from 'react';
import './ExpenceItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);
    const expenceTitle = 'CareInsurance';
    const expenseAmount = 298.48


    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenceTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>

        </div >
    )
}

export default ExpenseItem