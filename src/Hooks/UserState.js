import React, { useState } from 'react'

function UserState() {
    let initial = 0
    const [count, setcount] = useState(initial)
    return (
        <div>
            counter: {count}
            <button onClick={()=>setcount(initial)}>reset</button>
            <button onClick={()=>setcount(count +1)}>increament</button>
            <button onClick={()=>setcount(count -1)}>decrement</button>
        </div>
    )
}

export default UserState
