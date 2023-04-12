import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/features/counter/counterSlice'
import { useState } from 'react'


export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [amount, setAmount] = useState(0)


    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <div><h1>by amount</h1>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} />
                    <button onClick={() => dispatch(incrementByAmount(parseFloat(amount)))} >increment by amount</button>
                </div>
            </div>
        </div>
    )
}