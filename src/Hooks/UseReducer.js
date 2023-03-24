import React, {useReducer} from 'react'

function UseReducer() {
let initialstate = 0
const reducer=(state,action)=> {
    switch(action){
        case 'increament':
            return state +1;
        case 'decreament':
            return state -1;
        case 'reset':
            return initialstate;
        default:
            return state;
    }
}
    const [count,dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
        <div>count- {count}</div>
      <button onClick={()=>dispatch('increament')}>increament</button>
      <button onClick={()=>dispatch('decreament')}>decreament</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}

export default UseReducer
