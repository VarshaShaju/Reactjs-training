import Button from "../components/Button";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slices/counterSlice'

const Counter=()=> {
        const count = useSelector((state) => state.counter.value)
        const dispatch = useDispatch()
    return(

        <div> <span>Count = {count}</span>
        <Button
            label="Increment"
            handleClick={() => dispatch(increment())}/>
        <Button
            label="Decrement"
            handleClick={() => dispatch(decrement())}/>
         </div>
    )
    
}

export default Counter;