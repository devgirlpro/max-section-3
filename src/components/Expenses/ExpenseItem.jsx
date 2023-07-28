import React, { useState } from 'react';
import './ExpenceItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.item.title);

    function changeTitleHandler() {
        console.log('tite will change');
        setTitle('Updated!');
    }
    return (
        <Card className='expense-item'>
            {/* <div>{props.item.date.toISOString()}</div> */}
            <ExpenseDate date={props.item.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.item.amount}</div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
