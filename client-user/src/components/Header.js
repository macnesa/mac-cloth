import { useState, Fragment } from "react"



export default function Header(props) {

  const [headerStyle, useheaderStyle] = useState(
    {
      background: "white",
      color: "red",
      cursor: "pointer"
    }
  )

  return (
    <Fragment>
      <div style={headerStyle} onClick={function () { alert() }} >
        <p> {props.innerHTML} </p>
      </div>
    </Fragment>
  )
}
