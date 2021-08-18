import React, {useState} from 'react'

export default function TurnCounter() {
    const [Count, setCount] = useState(3)
    return (
        <div >
         
         <h3 className="bg-dark py-3 rounded">{Count}</h3> 

        </div>
    )
}
