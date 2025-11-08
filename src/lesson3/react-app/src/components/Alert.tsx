import type { ReactNode } from "react"

interface Props {
    // if want to transfer HTML structure, use ReactNode class
    children: ReactNode
    onClose: () => void
}

const Alert = ({children, onClose}:Props) => {

  return (
    <div className="alert alert-danger alert-dismissible" role="alert">{children}
     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
    
  )
}

export default Alert