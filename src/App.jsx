// App.js
import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber, resetNumber } from './actions';

const App = () => {
    // Use useSelector to get the current value of changeTheNumber from the Redux state
    const myState = useSelector((state) => state.changeTheNumber);
    
    // Use useDispatch to get the dispatch function to send actions to the Redux store
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Increment/Decrement Counter</h1>
            <h4>Using React and Redux</h4>
            <div className="quantity">
                <a className='quantity__minus' title='Decrement' onClick={() => dispatch(decNumber())}>
                    <span>-</span>
                </a>
                <input name='quantity' type="text" className='quantity__input' value={myState} readOnly />
                <a className='quantity__plus' title='Increment' onClick={() => dispatch(incNumber())}>
                    <span>+</span>
                </a>
            </div>
            <button className='reset_button' title='Reset' onClick={() => dispatch(resetNumber())}>
                Reset
            </button>
        </div>
    );
}

export default App;
