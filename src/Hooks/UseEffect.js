import React,{ useState ,useEffect} from 'react'

function UseEffect() {
    const [count,setcount] = useState(0)
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })
  return (
    <div>
      <button onClick={()=>setcount(count + 1)}>click {count}</button>
    </div>
  )
}

export default UseEffect
