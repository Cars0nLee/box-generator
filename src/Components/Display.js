import React, {useState} from "react"

const Display = (props) => {
    return(
        <div>
            {props.userInput.map((input) =>{
                return (
                    <div>
                        <div style={{
                            backgroundColor: input,
                            width: "100px",
                            height: "100px"
                        }}></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Display;