import React, {useState} from "react"

const Input= (props) => {
    const [input, setInput] = useState("")

    const createBox = (e) => {
        e.preventDefault()
        props.newColor(input)
        setInput("")
    }

    return(
        <form onSubmit={createBox}>
            <h2>Create Box</h2>
            <label>Color: </label>
            <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}></input>
            <input type="submit" value="Add"></input>
        </form>
    )
}

export default Input;