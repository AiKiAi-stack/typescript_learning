
interface Props{
  color:string
  children:string
  onClick: () => void;
}
const Button = ({color, children, onClick}:Props) => {
  return (
    
<div>
        <button color={color} className={"btn btn-" + color} onClick={onClick}>{children}</button>
</div>
  )
}

export default Button