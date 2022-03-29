import { FC } from "react"
import "./Tooltip.scss"

interface Tooltip {showing:boolean, setShowing:Function, safeArea:string}
const Tooltip:FC<Tooltip> = (props) => {

  window.addEventListener("click", e => {
    const clickedEl = e.target as HTMLElement
    if(!clickedEl.closest(props.safeArea) && props.showing) {
      props.setShowing(false)
    }
  })

  return (
    <div className="Tooltip"> 
      {props.children}
    </div>
  )
}

export default Tooltip