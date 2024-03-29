import React from "react"
import { cn } from "../../../lib/utils"
import { Link, useResolvedPath, useMatch } from "react-router-dom"


interface AsideSingleItemProps {
  path: string
  title: string
  icon: JSX.Element
  className?: string
}



const AsideSingleItem: React.FC<AsideSingleItemProps> = (props) => {
  const resolvedPath = useResolvedPath(props.path)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link to={props.path}>
      <div className={cn(
        `flex items-center align-middle p-4 text-black hover:translate-x-1 duration-300 ease-in-out group 
          ${isActive ? "text-blue-900 translate-x-1" : ""} ${props.className ?? ''}`
      )}
      >
        <span className={cn(
          `group-hover:translate-x-2 duration-300 ease-in-out ${isActive ? "translate-x-2" : ""}`
        )}>{props.icon}</span>
        <span className="ml-4">{props.title}</span>
      </div>
    </Link>
  )
}

export default AsideSingleItem