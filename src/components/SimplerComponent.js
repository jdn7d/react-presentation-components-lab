// Code SimplerComponent Here
import React from 'react'

handleClick = (props) => {
   <div>{props}</div>
}

const SimplerComponent = props => <div onClick = {props.handleClick}> I am just happy.</div>

export default SimplerComponent