import { useState } from "react";
interface Props {
  children: string;
  maxChar: number;
}


const Expandable = ({ children, maxChar }: Props) => {
  const [isExpended, setExpanded] = useState(false)
  if (children.length < maxChar) return <p>{children}</p>

  const res = isExpended ? children : children.substring(0,maxChar)+"..."
  let button:string = isExpended ? "Less" : "More"
  return <p>{res}<button onClick={()=>{
    setExpanded(!isExpended)
  }}>{button}</button></p>
};

export default Expandable;
