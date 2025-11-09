import { useState } from "react";

interface Props {
  color?: string;
  children: string;
  onClick?: () => void;
}

const Button = ({ color = "gray", children, onClick }: Props) => {
  //这里要中状态管理，仅仅在onClike()函数中cnt+，并不会影响渲染中的cnt
  const [cnt, setCnt] = useState(0)
  const handleClike = () => {
    setCnt(cnt+1);
    // 这里的onClick 接受从App.tsx传入的函数
    // onClick();
  }
  return (
    <div>
      <button color={color} className={"btn btn-" + color} onClick={handleClike}>
        {children} {cnt}
      </button>
    </div>
  );
};

export default Button