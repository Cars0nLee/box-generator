import React, {useState} from "react"

const Display = (props) => {
    return(
        <div style={{display: "flex"}}>
            {props.userInput.map((input) =>{
                return (
                        <div style={{
                            backgroundColor: input,
                            width: "100px",
                            height: "100px"
                        }}></div>
                )
            })}
        </div>
    )
}

export default Display;
