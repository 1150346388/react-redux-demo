import React from 'react'

const MyComponent = ({ text, name, onChange, count, add, minus, toZero, incrementAsync }) => {

    return <div>
        <p>{text}</p>
        <input type="text" defaultValue={name} onChange={onChange} />
        <p>{count}</p>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={toZero}>置0</button>
        <button onClick={incrementAsync}>延迟1s+1</button>
    </div>

}

export default MyComponent